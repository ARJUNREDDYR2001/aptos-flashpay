import type React from "react"
// Updated metadata and added Inter font import
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ChatbotWidget from "@/components/ChatbotWidget"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Aptos FlashPay - Instant USDC Payments",
  description: "Instant stablecoin payments powered by Aptos. Send and receive USDC in seconds.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/image.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/image.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/image.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`font-sans antialiased ${_inter.variable}`}>
        {children}
        <ChatbotWidget />
        <Analytics />
      </body>
    </html>
  )
}
