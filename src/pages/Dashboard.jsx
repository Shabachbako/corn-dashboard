import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import BalanceDisplay from '@/components/BalanceDisplay';
import CryptoCard from '@/components/CryptoCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUp, ArrowDown, Eye, EyeOff, Wallet, Send, History, Settings } from 'lucide-react';

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate(); // React Router navigation

  // Mock data for cryptocurrencies
  const cryptoData = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      balance: 0.57,
      balanceUsd: 16540.23,
      change24h: 2.34,
      iconUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=024'
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      balance: 4.89,
      balanceUsd: 7120.44,
      change24h: -1.56,
      iconUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=024'
    },
    {
      id: 'ripple',
      name: 'Ripple',
      symbol: 'XRP',
      balance: 1250.89,
      balanceUsd: 687.90,
      change24h: 0.78,
      iconUrl: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=024'
    },
    {
      id: 'litecoin',
      name: 'Litecoin',
      symbol: 'LTC',
      balance: 12.34,
      balanceUsd: 341.00,
      change24h: 3.45,
      iconUrl: 'https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=024'
    }
  ];

  // Calculate total balance dynamically
  const totalBalance = cryptoData.reduce((total, crypto) => total + crypto.balanceUsd, 0);

  // Filter cryptocurrencies based on the active tab
  const filteredCryptos = cryptoData.filter(crypto => {
    if (activeTab === 'all') return true;
    if (activeTab === 'gainers') return crypto.change24h > 0;
    if (activeTab === 'losers') return crypto.change24h < 0;
    return true;
  });

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      
      <Card className="p-6 mb-6 bg-card shadow-sm border">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium">Total Balance</h2>
          <button onClick={toggleBalance} className="text-muted-foreground">
            {showBalance ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <p className="text-2xl font-semibold">
          {showBalance ? `$${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '****'}
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-around mt-4">
          <button 
            onClick={() => navigate('/wallets')}
            className="flex flex-col items-center p-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            <Wallet size={24} className="text-blue-500" />
            <span className="text-xs mt-1">Wallet</span>
          </button>
        </div>
      </Card>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">Your Assets</h2>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="gainers">Gainers <ArrowUp className="ml-1 h-4 w-4 text-green-500" /></TabsTrigger>
            <TabsTrigger value="losers">Losers <ArrowDown className="ml-1 h-4 w-4 text-red-500" /></TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="space-y-4">
            {filteredCryptos.map((crypto) => (
              <CryptoCard
                className="animate-fade-in"
                key={crypto.id}
                name={crypto.name}
                symbol={crypto.symbol}
                balance={crypto.balance}
                balanceUsd={crypto.balanceUsd}
                change24h={crypto.change24h}
                iconUrl={crypto.iconUrl}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
