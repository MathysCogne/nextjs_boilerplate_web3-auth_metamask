"use client";

import { useWalletInfo } from '@/hooks/useWalletInfo';
import { TEXT } from '@/constants/text';

export const InfoAccount = () => {
  const walletInfo = useWalletInfo();
  const isConnected = walletInfo.status.value === 'connected';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletInfo.address.value);
  };

  if (!isConnected) {
    return (
      <div className="p-4 bg-[#1A1A1A] rounded-lg border border-[#222222]">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <p className="text-red-500 text-sm">
            {TEXT.transaction.status}: {walletInfo.status.value}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 bg-[#1A1A1A] rounded-lg border border-[#222222]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <h3 className="font-medium text-white">
            {walletInfo.chain.value}
          </h3>
        </div>
        <span className={`px-2 py-0.5 text-xs font-medium rounded-md border
          ${walletInfo.chain.testnet 
            ? 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20'
            : 'text-green-500 bg-green-500/10 border-green-500/20'
          }`}
        >
          {walletInfo.chain.testnet ? 'Testnet' : 'Mainnet'}
        </span>
      </div>
      
      <div className="space-y-3">
        {walletInfo.balance.symbol && (
          <div className="flex justify-between items-center p-2">
            <span className="text-sm text-gray-400">{TEXT.transaction.native_token}</span>
            <span className="font-medium text-white">
              {walletInfo.balance.symbol}
            </span>
          </div>
        )}

        <div className="flex justify-between items-center p-2">
          <span className="text-sm text-gray-400">{TEXT.transaction.balance}</span>
          <span className="font-medium text-white">
            {walletInfo.balance.formatted} {walletInfo.balance.symbol}
          </span>
        </div>
        
        <div className="pt-3 border-t border-[#222222]">
          <div className="flex justify-between items-center p-2 cursor-pointer hover:bg-[#222222] rounded-lg transition-colors" onClick={handleCopyAddress}>
            <span className="text-sm text-gray-400">{TEXT.transaction.address}</span>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-sm text-white">
                {walletInfo.address.shortValue}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};