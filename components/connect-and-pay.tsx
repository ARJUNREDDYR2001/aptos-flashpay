"use client";

import { useState } from "react";
import { getAptosWallet } from "@/lib/wallet";
import { addReward } from "@/lib/rewards";
import { Copy } from "lucide-react";

export default function ConnectAndPay({ paylink }: { paylink: any }) {
  const [address, setAddress] = useState("");
  const [txHash, setTxHash] = useState("");
  const [status, setStatus] = useState("idle");

  const connectWallet = async () => {
    const wallet = getAptosWallet();
    if (!wallet) {
      alert("No Aptos wallet found. Install Petra or Martian wallet.");
      return;
    }

    const res = await wallet.connect();
    setAddress(res.address);
  };

  // const payNow = async () => {
  //   setStatus("processing");

  //   const petra = window.petra;
  //   if (!petra) {
  //     alert("Install Petra Wallet first");
  //     return;
  //   }

  //   // Connect wallet if needed
  //   let account = address;
  //   if (!account) {
  //     const res = await petra.connect();
  //     account = res.address;
  //     setAddress(res.address);
  //   }

  //   // Convert amount to atomic units (USDC uses 6 decimals)
  //   const amountAtomic = Math.floor(Number(paylink.amount) * 1e6);

  //   try {
  //     const tx = await petra.signAndSubmitTransaction({
  //       payload: {
  //         type: "entry_function_payload",
  //         function: "0x1::fungible_asset::transfer",
  //         type_arguments: ["0x1::fungible_asset::Metadata"],
  //         arguments: [
  //           paylink.vendorAddress, // receiver
  //           "0x5e156f1207d0ebfa19cd5a2a27f3c64844bdc0fd8c03d88f4cec9d3a142da31d", // USDC asset object
  //           amountAtomic.toString(), // u64
  //         ],
  //       },
  //     });

  //     setTxHash(tx.hash);
  //     setStatus("success");

  //     // Update Paylink Storage
  //     const list = JSON.parse(localStorage.getItem("flashpay_links") || "[]");
  //     const update = list.map((p: any) =>
  //       p.id === paylink.id ? { ...p, status: "paid" } : p
  //     );
  //     localStorage.setItem("flashpay_links", JSON.stringify(update));
  //   } catch (err) {
  //     console.error("TX ERROR:", err);
  //     setStatus("error");
  //   }
  // };

const payNow = async () => {
  setStatus("processing");

  const petra = window.petra;
  if (!petra) {
    alert("Install Petra Wallet first");
    return;
  }

  let account = address;
  if (!account) {
    const res = await petra.connect();
    account = res.address;
    setAddress(res.address);
  }

  // APT → octas (1 APT = 1e8)
  const amountOctas = Math.floor(Number(paylink.amount) * 1e8);

  try {
    const tx = await petra.signAndSubmitTransaction({
      payload: {
        type: "entry_function_payload",
        function: "0x1::coin::transfer",
        type_arguments: ["0x1::aptos_coin::AptosCoin"],
        arguments: [
          paylink.vendorAddress,
          String(amountOctas),
        ],
      },
    });

    // Update local storage
    const list = JSON.parse(globalThis.localStorage.getItem("flashpay_links") || "[]");
    const update = list.map((p: any) =>
      p.id === paylink.id ? { ...p, status: "paid", txHash: tx.hash } : p
    );
    globalThis.localStorage.setItem("flashpay_links", JSON.stringify(update));

    // Add reward points for successful payment
    addReward("payment_completed", 10);

    // Redirect to success page with transaction details
    globalThis.window.location.href = `/success?tx=${tx.hash}&amount=${paylink.amount}&vendor=${encodeURIComponent(paylink.vendorAddress || 'Vendor')}`;

  } catch (err) {
    console.error("TX ERROR:", err);
    setStatus("error");
  }
};


  return (
    <div className="space-y-4">
      {!address ? (
        <button
          onClick={connectWallet}
          className="w-full bg-accent text-accent-foreground px-6 py-3 rounded-xl hover:bg-accent/90 transition-colors"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="space-y-2">
          <p className="text-sm font-semibold text-green-500 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Wallet Connected
          </p>
          <div className="bg-white/5 p-3 rounded-lg break-all font-mono text-sm">
            {address}
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(address);
              // Optional: Show copied message
            }}
            className="text-xs text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
          >
            <Copy size={12} /> Copy Address
          </button>
        </div>
      )}

      <button
        onClick={payNow}
        disabled={status === "processing"}
        className="w-full bg-green-600 text-white px-6 py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "processing" ? "Processing..." : "Pay Now"}
      </button>

      {status === "processing" && (
        <div className="bg-blue-50 text-blue-600 p-4 rounded-xl flex items-center justify-center gap-2">
          <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          Processing transaction...
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 p-4 bg-red-100 text-red-600 rounded-xl">
          Payment failed. Please try again.
        </div>
      )}
    </div>
  );
}
