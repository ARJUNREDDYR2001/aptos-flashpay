"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

export default function MerchantDashboard() {
  const [links, setLinks] = useState<Array<{
    id: string;
    amount: string;
    currency: string;
    status: string;
    txHash?: string;
  }>>([]);

  // Load payment links from localStorage and set up storage event listener
  useEffect(() => {
    const loadLinks = () => {
      try {
        console.log('Loading payment links from localStorage...');
        const stored = JSON.parse(globalThis.localStorage.getItem("flashpay_links") || "[]");
        
        console.log('Raw stored data:', stored);
        
        // Ensure all entries have required fields with defaults
        const processedLinks = stored.map((link: any) => ({
          id: link.id || crypto.randomUUID(),
          amount: link.amount || '0',
          currency: 'APT', // Force APT as currency
          status: link.status || 'pending',
          vendorAddress: link.vendorAddress || '',
          txHash: link.txHash || null,
          createdAt: link.createdAt || Date.now(),
          ...link // Spread to include any additional fields
        }));
        
        // Sort by most recent first (newest first)
        const sortedLinks = [...processedLinks].sort((a, b) => b.createdAt - a.createdAt);
        
        console.log('Processed and sorted links:', sortedLinks);
        setLinks(sortedLinks);
      } catch (error) {
        console.error('Error loading payment links:', error);
        // Reset to empty array if there's an error
        setLinks([]);
      }
    };

    // Initial load
    loadLinks();

    // Listen for storage events from other tabs
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'flashpay_links' || !e.key) {
        console.log('Storage event detected, reloading payment links...');
        loadLinks();
      }
    };

    globalThis.window.addEventListener('storage', handleStorage);

    // Cleanup
    return () => {
      globalThis.window.removeEventListener('storage', handleStorage);
    };
  }, []);

  // Calculate stats
  const totalPaid = links
    .filter(link => link.status === 'paid')
    .reduce((sum, link) => sum + Number.parseFloat(link.amount), 0);
  
  const pendingPayments = links.filter(link => link.status === 'pending').length;
  const completedPayments = links.filter(link => link.status === 'paid').length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Header */}
      <div className="border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <HiArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl sm:text-4xl font-bold">Merchant Dashboard</h1>
            <Link href="/generate-paylink">
              <button className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:shadow-lg hover:glow-cyan-lg transition-all">
                New Payment
                <HiArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card p-6 rounded-xl border border-border/30">
            <h3 className="text-muted-foreground text-sm font-medium">Total Revenue</h3>
            <p className="text-2xl font-bold mt-1">${totalPaid.toFixed(2)}</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border/30">
            <h3 className="text-muted-foreground text-sm font-medium">Pending Payments</h3>
            <p className="text-2xl font-bold mt-1">{pendingPayments}</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border/30">
            <h3 className="text-muted-foreground text-sm font-medium">Completed</h3>
            <p className="text-2xl font-bold mt-1">{completedPayments}</p>
          </div>
        </div>

        {/* Recent Payments */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">Recent Payments</h2>
          {links.length === 0 ? (
            <div className="text-center py-12 border border-dashed rounded-xl">
              <p className="text-muted-foreground">No payment links yet.</p>
              <Link href="/generate-paylink" className="mt-4 inline-flex items-center text-accent hover:underline">
                Create your first payment link <HiArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {links.map((link) => (
                <div key={link.id} className="p-4 border rounded-xl bg-card hover:bg-card/80 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-lg">
                        {link.amount} APT
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Status:{" "}
                        <span
                          className={
                            link.status === "paid"
                              ? "text-green-500"
                              : link.status === "pending"
                              ? "text-yellow-500"
                              : "text-red-500"
                          }
                        >
                          {link.status.toUpperCase()}
                        </span>
                      </p>
                    </div>
                    {link.status === 'paid' && link.txHash ? (
                      <a
                        href={`https://explorer.aptoslabs.com/txn/${link.txHash}?network=testnet`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:underline flex items-center"
                      >
                        View in Explorer <HiArrowRight className="ml-1 w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        {link.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
