"use client"

import { createContext, useContext, useState, useMemo } from 'react';
import { getAptosWallet } from '@/lib/wallet';

// Create a simple context for wallet state
const WalletContext = createContext<{
  address: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
} | null>(null);

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}

export default function WalletProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);

  const connect = async () => {
    const wallet = getAptosWallet();
    if (wallet) {
      const res = await wallet.connect();
      setAddress(res.address);
    }
  };

  const disconnect = () => {
    setAddress(null);
  };

  const value = useMemo(() => ({
    address,
    connect,
    disconnect
  }), [address]);

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}
