
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import WalletItem from '@/components/WalletItem';

const Wallets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  // Mock data for wallets
  const walletData = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      balance: 0.57,
      balanceUsd: 16540.23,
      iconUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=024'
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      balance: 4.89,
      balanceUsd: 7120.44,
      iconUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=024'
    },
    {
      id: 'ripple',
      name: 'Ripple',
      symbol: 'XRP',
      balance: 1250.89,
      balanceUsd: 687.90,
      iconUrl: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=024'
    },
    {
      id: 'litecoin',
      name: 'Litecoin',
      symbol: 'LTC',
      balance: 12.34,
      balanceUsd: 341.00,
      iconUrl: 'https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=024'
    },
    {
      id: 'cardano',
      name: 'Cardano',
      symbol: 'ADA',
      balance: 320.5,
      balanceUsd: 103.12,
      iconUrl: 'https://cryptologos.cc/logos/cardano-ada-logo.svg?v=024'
    },
    {
      id: 'polkadot',
      name: 'Polkadot',
      symbol: 'DOT',
      balance: 45.2,
      balanceUsd: 210.87,
      iconUrl: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=024'
    }
  ];
  
  // Filter wallets based on search term and active tab
  const filteredWallets = walletData
    .filter(wallet => 
      wallet.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      wallet.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(wallet => {
      if (activeTab === 'all') return true;
      if (activeTab === 'major') return ['BTC', 'ETH'].includes(wallet.symbol);
      if (activeTab === 'alt') return !['BTC', 'ETH'].includes(wallet.symbol);
      return true;
    });
  
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Wallets</h1>
      </div>
      
      <Card className="p-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-9"
            placeholder="Search wallets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </Card>
      
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Coins</TabsTrigger>
          <TabsTrigger value="major">Major Coins</TabsTrigger>
          <TabsTrigger value="alt">Alt Coins</TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab} className="space-y-4">
          {filteredWallets.map((wallet, index) => (
            <Link to={`/wallets/${wallet.id}`} key={wallet.id}>
              <WalletItem
                className={`animate-fade-in`}
                id={wallet.id}
                name={wallet.name}
                symbol={wallet.symbol}
                balance={wallet.balance}
                balanceUsd={wallet.balanceUsd}
                iconUrl={wallet.iconUrl}
                key={wallet.id}
              />
            </Link>
          ))}
          
          {filteredWallets.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No wallets found matching your search.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSearchTerm('')}
              >
                Clear search
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Wallets;
