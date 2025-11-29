"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/30 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img 
                  src="/image.png" 
                  alt="FlashPay Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold">FlashPay</span>
            </div>
            <p className="text-sm text-muted-foreground">Instant USDC payments on Aptos.</p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/generate-paylink" className="hover:text-foreground transition-colors">
                  Generate PayLink
                </Link>
              </li>
              <li>
                <Link href="/merchant-dashboard" className="hover:text-foreground transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <a 
                  href="https://docs.aptos-flashpay.com/api" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  API
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://blog.aptos-flashpay.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/aptosflashpay" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/aptosflashpay" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://docs.aptos-flashpay.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.aptos-flashpay.com/guides" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Guides
                </a>
              </li>
              <li>
                <a 
                  href="mailto:support@aptos-flashpay.com" 
                  className="hover:text-foreground transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 FlashPay. Powered by Aptos.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">
              Status
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Changelog
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
