export interface Network {
  chainId: number;
  name: string;
  currency: string;
  explorerUrl: string;
}

export const NETWORKS = {
  mainnet: {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io'
  },
  testnet: {
    chainId: 11155111,
    name: 'Sepolia',
    currency: 'ETH',
    explorerUrl: 'https://sepolia.etherscan.io'
  }
} as const;

export const DEFAULT_NETWORK = NETWORKS.testnet; 