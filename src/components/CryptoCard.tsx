
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type CryptoCardProps = {
  name: string;
  symbol: string;
  balance: number;
  balanceUsd: number;
  change24h: number;
  iconUrl: string;
  className?: string;
}

const CryptoCard: React.FC<CryptoCardProps> = ({
  name,
  symbol,
  balance,
  balanceUsd,
  change24h,
  iconUrl,
  className
}) => {
  const isPositiveChange = change24h >= 0;
  
  return (
    <div 
      className={cn(
        "p-6 rounded-lg border bg-card hover-scale transition-all",
        className
      )}
    >
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full flex items-center justify-center bg-primary/10">
          <img src={iconUrl} alt={symbol} className="h-8 w-8" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-muted-foreground text-sm">{symbol}</p>
        </div>
        <div className="text-right">
          <p className="font-medium">{balance.toFixed(4)} {symbol}</p>
          <p className="text-muted-foreground text-sm">
            ${balanceUsd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className={cn(
          "text-xs font-medium flex items-center gap-1 px-2 py-1 rounded-full",
          isPositiveChange ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        )}>
          {isPositiveChange ? (
            <ArrowUpRight className="h-3 w-3" />
          ) : (
            <ArrowDownRight className="h-3 w-3" />
          )}
          {Math.abs(change24h).toFixed(2)}%
        </div>
        <p className="text-xs text-muted-foreground">24h</p>
      </div>
    </div>
  );
};

export default CryptoCard;
