"use client"

import Link from "next/link"
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2"
import MerchantStats from "@/components/merchant-stats"
import PaymentTable from "@/components/payment-table"

export default function MerchantDashboard() {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-8">
        {/* Stats */}
        <MerchantStats />

        {/* Recent Payments */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">Recent Payments</h2>
          <PaymentTable />
        </div>
      </div>
    </div>
  )
}
