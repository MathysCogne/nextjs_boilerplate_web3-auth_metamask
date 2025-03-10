export const formatAddress = (address: string): string => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const getWalletIcon = (name: string): string => {
  const walletIcons: { [key: string]: string } = {
    'MetaMask': 'metamask',
    'Portefeuille Brave': 'brave',
    'Coinbase Wallet': 'coinbase',
    'WalletConnect': 'walletconnect'
  };
  
  return `/icons/wallet/${walletIcons[name] || 'wallet'}.svg`;
}; 