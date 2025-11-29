"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-16 sm:pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto h-screen px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 w-fit">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow"></span>
                <span className="text-xs sm:text-sm text-accent font-medium">
                  Powered by Aptos
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-foreground">Instant</span>
                <br />
                <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
                  USDC Payments
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-base sm:text-lg text-muted-foreground text-balance max-w-md">
                Send and receive stablecoin payments in seconds on Aptos. No
                delays, no friction—just instant value transfer.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/generate-paylink" className="flex-1 sm:flex-none">
                <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-accent to-secondary text-accent-foreground font-semibold hover:shadow-lg hover:glow-cyan-lg transition-all duration-300 hover:scale-105">
                  Generate PayLink
                </button>
              </Link>
              <Link href="/merchant-dashboard" className="flex-1 sm:flex-none">
                <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-glass border border-accent/30 text-foreground font-semibold hover:border-accent/60 hover:bg-glass-dark transition-all duration-300">
                  Merchant Dashboard
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 sm:pt-12">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">
                  Sub-1s
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Finality
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">
                  $0.01
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Avg. Fee
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">
                  24/7
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Always On
                </p>
              </div>
            </div>
          </div>

          {/* Right - Floating QR Code */}
          <div className="relative flex items-center justify-center w-[480px] h-[320px] sm:w-[500px] sm:h-[340px]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl blur-xl"></div>

            {/* QR Code Card */}
            <div className="relative animate-float scale-85 sm:scale-90">
              <div className="bg-glass backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-accent/40 shadow-xl glow-cyan">
                {/* QR Code Container */}
                <div className="bg-glass rounded-lg p-2 sm:p-3 mb-3 overflow-hidden">
                  <img
                    src="/dashImage.png"
                    alt="Dashboard Preview"
                    className="w-full h-auto rounded-sm shadow-sm"
                  />
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                      Amount
                    </p>
                    <p className="text-base sm:text-lg font-bold text-accent">
                      1,000 USDC
                    </p>
                  </div>
                  <button className="w-full px-3 py-1.5 rounded-md bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-colors text-xs font-medium">
                    Copy Link
                  </button>
                </div>
              </div>

              {/* Glow Ring */}
              <div
                className="absolute inset-0 rounded-3xl border-2 border-accent/20 animate-pulse"
                style={{ animationDuration: "3s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
