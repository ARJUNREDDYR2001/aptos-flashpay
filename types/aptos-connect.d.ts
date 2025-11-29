declare module 'aptos-connect' {
  interface AptosConnectOptions {
    network?: 'mainnet' | 'testnet' | 'devnet';
    appName?: string;
  }

  interface ConnectResponse {
    address: string;
    publicKey: string;
  }

  interface SignAndSubmitTransactionResponse {
    hash: string;
  }

  interface TransactionPayload {
    type: string;
    function: string;
    type_arguments: string[];
    arguments: any[];
  }

  interface TransactionOptions {
    max_gas_amount?: string;
    gas_unit_price?: string;
    expiration_timestamp_secs?: string;
  }

  interface AptosConnect {
    connect: () => Promise<ConnectResponse>;
    disconnect: () => Promise<void>;
    signAndSubmitTransaction: (transaction: {
      sender: string;
      payload: TransactionPayload;
      options?: TransactionOptions;
    }) => Promise<SignAndSubmitTransactionResponse>;
    isConnected: () => boolean;
    account: () => Promise<{ address: string }>;
    onAccountChange: (callback: (address: string) => void) => void;
    onDisconnect: (callback: () => void) => void;
  }

  const aptosConnect: (options?: AptosConnectOptions) => AptosConnect;
  export default aptosConnect;
}
