"use client"

import { HiSparkles, HiShieldCheck, HiGlobeAlt, HiCreditCard } from "react-icons/hi2"

const features = [
  {
    icon: HiSparkles,
    title: "Lightning Fast",
    description: "Sub-second finality. Generate payment links and get paid instantly on Aptos.",
  },
  {
    icon: HiShieldCheck,
    title: "Secure & Trusted",
    description: "Built on Aptos infrastructure with full transaction verification and audit trails.",
  },
  {
    icon: HiGlobeAlt,
    title: "Global Reach",
    description: "Send USDC across borders with minimal fees. Powered by Aptos network.",
  },
  {
    icon: HiCreditCard,
    title: "Simple Payments",
    description: "One-click payments for merchants. QR codes, links, and integrations for every use case.",
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-32 border-t border-border/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need for{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              instant payments
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            FlashPay combines the speed of Aptos with the simplicity of payments. Send, receive, and settle instantly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group p-6 sm:p-8 rounded-2xl bg-glass border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:glow-cyan"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
