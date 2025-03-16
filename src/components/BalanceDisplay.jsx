
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

const BalanceDisplay = ({ 
  balance, 
  currency = 'USD', 
  className 
}) => {
  const [visible, setVisible] = useState(true);
  
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  
  // Format balance based on currency
  const formattedBalance = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(balance);

  return (
    <div className={cn("relative", className)}>
      <div className="flex items-end gap-2 animate-scale-in">
        <h2 className="text-3xl font-semibold tracking-tight">
          {visible ? formattedBalance : '••••••'}
        </h2>
        <button
          onClick={toggleVisibility}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label={visible ? "Hide balance" : "Show balance"}
        >
          {visible ? (
            <Eye className="h-5 w-5 text-muted-foreground" />
          ) : (
            <EyeOff className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
      </div>
      <p className="text-muted-foreground mt-1 animate-fade-in delay-1">
        Total Balance
      </p>
    </div>
  );
};

export default BalanceDisplay;
