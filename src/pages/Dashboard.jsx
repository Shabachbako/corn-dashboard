
import React from 'react';
import BalanceDisplay from '@/components/BalanceDisplay';
import CryptoCard from '@/components/CryptoCard';
import { ArrowUpRight, Coins, DollarSign, WalletMinimal } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data
const totalBalance = 12483.65;
const cryptoData = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    balance: 0.45,
    balance_usd: 7345.67,
    change24h: 2.5,
    icon_url: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    balance: 3.2,
    balance_usd: 3945.12,
    change24h: -1.2,
    icon_url: 'https://cryptologos.cc/logos/ethereum-eth-logo.png'
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    balance: 15.8,
    balance_usd: 1192.86,
    change24h: 5.7,
    icon_url: 'https://cryptologos.cc/logos/solana-sol-logo.png'
  }
];

const Dashboard = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-10 animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome back</h1>
        <p className="text-muted-foreground">
          Monitor your portfolio and transaction activity
        </p>
      </div>
      
      {/* Balance Card */}
      <div className="mb-10 bg-card border rounded-xl p-8 animate-scale-in shadow-sm">
        <BalanceDisplay balance={totalBalance} />
        
        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <Link 
            to="/wallets" 
            className="flex items-center justify-center gap-2 p-3 border rounded-lg bg-muted/30 hover:bg-muted transition-colors animate-fade-in delay-1"
          >
            <WalletMinimal className="h-5 w-5 text-primary" />
            <span>My Wallets</span>
          </Link>
          <Link 
            to="#" 
            className="flex items-center justify-center gap-2 p-3 border rounded-lg bg-muted/30 hover:bg-muted transition-colors animate-fade-in delay-2"
          >
            <DollarSign className="h-5 w-5 text-primary" />
            <span>Buy / Sell</span>
          </Link>
          <Link 
            to="#" 
            className="flex items-center justify-center gap-2 p-3 border rounded-lg bg-muted/30 hover:bg-muted transition-colors animate-fade-in delay-3"
          >
            <Coins className="h-5 w-5 text-primary" />
            <span>Exchange</span>
          </Link>
        </div>
      </div>
      
      {/* Top Assets */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold tracking-tight animate-fade-in">Top Assets</h2>
          <Link 
            to="/wallets" 
            className="text-primary hover:underline flex items-center gap-1 animate-fade-in"
          >
            <span>View all</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cryptoData.map((crypto, index) => (
            <CryptoCard
              key={crypto.id}
              {...crypto}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
      
      {/* Market Trends */}
      <div>
        <h2 className="text-xl font-semibold tracking-tight mb-4 animate-fade-in">
          Market Trends
        </h2>
        <div className="bg-card border rounded-xl p-6 animate-scale-in">
          <div className="text-center p-8">
            <p className="text-muted-foreground">Market chart visualization would go here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
