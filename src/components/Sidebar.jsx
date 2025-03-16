
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Wallet, 
  User, 
  Settings, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Wallet, label: 'Wallets', href: '/wallets' },
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div 
      className={cn(
        "h-screen bg-sidebar sticky top-0 transition-all duration-300 z-10",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Logo Area */}
        <div className="p-6 flex items-center justify-between">
          {!collapsed && (
            <h1 className="text-sidebar-foreground text-xl font-semibold tracking-tight animate-fade-in">
              Crypto<span className="text-sidebar-primary">Dash</span>
            </h1>
          )}
          <button 
            onClick={toggleSidebar}
            className="text-sidebar-foreground hover:bg-sidebar-accent p-2 rounded-full transition-colors"
          >
            {collapsed ? 
              <ChevronRight className="h-5 w-5" /> : 
              <ChevronLeft className="h-5 w-5" />
            }
          </button>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex-1 px-4 pb-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={item.href} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg transition-all hover:bg-sidebar-accent group",
                    location.pathname === item.href ? "bg-sidebar-accent text-sidebar-primary" : "text-sidebar-foreground"
                  )}
                >
                  <item.icon className={cn(
                    "h-5 w-5 transition-transform",
                    location.pathname === item.href ? "text-sidebar-primary" : "",
                    collapsed ? "mx-auto" : "mr-3"
                  )} />
                  
                  {!collapsed && (
                    <span className="font-medium tracking-wide">
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border mt-auto">
          <div className={cn(
            "flex items-center",
            collapsed ? "justify-center" : "justify-start"
          )}>
            <div className="h-8 w-8 rounded-full bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-medium">
              U
            </div>
            {!collapsed && (
              <div className="ml-3">
                <p className="text-sm font-medium text-sidebar-foreground">User</p>
                <p className="text-xs text-sidebar-foreground/70">Pro Plan</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
