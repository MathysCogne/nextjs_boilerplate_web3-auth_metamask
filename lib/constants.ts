import { http } from 'wagmi';
import {
  mainnet,
  arbitrum,
  optimism,
  polygon,
  base,
  linea,
  celo,
  avalanche,
  sepolia,
  goerli,
  arbitrumSepolia,
  optimismSepolia,
  polygonMumbai,
  baseGoerli,
  lineaTestnet,
  celoAlfajores,
} from 'wagmi/chains';

if (!process.env.NEXT_PUBLIC_INFURA_API_KEY) {
  throw new Error('NEXT_PUBLIC_INFURA_API_KEY is not defined');
}

export const INFURA_API_KEY = process.env.NEXT_PUBLIC_INFURA_API_KEY;

export const NETWORKS = {
  MAINNET: {
    ...mainnet,
    rpc: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  ARBITRUM: {
    ...arbitrum,
    rpc: `https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  OPTIMISM: {
    ...optimism,
    rpc: `https://optimism-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  POLYGON: {
    ...polygon,
    rpc: `https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  BASE: {
    ...base,
    rpc: `https://base-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  LINEA: {
    ...linea,
    rpc: `https://linea-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  CELO: {
    ...celo,
    rpc: `https://celo-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  AVALANCHE: {
    ...avalanche,
    rpc: `https://avalanche-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  // Testnets
  SEPOLIA: {
    ...sepolia,
    rpc: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
  },
  GOERLI: {
    ...goerli,
    rpc: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
  },
  ARBITRUM_SEPOLIA: {
    ...arbitrumSepolia,
    rpc: `https://arbitrum-sepolia.infura.io/v3/${INFURA_API_KEY}`,
  },
  OPTIMISM_SEPOLIA: {
    ...optimismSepolia,
    rpc: `https://optimism-sepolia.infura.io/v3/${INFURA_API_KEY}`,
  },
  POLYGON_MUMBAI: {
    ...polygonMumbai,
    rpc: `https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}`,
  },
  BASE_GOERLI: {
    ...baseGoerli,
    rpc: `https://base-goerli.infura.io/v3/${INFURA_API_KEY}`,
  },
  LINEA_GOERLI: {
    ...lineaTestnet,
    rpc: `https://linea-goerli.infura.io/v3/${INFURA_API_KEY}`,
  },
  CELO_ALFAJORES: {
    ...celoAlfajores,
    rpc: `https://celo-alfajores.infura.io/v3/${INFURA_API_KEY}`,
  },
} as const;

export const CHAINS = {
  MAINNETS: [
    NETWORKS.MAINNET,
    NETWORKS.ARBITRUM,
    NETWORKS.OPTIMISM,
    NETWORKS.POLYGON,
    NETWORKS.BASE,
    NETWORKS.LINEA,
    NETWORKS.CELO,
    NETWORKS.AVALANCHE,
  ],
  TESTNETS: [
    NETWORKS.SEPOLIA,
    NETWORKS.GOERLI,
    NETWORKS.ARBITRUM_SEPOLIA,
    NETWORKS.OPTIMISM_SEPOLIA,
    NETWORKS.POLYGON_MUMBAI,
    NETWORKS.BASE_GOERLI,
    NETWORKS.LINEA_GOERLI,
    NETWORKS.CELO_ALFAJORES,
  ],
} as const;

export const ALL_CHAINS = [...CHAINS.MAINNETS, ...CHAINS.TESTNETS] as const;

export const CHAIN_TRANSPORTS = ALL_CHAINS.reduce((acc, chain) => ({
  ...acc,
  [chain.id]: http(chain.rpc),
}), {});