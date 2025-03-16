
import React from 'react';
import WalletItem from '@/components/WalletItem';
import { ArrowUpRight, PlusCircle, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data
const wallets = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    balance: 0.45,
    balanceUsd: 7345.67,
    iconUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    balance: 3.2,
    balanceUsd: 3945.12,
    iconUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png'
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    balance: 15.8,
    balanceUsd: 1192.86,
    iconUrl: 'https://cryptologos.cc/logos/solana-sol-logo.png'
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    balance: 415.2,
    balanceUsd: 532.46,
    iconUrl: 'https://cryptologos.cc/logos/cardano-ada-logo.png'
  },
  {
    id: 'polkadot',
    name: 'Polkadot',
    symbol: 'DOT',
    balance: 52.3,
    balanceUsd: 468.54,
    iconUrl: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png'
  }
];

const Wallets = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight mb-2">My Wallets</h1>
        <p className="text-muted-foreground">
          Manage your cryptocurrency wallets
        </p>
      </div>
      
      {/* Search and Add */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search wallets..." 
            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          <PlusCircle className="h-5 w-5" />
          <span>Add Wallet</span>
        </button>
      </div>
      
      {/* Wallets List */}
      <div className="bg-card shadow-sm border rounded-xl overflow-hidden animate-scale-in">
        <div className="border-b px-6 py-4 flex justify-between items-center">
          <h2 className="font-semibold">All Wallets</h2>
          <Link to="#" className="text-primary hover:underline flex items-center gap-1">
            <span>Market Cap</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="divide-y">
          {wallets.map((wallet, index) => (
            <WalletItem 
              key={wallet.id} 
              {...wallet} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallets;
