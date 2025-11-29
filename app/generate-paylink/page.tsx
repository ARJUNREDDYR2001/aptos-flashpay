"use client"

import { useState } from "react"
import Link from "next/link"
import { v4 as uuidv4 } from "uuid"
import { useRouter } from "next/navigation"
import { HiArrowLeft } from "react-icons/hi2"
import PayLinkForm from "@/components/paylink-form"

export default function GeneratePaylinkPage() {
  const router = useRouter()

  const handleSubmit = (data: { amount: string; currency: string; vendorAddress: string }) => {
    const id = uuidv4()

    const paylink = {
      id,
      ...data,
      status: "pending",
      createdAt: Date.now(),
    }

    const existing = JSON.parse(localStorage.getItem("flashpay_links") || "[]")
    existing.push(paylink)
    localStorage.setItem("flashpay_links", JSON.stringify(existing))

    router.push(`/payment-status/${id}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background overflow-hidden">
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
          <h1 className="text-3xl sm:text-4xl font-bold">Generate Payment Link</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <PayLinkForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
