"use client"

import { useWallet } from "./wallet-provider"
import { useEffect } from "react"

export default function WalletConnect({ onConnected }: { onConnected: (account: string) => void }) {
  const { address, connect } = useWallet()

  useEffect(() => {
    if (address && onConnected) {
      onConnected(address)
    }
  }, [address, onConnected])

  const handleConnect = async () => {
    try {
      await connect()
    } catch (err) {
      console.error("Wallet connection failed:", err)
    }
  }

  return (
    <div>
      {address ? (
        <p className="text-green-500 font-mono truncate max-w-xs">
          Connected: {`${address.slice(0, 6)}...${address.slice(-4)}`}
        </p>
      ) : (
        <button
          onClick={handleConnect}
          className="px-6 py-3 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
        >
          Connect Wallet
        </button>
      )}
    </div>
  )
}
