"use client";

import type React from "react";

import { useState } from "react";
import { HiArrowRight, HiChevronDown, HiCheck } from "react-icons/hi2";
import * as Select from "@radix-ui/react-select";

interface PayLinkFormProps {
  onSubmit: (data: {
    amount: string;
    currency: string;
    vendorAddress: string;
  }) => void;
}

const CURRENCIES = [
  { value: "USDC", label: "USDC (Testnet)" },
  { value: "USDT", label: "USDT (Testnet)" },
];

export default function PayLinkForm({ onSubmit }: PayLinkFormProps) {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USDC");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
            <label className="block text-sm font-semibold text-foreground">
              Payment Amount
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-6 py-4 bg-background border border-accent/20 rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-3xl font-bold placeholder:text-muted-foreground transition-all"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20">
                  <span className="text-sm font-semibold text-accent">
                    USDC
                  </span>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Testnet USDC on Aptos
            </p>
          </div>

          {/* Network & Stablecoin Select */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-foreground">
              Network & Stablecoin
            </label>
            <Select.Root value={currency} onValueChange={setCurrency}>
              <Select.Trigger
                className="flex items-center justify-between w-full px-6 py-4 bg-background border border-accent/20 rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-base font-medium transition-all text-left"
                aria-label="Select cryptocurrency"
              >
                <Select.Value placeholder="Select a currency" />
                <Select.Icon className="text-muted-foreground">
                  <HiChevronDown className="h-5 w-5" />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content className="z-50 min-w-[--radix-select-trigger-width] overflow-hidden rounded-xl bg-background border border-accent/20 shadow-lg">
                  <Select.Viewport className="p-2">
                    {CURRENCIES.map((currency) => (
                      <Select.Item
                        key={currency.value}
                        value={currency.value}
                        className="relative flex items-center px-8 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-accent/10 focus:bg-accent/10 focus:outline-none cursor-pointer"
                      >
                        <Select.ItemText>{currency.label}</Select.ItemText>
                        <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                          <HiCheck className="h-4 w-4 text-accent" />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>

          {/* Vendor Info */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-foreground">
              Vendor Address
            </label>
            <div className="px-6 py-4 bg-background border truncate border-accent/20 rounded-xl font-mono text-sm text-muted-foreground">
              0xce463747b346a7fcd9b1db18e07fc5b91faa97f4f92581dac3a4db5bc6abf612
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleSubmit}
            disabled={!amount || loading}
            className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-accent to-secondary text-accent-foreground font-semibold hover:shadow-lg hover:glow-cyan-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
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
