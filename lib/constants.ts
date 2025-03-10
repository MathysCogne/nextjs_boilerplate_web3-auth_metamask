if (!process.env.NEXT_PUBLIC_INFURA_API_KEY) {
  throw new Error('NEXT_PUBLIC_INFURA_API_KEY is not defined');
}

export const INFURA_API_KEY = process.env.NEXT_PUBLIC_INFURA_API_KEY;

export const INFURA_ENDPOINTS = {
  MAINNET: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
  ARBITRUM: `https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  OPTIMISM: `https://optimism-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  POLYGON: `https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  LINEA_SEPOLIA: `https://lineasepolia.infura.io/v3/${INFURA_API_KEY}`,
} as const;