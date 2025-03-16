
import React from 'react';
import { Camera, Mail, MapPin, Phone, Shield, User } from 'lucide-react';

const Profile = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-10 animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight mb-2">My Profile</h1>
        <p className="text-muted-foreground">
          Manage your account information and preferences
        </p>
      </div>
      
      {/* Profile Information */}
      <div className="bg-card border rounded-xl p-8 mb-8 animate-scale-in">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="relative">
            <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center border-4 border-card">
              <User className="h-16 w-16 text-primary/50" />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
              <Camera className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-muted-foreground mb-4">Premium Plan User</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>New York, USA</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>Security: Enhanced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Edit Form */}
      <div className="bg-card border rounded-xl p-8 mb-8 animate-scale-in delay-1">
        <h2 className="text-xl font-semibold mb-6">Edit Profile</h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                First Name
              </label>
              <input 
                type="text" 
                value="John" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Last Name
              </label>
              <input 
                type="text" 
                value="Doe" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Email Address
              </label>
              <input 
                type="email" 
                value="john.doe@example.com" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Phone Number
              </label>
              <input 
                type="tel" 
                value="+1 (555) 123-4567" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Location
              </label>
              <input 
                type="text" 
                value="New York, USA" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-4">
            <button 
              type="button"
              className="px-4 py-2 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      
      {/* Security Settings */}
      <div className="bg-card border rounded-xl p-8 animate-scale-in delay-2">
        <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
        
        <div className="space-y-6">
          <div className="flex justify-between items-center pb-4 border-b">
            <div>
              <h3 className="font-medium">Two-Factor Authentication</h3>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account
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
              <h3 className="font-medium">Biometric Login</h3>
              <p className="text-sm text-muted-foreground">
                Use fingerprint or face recognition to log in
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
              <h3 className="font-medium">Email Notifications</h3>
              <p className="text-sm text-muted-foreground">
                Receive alerts for account activity
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-6 bg-green-500 rounded-full px-1 flex items-center">
                <div className="bg-white w-4 h-4 rounded-full ml-auto"></div>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <button className="text-primary hover:underline flex items-center gap-1">
              <span>Change Password</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
