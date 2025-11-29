"use client";

import { useState } from "react";
import { getAptosWallet } from "@/lib/wallet";

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

    const amountAtomic = Math.floor(Number(paylink.amount) * 1e6);

    // USDC FA metadata type — REQUIRED for FAv2
    const USDC_FA_METADATA =
      "0x69091fbab5f7d635ee7ac5098cf0c1efbe31d68fec0f2cd565e8d168daf52832::usdc::USDC";

    // USDC Object ID from faucet
    const USDC_OBJECT_ID =
      "0x69091fbab5f7d635ee7ac5098cf0c1efbe31d68fec0f2cd565e8d168daf52832";

    try {
      const tx = await petra.signAndSubmitTransaction({
        payload: {
          type: "entry_function_payload",
          function: "0x1::aptos_account::transfer",
          type_arguments: [],
          arguments: [
            paylink.vendorAddress,
            Math.floor(Number(paylink.amount) * 1e8), // APT uses 8 decimals
          ],
        },
      });

      setTxHash(tx.hash);
      setStatus("success");
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
          className="w-full bg-accent text-accent-foreground px-6 py-3 rounded-xl"
        >
          Connect Wallet
        </button>
      ) : (
        <p className="text-sm text-muted-foreground">
          Connected:{" "}
          <span className="font-mono text-foreground">{address}</span>
        </p>
      )}

      <button
        onClick={payNow}
        disabled={status === "processing"}
        className="w-full bg-green-600 text-white px-6 py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "processing" ? "Processing..." : "Pay Now"}
      </button>

      {status === "success" && (
        <div className="bg-green-100 text-green-600 p-4 rounded-xl">
          Payment Successful! <br />
          <a
            href={`https://explorer.aptoslabs.com/txn/${txHash}?network=testnet`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            View in Explorer
          </a>
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
