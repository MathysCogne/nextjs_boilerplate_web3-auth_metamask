import { http } from 'wagmi';
import {
  // Mainnets
  mainnet,
  arbitrum,
  optimism,
  polygon,
  base,
  linea,
  celo,
  avalanche,
  bsc,
  zkSync,
  gnosis,
  // Testnets
  sepolia,
  arbitrumSepolia,
  optimismSepolia,
  polygonMumbai,
  baseGoerli,
  lineaTestnet,
  celoAlfajores,
  avalancheFuji,
  bscTestnet,
} from 'wagmi/chains';

if (!process.env.NEXT_PUBLIC_INFURA_API_KEY) {
  throw new Error('NEXT_PUBLIC_INFURA_API_KEY is not defined');
}

export const INFURA_API_KEY = process.env.NEXT_PUBLIC_INFURA_API_KEY;

export const NETWORKS = {
  // Ethereum Networks
  MAINNET: {
    ...mainnet,
    rpc: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  SEPOLIA: {
    ...sepolia,
    rpc: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
  },

  // Arbitrum Networks
  ARBITRUM: {
    ...arbitrum,
    rpc: `https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  ARBITRUM_SEPOLIA: {
    ...arbitrumSepolia,
    rpc: `https://arbitrum-sepolia.infura.io/v3/${INFURA_API_KEY}`,
  },

  // Optimism Networks
  OPTIMISM: {
    ...optimism,
    rpc: `https://optimism-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  OPTIMISM_SEPOLIA: {
    ...optimismSepolia,
    rpc: `https://optimism-sepolia.infura.io/v3/${INFURA_API_KEY}`,
  },

  // Polygon Networks
  POLYGON: {
    ...polygon,
    rpc: `https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  POLYGON_MUMBAI: {
    ...polygonMumbai,
    rpc: `https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}`,
  },

  // Base Networks
  BASE: {
    ...base,
    rpc: `https://base-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  BASE_GOERLI: {
    ...baseGoerli,
    rpc: `https://base-goerli.infura.io/v3/${INFURA_API_KEY}`,
  },

  // Linea Networks
  LINEA: {
    ...linea,
    rpc: `https://linea-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  LINEA_GOERLI: {
    ...lineaTestnet,
    rpc: `https://linea-goerli.infura.io/v3/${INFURA_API_KEY}`,
  },

  // Celo Networks
  CELO: {
    ...celo,
    rpc: `https://celo-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  CELO_ALFAJORES: {
    ...celoAlfajores,
    rpc: `https://celo-alfajores.infura.io/v3/${INFURA_API_KEY}`,
  },

  // Avalanche Networks
  AVALANCHE: {
    ...avalanche,
    rpc: `https://avalanche-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  AVALANCHE_FUJI: {
    ...avalancheFuji,
    rpc: `https://avalanche-fuji.infura.io/v3/${INFURA_API_KEY}`,
  },

  // BSC Networks (Binance Smart Chain)
  BSC: {
    ...bsc,
    rpc: 'https://bsc-dataseed.binance.org',
  },
  BSC_TESTNET: {
    ...bscTestnet,
    rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  },

  // zkSync Networks
  ZKSYNC: {
    ...zkSync,
    rpc: 'https://mainnet.era.zksync.io',
  },

  // Gnosis Chain (formerly xDai)
  GNOSIS: {
    ...gnosis,
    rpc: 'https://rpc.gnosischain.com',
  },
} as const;

// Groupement des réseaux par type
export const CHAINS = {
  MAINNETS: [
    NETWORKS.MAINNET,        // Ethereum
    NETWORKS.ARBITRUM,       // Arbitrum
    NETWORKS.OPTIMISM,       // Optimism
    NETWORKS.POLYGON,        // Polygon
    NETWORKS.BASE,           // Base
    NETWORKS.LINEA,          // Linea
    NETWORKS.CELO,          // Celo
    NETWORKS.AVALANCHE,      // Avalanche
    NETWORKS.BSC,           // Binance Smart Chain
    NETWORKS.ZKSYNC,        // zkSync Era
    NETWORKS.GNOSIS,        // Gnosis Chain
  ],
  TESTNETS: [
    NETWORKS.SEPOLIA,               // Ethereum testnet
    NETWORKS.ARBITRUM_SEPOLIA,      // Arbitrum testnet
    NETWORKS.OPTIMISM_SEPOLIA,      // Optimism testnet
    NETWORKS.POLYGON_MUMBAI,        // Polygon testnet
    NETWORKS.BASE_GOERLI,           // Base testnet
    NETWORKS.LINEA_GOERLI,          // Linea testnet
    NETWORKS.CELO_ALFAJORES,        // Celo testnet
    NETWORKS.AVALANCHE_FUJI,        // Avalanche testnet
    NETWORKS.BSC_TESTNET,           // BSC testnet
  ],
} as const;

export const ALL_CHAINS = [
  // Ethereum Networks
  NETWORKS.MAINNET,
  NETWORKS.SEPOLIA,
  
  // Arbitrum Networks
  NETWORKS.ARBITRUM,
  NETWORKS.ARBITRUM_SEPOLIA,
  
  // Optimism Networks
  NETWORKS.OPTIMISM,
  NETWORKS.OPTIMISM_SEPOLIA,
  
  // Polygon Networks
  NETWORKS.POLYGON,
  NETWORKS.POLYGON_MUMBAI,
  
  // Base Networks
  NETWORKS.BASE,
  NETWORKS.BASE_GOERLI,
  
  // Linea Networks
  NETWORKS.LINEA,
  NETWORKS.LINEA_GOERLI,
  
  // Celo Networks
  NETWORKS.CELO,
  NETWORKS.CELO_ALFAJORES,
  
  // Avalanche Networks
  NETWORKS.AVALANCHE,
  NETWORKS.AVALANCHE_FUJI,

  // BSC Networks
  NETWORKS.BSC,
  NETWORKS.BSC_TESTNET,

  // zkSync Networks
  NETWORKS.ZKSYNC,

  // Gnosis Networks
  NETWORKS.GNOSIS,
] as const;

export const CHAIN_TRANSPORTS = ALL_CHAINS.reduce((acc, chain) => ({
  ...acc,
  [chain.id]: http(chain.rpc),
}), {});