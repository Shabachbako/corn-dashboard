
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WalletItemProps {
  id: string;
  name: string;
  symbol: string;
  iconUrl: string;
  balance: number;
  balanceUsd: number;
  className?: string;
}

const WalletItem: React.FC<WalletItemProps> = ({
  id,
  name,
  symbol,
  iconUrl,
  balance,
  balanceUsd,
  className,
}) => {
  return (
    <Link to={`/wallets/${id}`} className="block">
      <div className={cn(
        "flex items-center p-4 rounded-lg hover:bg-muted/50 transition-colors",
        className
      )}>
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
          <img src={iconUrl} alt={symbol} className="h-6 w-6" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{symbol}</p>
        </div>
        
        <div className="text-right mr-2">
          <p className="font-medium">{balance.toFixed(6)} {symbol}</p>
          <p className="text-sm text-muted-foreground">${balanceUsd.toFixed(2)}</p>
        </div>
        
        <ChevronRight className="h-5 w-5 text-muted-foreground" />
      </div>
    </Link>
  );
};

export default WalletItem;
