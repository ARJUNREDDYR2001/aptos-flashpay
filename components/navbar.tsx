"use client"

import Link from "next/link"
import { HiArrowRight } from "react-icons/hi2"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="w-20 h-20  rounded-lg overflow-hidden">
              <img 
                src="/image.png" 
                alt="FlashPay Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl text-balance">FlashPay</span>
              <div className="text-[10px] text-muted-foreground opacity-100 transition-all duration-300">
                <span className="inline-block">
                  <span className="inline-block">P</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.1s' }}>o</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.2s' }}>w</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.3s' }}>e</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.4s' }}>r</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.5s' }}>e</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.6s' }}>d</span>
                  <span> </span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.7s' }}>b</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.8s' }}>y</span>
                  <span> </span>
                  <span className="inline-block hover:animate-bounce text-accent font-bold" style={{ animationDelay: '0.9s' }}>A</span>
                  <span className="inline-block hover:animate-bounce text-accent font-bold" style={{ animationDelay: '1.0s' }}>p</span>
                  <span className="inline-block hover:animate-bounce text-accent font-bold" style={{ animationDelay: '1.1s' }}>t</span>
                  <span className="inline-block hover:animate-bounce text-accent font-bold" style={{ animationDelay: '1.2s' }}>o</span>
                  <span className="inline-block hover:animate-bounce text-accent font-bold" style={{ animationDelay: '1.3s' }}>s</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-m text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#" className="text-md text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </a>
            <a href="#" className="text-md text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
          </div>

          {/* CTA */}
          <Link href="/generate-paylink">
            <button className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:shadow-lg hover:glow-cyan-lg transition-all duration-300 hover:scale-105">
              Get Started
              <HiArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
