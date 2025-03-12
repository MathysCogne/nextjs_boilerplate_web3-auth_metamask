"use client";

import { useTransaction } from '@/hooks';
import { InfoAccount, ConnectButton } from '@/components';
import { TEXT } from '@/constants/text';
import Image from 'next/image';

export const TransactionForm = () => {
  const {
    input,
    setInput,
    networkConfig,
    validation,
    isPending,
    isConfirming,
    isConfirmed,
    handleSend,
    hash,
    sendError,
    confirmError,
    walletInfo,
  } = useTransaction();

  const isFormValid = Object.values(validation).every(v => v.isValid);

  if (!networkConfig) {
    return (
      <div className="p-6 bg-[#141414] rounded-xl border border-[#222222]">
        <div className="mb-4 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 mb-3">
            <Image src="/icons/warning.svg" width={24} height={24} alt="Warning" />
          </div>
          <p className="text-red-500 font-medium">
            {TEXT.transaction.status}: {walletInfo.status.value}
          </p>
        </div>
        <ConnectButton />
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#141414] rounded-xl border border-[#222222] min-w-[250px] md:w-[450px]">
      <div className="space-y-6">

        <div className="space-y-6">
          <InfoAccount />
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
          {/* Recipient */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-white">
                {TEXT.transaction.recipient}
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="0x..."
                value={input.to}
                onChange={(e) => setInput(prev => ({ ...prev, to: e.target.value }))}
                disabled={isPending || isConfirming}
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#222222] rounded-lg
                  focus:outline-none focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed
                  placeholder-gray-500 text-white"
              />
              {input.to && !validation.address.error && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Image src="/icons/check.svg" width={20} height={20} alt="Valid" />
                </div>
              )}
            </div>
            {validation.address.error && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <Image src="/icons/warning.svg" width={16} height={16} alt="Error" />
                {validation.address.error}
              </p>
            )}
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-white">
                {TEXT.transaction.amount} ({networkConfig.symbol})
              </label>
              <button
                type="button"
                onClick={() => setInput(prev => ({ 
                  ...prev, 
                  value: walletInfo.balance.formatted
                }))}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                {TEXT.transaction.max}: {walletInfo.balance.formatted}
              </button>
            </div>
            <div className="relative">
              <input
                type="number"
                step={networkConfig.minAmount}
                placeholder={`0 ${networkConfig.symbol}`}
                value={input.value}
                onChange={(e) => setInput(prev => ({ ...prev, value: e.target.value }))}
                disabled={isPending || isConfirming}
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#222222] rounded-lg
                  focus:outline-none focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed
                  placeholder-gray-500 text-white"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                {networkConfig.symbol}
              </div>
            </div>
            {validation.amount.error && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <Image src="/icons/warning.svg" width={16} height={16} alt="Error" />
                {validation.amount.error}
              </p>
            )}
          </div>

          {/* Network Warning */}
          {networkConfig.isTestnet && (
            <div className="p-4 bg-[#1A1A1A] border border-yellow-500/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="text-yellow-500">
                  <Image src="/icons/warning.svg" width={20} height={20} alt="Warning" />
                </div>
                <p className="text-sm text-yellow-500">
                  {TEXT.transaction.testnet_warning
                    .replace('{network}', networkConfig.name)
                    .replace('{symbol}', networkConfig.symbol)}
                </p>
              </div>
            </div>
          )}

          {/* Transaction Status */}
          {(sendError || confirmError || (isConfirmed && hash)) && (
            <div className="p-4 bg-[#1A1A1A] rounded-lg border border-current/20">
              <div className="flex items-center gap-3">
                {(sendError || confirmError) ? (
                  <div className="text-red-500">
                    <Image src="/icons/warning.svg" width={20} height={20} alt="Error" />
                  </div>
                ) : (
                  <div className="text-green-500">
                    <Image src="/icons/check.svg" width={20} height={20} alt="Success" />
                  </div>
                )}
                <div className="text-sm">
                  {sendError && sendError.message && (
                    <span className="text-red-500">
                      {TEXT.transaction.error}: {sendError.message}
                    </span>
                  )}
                  {confirmError && confirmError.message && (
                    <span className="text-red-500">
                      {TEXT.transaction.error_confirming}: {confirmError.message}
                    </span>
                  )}
                  {isConfirmed && hash && (
                    <span className="text-white">
                      {TEXT.transaction.confirmed}{' '}
                      <a 
                        href={`https://etherscan.io/tx/${hash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        {TEXT.transaction.view_etherscan} ↗
                      </a>
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isPending || isConfirming}
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50
              rounded-lg font-medium text-white transition-colors
              disabled:cursor-not-allowed"
          >
            {isPending || isConfirming ? (
              <div className="flex items-center justify-center gap-2">
                <div className="text-white">
                  <Image src="/icons/spinner.svg" width={20} height={20} alt="Loading" className="animate-spin" />
                </div>
                {isPending ? TEXT.transaction.confirming_wallet : TEXT.transaction.confirming_transaction}
              </div>
            ) : (
              `${TEXT.transaction.send} ${networkConfig.symbol}`
            )}
          </button>
        </form>
      </div>
    </div>
  );
};