"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";

const docsSections = [
  {
    id: "getting-started",
    title: "Getting Started",
    content: [
      "FlashPay is a fast and secure payment solution built on the Aptos blockchain.",
      "To get started, connect your wallet and create your first payment link.",
      "No coding required - our intuitive interface makes it easy to start accepting payments in minutes."
    ]
  },
  {
    id: "features",
    title: "Key Features",
    content: [
      "Instant Payments: Transactions are confirmed in seconds on the Aptos blockchain.",
      "Low Fees: Pay minimal transaction fees compared to traditional payment processors.",
      "Secure: Built with enterprise-grade security and encryption.",
      "Easy Integration: Simple API and SDKs for developers."
    ]
  },
  {
    id: "api",
    title: "API Reference",
    content: [
      "Our REST API allows you to integrate FlashPay into your applications.",
      "Endpoints include:",
      "- /api/v1/payments: Create and manage payments",
      "- /api/v1/wallet: Wallet operations",
      "- /api/v1/transactions: Transaction history"
    ]
  },
  {
    id: "faq",
    title: "FAQ",
    content: [
      "Q: How do I get started?\nA: Simply connect your wallet and create a payment link.",
      "\nQ: What wallets are supported?\nA: We support all Aptos-compatible wallets including Petra and Martian.",
      "\nQ: Are there any fees?\nA: We charge a small transaction fee of 0.5% per transaction."
    ]
  }
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState(docsSections[0].id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-xl font-bold mb-4">Documentation</h2>
              <nav className="space-y-2">
                {docsSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:bg-accent/10'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            {docsSections.map((section) => (
              <section 
                key={section.id}
                id={section.id}
                className={`mb-12 ${activeSection === section.id ? 'block' : 'hidden md:block'}`}
              >
                <h1 className="text-3xl font-bold mb-6">{section.title}</h1>
                <div className="prose prose-invert max-w-none">
                  {section.content.map((paragraph, i) => (
                    <p key={i} className="mb-4 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
