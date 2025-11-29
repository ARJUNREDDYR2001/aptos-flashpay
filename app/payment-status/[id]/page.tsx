"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import QRCode from "react-qr-code";
import { Copy } from "lucide-react";
import ConnectAndPay from "@/components/connect-and-pay";
import Navbar from "@/components/navbar";

export default function PaymentStatusPage() {
  const { id } = useParams();
  const [paylink, setPaylink] = useState<any>(null);
  const [copyMsg, setCopyMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPaymentLink = () => {
      try {
        const list = JSON.parse(localStorage.getItem("flashpay_links") || "[]");
        const found = list.find((p: any) => p && p.id === id);
        
        if (found) {
          // Small delay to ensure smooth transition
          const timer = setTimeout(() => {
            setPaylink(found);
            setIsLoading(false);
          }, 300);
          return () => clearTimeout(timer);
        } else {
          // If not found, keep showing loader
          console.log('Payment link not found');
        }
      } catch (err) {
        console.error('Error loading payment link:', err);
      } finally {
        setIsLoading(false);
      }
    };

    // Initial load
    setIsLoading(true);
    loadPaymentLink();
  }, [id]);

  // Use environment variable or current origin
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 
    (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');

  const paymentUrl = `${baseUrl}/payment-status/${id}`;

  // Copy handler
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(paymentUrl);
      setCopyMsg("Link copied!");
      setTimeout(() => setCopyMsg(""), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };


  // Always show loading state until payment link is loaded
  if (isLoading || !paylink) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
        <p className="text-muted-foreground">Preparing your payment link...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto pt-24 pb-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-accent">Payment Request</h1>

        <div className="bg-glass p-6 sm:p-8 rounded-3xl border border-accent/20 shadow-xl space-y-6">
          {/* QR + Copy */}
          <div className="flex flex-col items-center gap-4 py-2">
            <div className="p-4 bg-white rounded-xl shadow-lg">
              <QRCode 
                value={paymentUrl}
                size={180}
                level="H"
                fgColor="#000000"
                bgColor="#ffffff"
              />
            </div>

            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-4 py-2 border border-accent/30 rounded-xl hover:bg-accent/10 transition-colors"
            >
              <Copy size={18} />
              Copy PayLink
            </button>

            {copyMsg && (
              <p className="text-sm text-green-500">{copyMsg}</p>
            )}

            <p className="text-sm text-muted-foreground">
              Scan or share this link to pay
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Amount</p>
            <p className="text-2xl font-bold">
              {paylink.amount} {paylink.currency}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Vendor Address</p>
            <p className="font-mono text-sm">{paylink.vendorAddress}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <p
              className={`font-semibold ${
                paylink.status === "paid" ? "text-green-500" : "text-yellow-500"
              }`}
            >
              {paylink.status}
            </p>
          </div>

          <ConnectAndPay paylink={paylink} />
        </div>

        <Link
          href="/merchant-dashboard"
          className="inline-block mt-6 text-accent underline"
        >
          Go to dashboard
        </Link>
      </div>
    </div>
  );
}
