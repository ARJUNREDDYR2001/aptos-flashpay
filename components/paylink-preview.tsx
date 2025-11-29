"use client"

import { useState } from "react"
import Link from "next/link"
import { HiArrowLeft } from "react-icons/hi2"

interface PayLinkPreviewProps {
  data: {
    amount: string
    currency: string
    vendorAddress: string
  }
  onBack: () => void
}

export default function PayLinkPreview({ data, onBack }: PayLinkPreviewProps) {
  const [copied, setCopied] = useState(false)
  const paylink = `https://flashpay.app/pay/${Math.random().toString(36).slice(2, 9)}`

  const copyLink = () => {
    navigator.clipboard.writeText(paylink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <HiArrowLeft className="w-4 h-4" />
        Edit Payment
      </button>

      {/* QR Code Card */}
      <div className="bg-glass rounded-3xl p-8 sm:p-12 border border-accent/20 shadow-xl glow-cyan space-y-8">
        {/* QR Code */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white rounded-2xl p-8 sm:p-12">
              <svg className="w-56 h-56 sm:w-64 sm:h-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" fill="white" />
                <rect x="20" y="20" width="40" height="40" fill="black" />
                <rect x="60" y="20" width="40" height="40" fill="black" />
                <rect x="140" y="20" width="40" height="40" fill="black" />
                <rect x="20" y="60" width="40" height="40" fill="black" />
                <rect x="140" y="60" width="40" height="40" fill="black" />
                <rect x="20" y="140" width="40" height="40" fill="black" />
                <rect x="60" y="140" width="40" height="40" fill="black" />
                <rect x="140" y="140" width="40" height="40" fill="black" />
                <circle cx="100" cy="100" r="20" fill="black" opacity="0.8" />
              </svg>
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow"></span>
            <span className="text-sm font-medium text-accent">Awaiting Payment</span>
          </div>
        </div>

        {/* Payment Details */}
        <div className="space-y-4 pt-8 border-t border-accent/10">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Amount</p>
              <p className="text-2xl font-bold text-accent">
                {data.amount} {data.currency}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Network</p>
              <p className="text-2xl font-bold">Aptos</p>
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Vendor Address</p>
            <p className="font-mono text-sm text-muted-foreground break-all">{data.vendorAddress}</p>
          </div>
        </div>

        {/* PayLink */}
        <div className="space-y-3 pt-4 border-t border-accent/10">
          <label className="block text-sm font-semibold">Payment Link</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={paylink}
              readOnly
              className="flex-1 px-4 py-3 bg-background border border-accent/20 rounded-xl font-mono text-sm text-muted-foreground cursor-pointer"
            />
            <button
              onClick={copyLink}
              className="px-6 py-3 rounded-xl bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-colors font-medium"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* CTA to Dashboard */}
        <div className="pt-4 border-t border-accent/10 flex gap-3">
          <Link href="/payment-status" className="flex-1">
            <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-secondary text-accent-foreground font-semibold hover:shadow-lg hover:glow-cyan-lg transition-all">
              View Payment Status
            </button>
          </Link>
          <Link href="/merchant-dashboard" className="flex-1">
            <button className="w-full px-6 py-3 rounded-xl bg-glass border border-accent/30 text-foreground font-semibold hover:border-accent/60 transition-colors">
              Go to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
