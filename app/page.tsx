"use client"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}
