
import React, { useState } from 'react';
import { Copy, CheckCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

const CopyToClipboard = ({
  value,
  displayValue,
  className,
}) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      toast({
        description: "Address copied to clipboard",
      });
      
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };
  
  // Format the display value if needed
  const formattedValue = displayValue || formatAddress(value);
  
  return (
    <div className={cn(
      "flex items-center space-x-2 font-mono bg-muted/50 rounded-lg p-3",
      className
    )}>
      <code className="flex-1 text-sm">{formattedValue}</code>
      <button
        onClick={handleCopy}
        className="p-1.5 rounded-md hover:bg-muted transition-colors"
      >
        {copied ? (
          <CheckCheck className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
    </div>
  );
};

// Helper function to format crypto addresses
const formatAddress = (address) => {
  if (address.length <= 12) return address;
  return `${address.slice(0, 6)}...${address.slice(-6)}`;
};

export default CopyToClipboard;
