import { useChainId, useSwitchChain } from 'wagmi';
import { NETWORKS, DEFAULT_NETWORK } from '@/constants/networks';

export const useNetwork = () => {
  const chainId = useChainId();
  const { switchChain, isPending: isSwitching } = useSwitchChain();

  const isSupported = chainId ? Object.values(NETWORKS).some(net => net.chainId === chainId) : false;
  const currentNetwork = chainId 
    ? Object.values(NETWORKS).find(net => net.chainId === chainId) 
    : null;

  const switchToDefaultNetwork = () => {
    if (switchChain) {
      switchChain({ chainId: DEFAULT_NETWORK.chainId });
    }
  };

  return {
    chainId,
    currentNetwork,
    isSupported,
    isSwitching,
    switchChain,
    switchToDefaultNetwork
  };
}; 