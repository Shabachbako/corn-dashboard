
import React from 'react';
import { Bell, Globe, Lock, Moon, Sun, Tag } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-10 animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Customize your preferences and account settings
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Settings Navigation */}
        <div className="md:col-span-1">
          <div className="bg-card border rounded-xl p-4 animate-scale-in">
            <nav className="space-y-1">
              <a 
                href="#general" 
                className="flex items-center gap-3 px-4 py-3 text-primary bg-primary/10 rounded-lg"
              >
                <Globe className="h-5 w-5" />
                <span className="font-medium">General</span>
              </a>
              <a 
                href="#appearance" 
                className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              >
                <Sun className="h-5 w-5" />
                <span className="font-medium">Appearance</span>
              </a>
              <a 
                href="#notifications" 
                className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              >
                <Bell className="h-5 w-5" />
                <span className="font-medium">Notifications</span>
              </a>
              <a 
                href="#privacy" 
                className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              >
                <Lock className="h-5 w-5" />
                <span className="font-medium">Privacy</span>
              </a>
              <a 
                href="#preferences" 
                className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              >
                <Tag className="h-5 w-5" />
                <span className="font-medium">Preferences</span>
              </a>
            </nav>
          </div>
        </div>
        
        {/* Settings Content */}
        <div className="md:col-span-2">
          <div id="general" className="bg-card border rounded-xl p-6 mb-8 animate-scale-in delay-1">
            <h2 className="text-xl font-semibold mb-6">General Settings</h2>
            
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Language</label>
                <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Japanese</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Time Zone</label>
                <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>Eastern Time (UTC-05:00)</option>
                  <option>Pacific Time (UTC-08:00)</option>
                  <option>UTC (UTC+00:00)</option>
                  <option>Central European Time (UTC+01:00)</option>
                  <option>Japan Standard Time (UTC+09:00)</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Currency Display</label>
                <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                  <option>JPY (¥)</option>
                  <option>BTC (₿)</option>
                </select>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Session Timeout</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatically log out after period of inactivity
                  </p>
                </div>
                <div className="flex items-center">
                  <select className="px-3 py-1 border rounded-lg text-sm">
                    <option>15 minutes</option>
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>Never</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div id="appearance" className="bg-card border rounded-xl p-6 mb-8 animate-scale-in delay-2">
            <h2 className="text-xl font-semibold mb-6">Appearance</h2>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <h3 className="font-medium">Theme</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose between light and dark mode
                  </p>
                </div>
                <div className="flex bg-muted rounded-full p-1">
                  <button className="flex items-center gap-2 px-3 py-1 bg-card rounded-full shadow">
                    <Sun className="h-4 w-4" />
                    <span className="text-sm">Light</span>
                  </button>
                  <button className="flex items-center gap-2 px-3 py-1 rounded-full">
                    <Moon className="h-4 w-4" />
                    <span className="text-sm">Dark</span>
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <h3 className="font-medium">Condensed View</h3>
                  <p className="text-sm text-muted-foreground">
                    Show more content with compact spacing
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-6 bg-muted rounded-full px-1 flex items-center">
                    <div className="bg-white w-4 h-4 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Show Balance on Dashboard</h3>
                  <p className="text-sm text-muted-foreground">
                    Display your balance on the dashboard
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-6 bg-green-500 rounded-full px-1 flex items-center">
                    <div className="bg-white w-4 h-4 rounded-full ml-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div id="notifications" className="bg-card border rounded-xl p-6 animate-scale-in delay-3">
            <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive updates and alerts via email
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-6 bg-green-500 rounded-full px-1 flex items-center">
                    <div className="bg-white w-4 h-4 rounded-full ml-auto"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <h3 className="font-medium">Push Notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications on your device
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-6 bg-green-500 rounded-full px-1 flex items-center">
                    <div className="bg-white w-4 h-4 rounded-full ml-auto"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <h3 className="font-medium">Price Alerts</h3>
                  <p className="text-sm text-muted-foreground">
                    Get notified about significant price changes
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-6 bg-green-500 rounded-full px-1 flex items-center">
                    <div className="bg-white w-4 h-4 rounded-full ml-auto"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Marketing Communications</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive updates about new features and offers
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-6 bg-muted rounded-full px-1 flex items-center">
                    <div className="bg-white w-4 h-4 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
