"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { HiArrowLeft, HiCheckCircle, HiArrowTopRightOnSquare } from "react-icons/hi2"

export default function PaymentStatus() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background overflow-hidden flex flex-col">
      {/* Header */}
      <div className="border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <HiArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-2xl w-full">
          {/* Success Card */}
          <div className="bg-glass rounded-3xl p-8 sm:p-12 border border-accent/20 shadow-xl glow-cyan space-y-8 text-center">
            {/* Checkmark Animation */}
            <div className="flex justify-center pt-8">
              <div className={`relative ${isAnimating ? "animate-pulse-glow" : ""}`}>
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                  <HiCheckCircle className="w-16 h-16 sm:w-24 sm:h-24 text-accent" />
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-bold">Payment Complete!</h1>
              <p className="text-muted-foreground text-lg">Your payment has been successfully processed.</p>
            </div>

            {/* Transaction Details */}
            <div className="space-y-4 py-8 border-y border-accent/10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-background rounded-xl p-4 border border-accent/10">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Amount Received</p>
                  <p className="text-2xl font-bold text-accent">1,000 USDC</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-accent/10">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Network</p>
                  <p className="text-2xl font-bold">Aptos Testnet</p>
                </div>
              </div>

              <div className="bg-background rounded-xl p-4 border border-accent/10 space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Transaction Hash</p>
                <p className="font-mono text-sm text-muted-foreground break-all">
                  0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcd
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-left pt-2">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">From</p>
                  <p className="font-mono text-sm text-accent">0xabc...xyz</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">To</p>
                  <p className="font-mono text-sm text-accent">0x123...456</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://aptos.world" target="_blank" rel="noopener noreferrer" className="flex-1">
                <button className="w-full px-6 py-4 rounded-xl bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-colors font-semibold flex items-center justify-center gap-2">
                  <HiArrowTopRightOnSquare className="w-4 h-4" />
                  View on Aptos Explorer
                </button>
              </a>
              <Link href="/merchant-dashboard" className="flex-1">
                <button className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-accent to-secondary text-accent-foreground font-semibold hover:shadow-lg hover:glow-cyan-lg transition-all">
                  Dashboard
                </button>
              </Link>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-8 p-6 rounded-xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted-foreground">
              🎉 Payment successful! Your funds have arrived. Share your success with the Aptos community.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
