"use client"

import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "next/navigation"
import Link from "next/link"
import QRCode from "react-qr-code"
import ConnectAndPay from "@/components/connect-and-pay"

export default function PaymentStatusPage() {
  const { id } = useParams()
  const [paylink, setPaylink] = useState<any>(null)

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("flashpay_links") || "[]")
    const found = list.find((p: any) => p.id === id)
    setPaylink(found || null)
  }, [id])

  if (!paylink) {
    return <div className="p-8 text-center text-red-500">Payment link not found.</div>
  }

  const paymentUrl = `${window.location.origin}/payment-status/${id}`

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-accent">Payment Request</h1>

      <div className="bg-glass p-8 rounded-3xl border border-accent/20 shadow-xl space-y-6">
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
          <p className="text-sm text-muted-foreground">
            Scan to view & pay securely on Aptos
          </p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Amount</p>
          <p className="text-2xl font-bold">{paylink.amount} {paylink.currency}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Vendor Address</p>
          <p className="font-mono text-sm">{paylink.vendorAddress}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Status</p>
          <p className={`font-semibold ${paylink.status === "paid" ? "text-green-500" : "text-yellow-500"}`}>
            {paylink.status}
          </p>
        </div>

        <ConnectAndPay paylink={paylink} />
      </div>

      <Link href="/merchant-dashboard" className="inline-block mt-6 text-accent underline">
        Go to dashboard
      </Link>
    </div>
  )
}
