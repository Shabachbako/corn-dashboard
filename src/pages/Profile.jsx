
import React from 'react';
import Sidebar from '@/components/Sidebar';

const Profile = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6">Profile</h1>
          <div className="bg-card shadow-sm border rounded-xl p-6">
            <p className="text-muted-foreground">Profile page content would go here</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
