
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ArrowDownRight, Clock, RefreshCw } from 'lucide-react';
import CopyToClipboard from '@/components/CopyToClipboard';
import Sidebar from '@/components/Sidebar';

// Mock wallet data based on id
const getWalletData = (id) => {
  const wallets = {
    'bitcoin': {
      name: 'Bitcoin',
      symbol: 'BTC',
      balance: 0.45,
      balanceUsd: 7345.67,
      address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
      iconUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      change24h: 2.5,
      transactions: [
        { type: 'receive', amount: 0.1, date: '2023-04-12T10:30:00Z', from: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5' },
        { type: 'send', amount: 0.05, date: '2023-04-10T14:20:00Z', to: '1HQ3Go3ggs8pFnXuHVHRytPCq5fGG8Hbhx' },
        { type: 'receive', amount: 0.4, date: '2023-04-05T09:15:00Z', from: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5' }
      ]
    },
    'ethereum': {
      name: 'Ethereum',
      symbol: 'ETH',
      balance: 3.2,
      balanceUsd: 3945.12,
      address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      iconUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
      change24h: -1.2,
      transactions: [
        { type: 'receive', amount: 1.2, date: '2023-04-14T11:20:00Z', from: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F' },
        { type: 'send', amount: 0.5, date: '2023-04-09T16:40:00Z', to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' },
        { type: 'receive', amount: 2.5, date: '2023-04-01T08:30:00Z', from: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F' }
      ]
    },
    'ripple': {
      name: 'Ripple',
      symbol: 'XRP',
      balance: 1250.89,
      balanceUsd: 687.90,
      address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      iconUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=024',
      change24h: -1.2,
      transactions: [
        { type: 'receive', amount: 1.2, date: '2023-04-14T11:20:00Z', from: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F' },
        { type: 'send', amount: 0.5, date: '2023-04-09T16:40:00Z', to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' },
        { type: 'receive', amount: 2.5, date: '2023-04-01T08:30:00Z', from: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F' }
      ]
    },
    'litecoin': {
      name: 'Litecoin',
      symbol: 'LTC',
      balance: 15.8,
      balanceUsd: 1192.86,
      address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      iconUrl: 'https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=024',
      change24h: 5.7,
      transactions: [
        { type: 'receive', amount: 5.8, date: '2023-04-13T13:10:00Z', from: 'So11113111111111111111111111111111111111112' },
        { type: 'send', amount: 2.0, date: '2023-04-07T12:50:00Z', to: 'So11111111115551111111111111111111111111112' },
        { type: 'receive', amount: 12.0, date: '2023-03-29T15:20:00Z', from: 'So11113111111111111111111111111111111111112' }
      ]
    },
    'solana': {
      name: 'Solana',
      symbol: 'SOL',
      balance: 15.8,
      balanceUsd: 1192.86,
      address: 'So11111111111111111111111111111111111111112',
      iconUrl: 'https://cryptologos.cc/logos/solana-sol-logo.png',
      change24h: 5.7,
      transactions: [
        { type: 'receive', amount: 5.8, date: '2023-04-13T13:10:00Z', from: 'So11113111111111111111111111111111111111112' },
        { type: 'send', amount: 2.0, date: '2023-04-07T12:50:00Z', to: 'So11111111115551111111111111111111111111112' },
        { type: 'receive', amount: 12.0, date: '2023-03-29T15:20:00Z', from: 'So11113111111111111111111111111111111111112' }
      ]
    },
    'cardano': {
      name: 'Cardano',
      symbol: 'ADA',
      balance: 415.2,
      balanceUsd: 532.46,
      address: 'addr1qxy8gj7ns6ck8xvl3ksjdz3ld66veaeulcsyspjp23c7xrhp9umek5rqdy5hutgzqvla3n3kpgzkjhp7xjctn6j5k9zsyhku4n',
      iconUrl: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
      change24h: 0.8,
      transactions: [
        { type: 'receive', amount: 150.0, date: '2023-04-11T09:45:00Z', from: 'addr1qxfxlatvpnl7mqzzq9mudgmnjrk53254fsvxj065k6v5qhz' },
        { type: 'send', amount: 75.0, date: '2023-04-02T17:30:00Z', to: 'addr1qxlj74xmz9dskl4xafmx0qvdl0gxmkz9pvmvy4n' },
        { type: 'receive', amount: 340.2, date: '2023-03-25T19:20:00Z', from: 'addr1qxfxlatvpnl7mqzzq9mudgmnjrk53254fsvxj065k6v5qhz' }
      ]
    },
    'usdt': {
      name: 'Tether',
      symbol: 'USDT',
      balance: 1500,
      balanceUsd: 1500.00,
      address: 'addr1qxy8gj7ns6ck8xvl3ksjdz3ld66veaeulcsyspjp23c7xrhp9umek5rqdy5hutgzqvla3n3kpgzkjhp7xjctn6j5k9zsyhku4n',
      iconUrl: 'https://cryptologos.cc/logos/tether-usdt-logo.svg?v=024',
      change24h: 0.8,
      transactions: [
        { type: 'receive', amount: 150.0, date: '2023-04-11T09:45:00Z', from: 'addr1qxfxlatvpnl7mqzzq9mudgmnjrk53254fsvxj065k6v5qhz' },
        { type: 'send', amount: 75.0, date: '2023-04-02T17:30:00Z', to: 'addr1qxlj74xmz9dskl4xafmx0qvdl0gxmkz9pvmvy4n' },
        { type: 'receive', amount: 340.2, date: '2023-03-25T19:20:00Z', from: 'addr1qxfxlatvpnl7mqzzq9mudgmnjrk53254fsvxj065k6v5qhz' }
      ]
    },
    'bnb': {
      name: 'Binance Coin',
      symbol: 'BNB',
      balance: 3.2,
      balanceUsd: 890.44,
      address: 'addr1qxy8gj7ns6ck8xvl3ksjdz3ld66veaeulcsyspjp23c7xrhp9umek5rqdy5hutgzqvla3n3kpgzkjhp7xjctn6j5k9zsyhku4n',
      iconUrl: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=024',
      change24h: 0.8,
      transactions: [
        { type: 'receive', amount: 150.0, date: '2023-04-11T09:45:00Z', from: 'addr1qxfxlatvpnl7mqzzq9mudgmnjrk53254fsvxj065k6v5qhz' },
        { type: 'send', amount: 75.0, date: '2023-04-02T17:30:00Z', to: 'addr1qxlj74xmz9dskl4xafmx0qvdl0gxmkz9pvmvy4n' },
        { type: 'receive', amount: 340.2, date: '2023-03-25T19:20:00Z', from: 'addr1qxfxlatvpnl7mqzzq9mudgmnjrk53254fsvxj065k6v5qhz' }
      ]
    },
    'dogecoin': {
      name: 'Dogecoin',
      symbol: 'DOGE',
      balance: 5000,
      balanceUsd: 356.75,
      address: 'addr1qxy8gj7ns6ck8xvl3ksjdz3ld66veaeulcsyspjp23c7xrhp9umek5rqdy5hutgzqvla3n3kpgzkjhp7xjctn6j5k9zsyhku4n',
      iconUrl: 'https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=024',
      change24h: 0.8,
      transactions: [
        { type: 'receive', amount: 150.0, date: '2023-04-11T09:45:00Z', from: 'addr1qxfxlatvpnl7mqzzq9mudgmnjrk53254fsvxj065k6v5qhz' },
        { type: 'send', amount: 75.0, date: '2023-04-02T17:30:00Z', to: 'addr1qxlj74xmz9dskl4xafmx0qvdl0gxmkz9pvmvy4n' },
        { type: 'receive', amount: 340.2, date: '2023-03-25T19:20:00Z', from: 'addr1qxfxlatvpnl7mqzzq9mudgmnjrk53254fsvxj065k6v5qhz' }
      ]
    },
    'polkadot': {
      name: 'Polkadot',
      symbol: 'DOT',
      balance: 52.3,
      balanceUsd: 468.54,
      address: '1exaAg2VJRQbyUBAeXcktChCAqjVP9TUxF3zo23R2T6EGdE',
      iconUrl: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png',
      change24h: -0.5,
      transactions: [
        { type: 'receive', amount: 22.3, date: '2023-04-12T14:15:00Z', from: '1exaAg2VJRQbyU3AeXcktChCAqjVP9TUxF3zo23R2T6EGdE' },
        { type: 'send', amount: 10.0, date: '2023-04-05T11:10:00Z', to: '1exaAg2VJRQbyU5AeXcktChCAqjVP9TUxF3zo23R2T6EGdE' },
        { type: 'receive', amount: 40.0, date: '2023-03-27T10:25:00Z', from: '1exaAg2VJRQbyU3AeXcktChCAqjVP9TUxF3zo23R2T6EGdE' }
      ]
    }
  };
  
  return wallets[id] || null;
};

// Format date helper
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
};

const WalletDetail = () => {
  const { id } = useParams();
  const wallet = getWalletData(id);
  
  if (!wallet) {
    return (
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/wallets" className="flex items-center text-primary mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Wallets
            </Link>
            
            <div className="p-12 text-center">
              <h1 className="text-2xl font-semibold mb-4">Wallet not found</h1>
              <p className="text-muted-foreground">
                The wallet you're looking for doesn't exist or might have been removed.
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const isPositiveChange = wallet.change24h >= 0;
  
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/wallets" className="flex items-center text-primary mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Wallets
          </Link>
          
          {/* Wallet Header */}
          <div className="bg-card shadow-sm border rounded-xl p-6 mb-8">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <img src={wallet.iconUrl} alt={wallet.symbol} className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">{wallet.name}</h1>
                <p className="text-muted-foreground">{wallet.symbol}</p>
              </div>
              <div className={`ml-auto flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                isPositiveChange 
                ? "bg-green-100 text-green-700" 
                : "bg-red-100 text-red-700"
              }`}>
                {isPositiveChange ? (
                  <ArrowUpRight className="h-3 w-3" />
                ) : (
                  <ArrowDownRight className="h-3 w-3" />
                )}
                {Math.abs(wallet.change24h).toFixed(2)}%
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Balance</p>
                <h2 className="text-3xl font-semibold">
                  {wallet.balance} {wallet.symbol}
                </h2>
                <p className="text-muted-foreground">
                  ${wallet.balanceUsd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Wallet Address</p>
                <CopyToClipboard value={wallet.address} className="mt-1" />
              </div>
            </div>
          </div>
          
          {/* Transactions */}
          <div className="bg-card shadow-sm border rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b flex justify-between items-center">
              <h2 className="font-semibold">Transactions</h2>
              <button className="flex items-center gap-1 text-sm text-primary hover:underline">
                <RefreshCw className="h-4 w-4" />
                <span>Refresh</span>
              </button>
            </div>
            
            <div className="divide-y">
              {wallet.transactions.map((tx, index) => (
                <div key={index} className="px-6 py-4 flex items-center">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-4 ${
                    tx.type === 'receive' 
                    ? "bg-green-100 text-green-700" 
                    : "bg-red-100 text-red-700"
                  }`}>
                    {tx.type === 'receive' 
                      ? <ArrowDownRight className="h-4 w-4" /> 
                      : <ArrowUpRight className="h-4 w-4" />
                    }
                  </div>
                  
                  <div className="flex-1">
                    <p className="font-medium capitalize">{tx.type}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{formatDate(tx.date)}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className={`font-medium ${tx.type === 'receive' ? "text-green-600" : "text-red-600"}`}>
                      {tx.type === 'receive' ? '+' : '-'}{tx.amount} {wallet.symbol}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ${(tx.amount * wallet.balanceUsd / wallet.balance).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WalletDetail;
