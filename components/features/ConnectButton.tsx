"use client";

import { useAccount, useConnect, useDisconnect, type Connector } from 'wagmi';
import { TEXT } from "@/constants/text";
import { useState, useRef, useEffect } from 'react';
import { formatAddress, getWalletIcon } from '@/utils/wallet';
import Image from 'next/image';
import { Button } from '../';
import { useNetwork } from '@/hooks/useNetwork';

interface WalletButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const WalletButton = ({ onClick, children, className = '' }: WalletButtonProps) => (
  <button
    onClick={onClick}
    className={`w-full px-4 py-3 text-left text-sm text-gray-300 hover:text-white 
              hover:bg-gray-700/50 transition-colors duration-200 flex items-center gap-3 ${className}`}
  >
    {children}
  </button>
);

export const ConnectButton = () => {
  const { isConnected, address } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { isSupported, currentNetwork, switchToDefaultNetwork, isSwitching } = useNetwork();
  const [isConnecting, setIsConnecting] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleConnect = async (connector: Connector) => {
    try {
      setIsConnecting(true);
      connect({ connector });
      setShowDropdown(false);
    } catch (error) {
      console.error('Connection error:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  // Prevent hydration issues
  if (!mounted) {
    return (
      <Button
        onClick={() => {}}
        isLoading={true}
      >
        {TEXT.connect.connect}
      </Button>
    );
  }

  if (isConnected && !isSupported) {
    return (
      <Button
        variant="secondary"
        onClick={switchToDefaultNetwork}
        isLoading={isSwitching}
        leftIcon={
          <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse"/>
        }
      >
        {TEXT.connect.wrong_network}
      </Button>
    );
  }

  if (isConnected && address) {
    return (
      <div className="relative inline-block" ref={dropdownRef}>
        <Button
          variant="secondary"
          onClick={() => setShowDropdown(!showDropdown)}
          leftIcon={
            <div className="h-2 w-2 rounded-full bg-green-500 group-hover:animate-pulse"/>
          }
        >
          {formatAddress(address)}
          {currentNetwork && (
            <span className="text-xs text-gray-400">
              ({currentNetwork.name})
            </span>
          )}
        </Button>
        
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 rounded-xl backdrop-blur-md bg-gray-800/95 
                       shadow-xl border border-gray-700/50 overflow-hidden transform origin-top-right 
                       transition-all duration-200 ease-out">
            <WalletButton
              onClick={() => {
                disconnect();
                setShowDropdown(false);
              }}
            >
              {TEXT.connect.disconnect}
            </WalletButton>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <Button
        onClick={() => setShowDropdown(!showDropdown)}
        isLoading={isConnecting}
      >
        {TEXT.connect.connect}
      </Button>

      {showDropdown && connectors.length >= 1 && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl backdrop-blur-md bg-gray-800/95 
                     shadow-xl border border-gray-700/50 overflow-hidden transform origin-top-right 
                     transition-all duration-200 ease-out divide-y divide-gray-700/50">
          {connectors.map((connector) => (
            <WalletButton
              key={connector.id}
              onClick={() => handleConnect(connector)}
            >
              <Image 
                src={getWalletIcon(connector.name)}
                alt={connector.name}
                width={20}
                height={20}
              />
              <span className="font-medium">{connector.name}</span>
            </WalletButton>
          ))}
        </div>
      )}
    </div>
  );
};