"use client";

import type React from "react";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { addReward } from "@/lib/rewards";
import { HiArrowRight } from "react-icons/hi2";

interface PayLinkFormProps extends React.PropsWithChildren {
  onSubmit: (data: {
    amount: string;
    currency: string;
    vendorAddress: string;
  }) => void;
}

export default function PayLinkForm({ onSubmit }: PayLinkFormProps) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const currency = "APT"; // Hardcoded to APT
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    // Add reward points for creating a paylink
    addReward("paylink_created", 2);
    
    const id = uuidv4();
    router.push(`/payment-status/${id}`);
    if (!amount) return;

    setLoading(true);
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    onSubmit({
      amount,
      currency,
      vendorAddress:
        "0xce463747b346a7fcd9b1db18e07fc5b91faa97f4f92581dac3a4db5bc6abf612",
    });
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-glass rounded-3xl p-8 sm:p-12 border border-accent/20 shadow-xl glow-cyan">
        <div className="space-y-8">
          {/* Amount Input */}
          <div className="space-y-3">
            <label htmlFor="amount" className="block text-sm font-semibold text-foreground">
              Payment Amount
            </label>
            <div className="relative">
              <input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-6 py-4 bg-background border border-accent/20 rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-3xl font-bold placeholder:text-muted-foreground transition-all"
                aria-label="Payment amount in APT"
                min="0"
                step="0.00000001"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20">
                  <span className="text-sm font-semibold text-accent">
                    APT
                  </span>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Testnet APT on Aptos
            </p>
          </div>

          {/* Network Info */}
          <div className="space-y-3">
            <span className="block text-sm font-semibold text-foreground">
              Network
            </span>
            <div className="px-6 py-4 bg-background border border-accent/20 rounded-xl text-foreground">
              Aptos Testnet
            </div>
          </div>

          {/* Vendor Info */}
          <div className="space-y-3">
            <span className="block text-sm font-semibold text-foreground">
              Vendor Address
            </span>
            <div className="px-6 py-4 bg-background border truncate border-accent/20 rounded-xl font-mono text-sm text-muted-foreground">
              0xce463747b346a7fcd9b1db18e07fc5b91faa97f4f92581dac3a4db5bc6abf612
            </div>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!amount || loading}
            className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-accent to-secondary text-accent-foreground font-semibold hover:shadow-lg hover:glow-cyan-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
            aria-busy={loading}
            aria-label={loading ? 'Processing payment...' : 'Generate payment link'}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
            ) : (
              <>
                Generate PayLink
                <HiArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-8 p-4 rounded-xl bg-accent/5 border border-accent/20">
        <p className="text-sm text-muted-foreground">
          💡 Your payment link will be active for 24 hours. Customers can pay
          directly with their wallet or through the payment interface.
        </p>
      </div>
    </div>
  );
}
