import { createConfig } from 'wagmi';
import { mainnet, arbitrum, optimism, polygon, lineaSepolia } from 'wagmi/chains';
import { metaMask } from 'wagmi/connectors';
import { http } from 'viem';
import { INFURA_ENDPOINTS } from './constants';

// Crée un client Wagmi avec configuration
export const config = createConfig({
  chains: [mainnet, arbitrum, optimism, polygon, lineaSepolia],
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: http(INFURA_ENDPOINTS.MAINNET),
    [arbitrum.id]: http(INFURA_ENDPOINTS.ARBITRUM),
    [optimism.id]: http(INFURA_ENDPOINTS.OPTIMISM),
    [polygon.id]: http(INFURA_ENDPOINTS.POLYGON),
    [lineaSepolia.id]: http(INFURA_ENDPOINTS.LINEA_SEPOLIA),
  },
});