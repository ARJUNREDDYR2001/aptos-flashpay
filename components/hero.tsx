"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-16 sm:pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-72 h-72 sm:w-96 sm:h-96 bg-accent rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-72 h-72 sm:w-96 sm:h-96 bg-secondary rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT — RESPONSIVE TEXT */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow"></span>
              <span className="text-xs sm:text-sm text-accent font-medium">
                Powered by Aptos
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Instant</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
                APT Payments
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-md">
              Accept fast, secure APT payments on Aptos — no fees, no friction.
            </p>

            {/* CTAS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
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
            <div className="flex gap-6 sm:gap-10 pt-8">
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

          {/* RIGHT SIDE — RESPONSIVE IMAGE PREVIEW */}
          <div className="relative flex justify-center w-full">
            <div className="relative w-[90%] max-w-xs sm:max-w-sm md:max-w-md">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl blur-xl"></div>

              <div className="relative animate-float">
                <div className="bg-glass backdrop-blur-xl rounded-xl p-4 sm:p-5 border border-accent/40 shadow-xl glow-cyan">
                  <div className="bg-glass rounded-lg p-2 sm:p-3 mb-3">
                    <img
                      src="/dashImage.png"
                      alt="Dashboard Preview"
                      className="w-full h-auto rounded-md shadow"
                    />
                  </div>

                  <button className="w-full px-3 py-1.5 rounded-md bg-accent/10 border border-accent/30 text-accent text-xs font-medium hover:bg-accent/20 transition-colors">
                    Copy Link
                  </button>
                </div>

                {/* Outer Glow Ring */}
                <div
                  className="absolute inset-0 rounded-3xl border-2 border-accent/20 animate-pulse"
                  style={{ animationDuration: "3s" }}
                ></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
