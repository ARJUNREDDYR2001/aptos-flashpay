"use client";

import { HiCheckCircle } from "react-icons/hi2";
import { useSearchParams, useRouter } from "next/navigation";

export default function SuccessPage() {
  const params = useSearchParams();
  const router = useRouter();

  const tx = params.get("tx");
  const amount = params.get("amount");
  const vendor = params.get("vendor") || "Vendor";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6 ">
      <div className="mb-8 border border-green-200 rounded-lg shadow-lg p-10">
        <div className="relative">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <HiCheckCircle className="text-green-500 w-16 h-16" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Payment Successful! 🎉
        </h1>
        <p className="text-muted-foreground text-lg">
          You've paid{" "}
          <span className="font-semibold text-foreground">{amount} APT</span>
          <br />
          to {vendor}
        </p>
      </div>

      <div className="w-full max-w-md space-y-4">
        {tx && (
          <a
            href={`https://explorer.aptoslabs.com/txn/${tx}?network=testnet`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg border border-blue-200 transition-colors"
          >
            View Transaction on Explorer
          </a>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => router.push("/merchant-dashboard")}
            className="px-6 py-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg transition-colors"
          >
            Go to Dashboard
          </button>

          <button
            onClick={() => router.push("/generate-paylink")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            Create Another PayLink
          </button>
        </div>
      </div>
    </div>
  );
}
