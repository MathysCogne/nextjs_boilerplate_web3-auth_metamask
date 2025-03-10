import { ALL_CHAINS, CHAIN_TRANSPORTS } from './constants';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

if (!process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID) {
  throw new Error('NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID is not defined');
}

export const config = getDefaultConfig({
  appName: 'Next.js Web3 Boilerplate',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  chains: ALL_CHAINS,
  ssr: true,
  transports: CHAIN_TRANSPORTS,
});