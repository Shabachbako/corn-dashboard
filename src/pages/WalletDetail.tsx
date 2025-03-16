
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CopyToClipboard from '@/components/CopyToClipboard';
import { ArrowLeft, ArrowUpRight, BarChart3, Clock, Send } from 'lucide-react';

// Mock data for wallets
const walletsData = {
  bitcoin: {
    name: 'Bitcoin',
    symbol: 'BTC',
    balance: 0.45,
    balanceUsd: 7345.67,
    iconUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    price: 16345.78,
    change24h: 2.5,
    transactions: [
      { id: 'tx1', type: 'receive', amount: 0.1, date: '2023-10-15T14:30:00Z', from: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5' },
      { id: 'tx2', type: 'send', amount: 0.05, date: '2023-10-10T09:15:00Z', to: '3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd' },
      { id: 'tx3', type: 'receive', amount: 0.4, date: '2023-09-28T18:45:00Z', from: '12XqeqZ41zC9P3LycoQ3r8jiGK6qiA2W6B' }
    ]
  },
  ethereum: {
    name: 'Ethereum',
    symbol: 'ETH',
    balance: 3.2,
    balanceUsd: 3945.12,
    iconUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    price: 1232.85,
    change24h: -1.2,
    transactions: [
      { id: 'tx4', type: 'receive', amount: 1.2, date: '2023-10-12T10:20:00Z', from: '0x8Ba1f109551bD432803012645Ac136ddd64DBA72' },
      { id: 'tx5', type: 'send', amount: 0.5, date: '2023-10-05T16:40:00Z', to: '0x2B5AD5c4795c026514f8317c7a215E218DcCD6cF' }
    ]
  },
  solana: {
    name: 'Solana',
    symbol: 'SOL',
    balance: 15.8,
    balanceUsd: 1192.86,
    iconUrl: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    address: '9ZNTfG4NyQgxy2SWjSiQoUyBPEvXT2xo7fKc5hPYYJ7b',
    price: 75.5,
    change24h: 5.7,
    transactions: [
      { id: 'tx6', type: 'receive', amount: 5.8, date: '2023-10-14T13:15:00Z', from: '2BLzWzRYo3o7F7njnSwJUzUYjXJtQfvEUwokiKhpP6cy' },
      { id: 'tx7', type: 'receive', amount: 10.0, date: '2023-09-30T08:30:00Z', from: '4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM' }
    ]
  }
};

const WalletDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Get wallet data based on ID
  const wallet = id ? walletsData[id as keyof typeof walletsData] : null;
  
  // Handle case where wallet is not found
  if (!wallet) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Wallet not found</h2>
        <Link to="/wallets" className="text-primary hover:underline">
          Back to wallets
        </Link>
      </div>
    );
  }
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Back navigation */}
      <Link 
        to="/wallets" 
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors animate-fade-in"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Wallets</span>
      </Link>
      
      {/* Wallet Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 animate-fade-in">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <img src={wallet.iconUrl} alt={wallet.symbol} className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {wallet.name} Wallet
            </h1>
            <p className="text-muted-foreground">
              {wallet.balance.toFixed(6)} {wallet.symbol} (${wallet.balanceUsd.toLocaleString()})
            </p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
            <Send className="h-5 w-5" />
            <span>Send</span>
          </button>
          <button className="bg-muted text-foreground px-4 py-2 rounded-lg hover:bg-muted/70 transition-colors flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            <span>Activity</span>
          </button>
        </div>
      </div>
      
      {/* Wallet Address */}
      <div className="bg-card border rounded-xl p-6 mb-8 animate-scale-in">
        <h2 className="text-lg font-semibold mb-4">Wallet Address</h2>
        <CopyToClipboard value={wallet.address} />
        <p className="text-sm text-muted-foreground mt-2">
          Use this address only for {wallet.name} ({wallet.symbol}) transfers
        </p>
      </div>
      
      {/* Price Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card border rounded-xl p-6 animate-scale-in delay-1">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-lg font-semibold">Current Price</h2>
            <Link 
              to="#" 
              className="text-primary hover:underline flex items-center gap-1"
            >
              <span>View Chart</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mb-2">
            <h3 className="text-2xl font-semibold">${wallet.price.toLocaleString()}</h3>
            <div className={`text-sm ${wallet.change24h >= 0 ? 'text-green-600' : 'text-red-600'} flex items-center gap-1`}>
              {wallet.change24h >= 0 ? '+' : ''}{wallet.change24h}% (24h)
            </div>
          </div>
        </div>
        
        <div className="bg-card border rounded-xl p-6 animate-scale-in delay-2">
          <h2 className="text-lg font-semibold mb-4">Wallet Stats</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Value in USD</span>
              <span className="font-medium">${wallet.balanceUsd.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Transactions</span>
              <span className="font-medium">{wallet.transactions.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Last activity</span>
              <span className="font-medium">{formatDate(wallet.transactions[0].date)}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Transactions */}
      <div className="animate-fade-in delay-3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold tracking-tight">Recent Transactions</h2>
          <Link 
            to="#" 
            className="text-primary hover:underline flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-card border rounded-xl overflow-hidden">
          {wallet.transactions.length > 0 ? (
            <div className="divide-y">
              {wallet.transactions.map((tx, index) => (
                <div key={tx.id} className="p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${tx.type === 'receive' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {tx.type === 'receive' ? '↓' : '↑'}
                      </div>
                      <div>
                        <p className="font-medium">{tx.type === 'receive' ? 'Received' : 'Sent'} {tx.amount} {wallet.symbol}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatDate(tx.date)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${tx.type === 'receive' ? 'text-green-600' : 'text-red-600'}`}>
                        {tx.type === 'receive' ? '+' : '-'}{tx.amount} {wallet.symbol}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        ${(tx.amount * wallet.price).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              No transactions yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletDetail;
