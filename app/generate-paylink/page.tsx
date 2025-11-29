"use client"

import { useState } from "react"
import Link from "next/link"
import { HiArrowLeft } from "react-icons/hi2"
import PayLinkForm from "@/components/paylink-form"
import PayLinkPreview from "@/components/paylink-preview"

export default function GeneratePayLink() {
  const [step, setStep] = useState<"form" | "qr">("form")
  const [formData, setFormData] = useState({
    amount: "",
    currency: "USDC",
    vendorAddress: "0xabc...xyz",
  })

  const handleSubmit = (data: typeof formData) => {
    setFormData(data)
    setStep("qr")
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
        {step === "form" && <PayLinkForm onSubmit={handleSubmit} />}
        {step === "qr" && <PayLinkPreview data={formData} onBack={() => setStep("form")} />}
      </div>
    </div>
  )
}
