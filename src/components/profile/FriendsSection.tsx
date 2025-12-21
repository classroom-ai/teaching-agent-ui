"use client";

import React, { useState } from 'react';
import { Search, UserPlus, Users } from 'lucide-react';

interface Friend {
  id: string;
  name: string;
  username: string;
  avatarUrl?: string; // Placeholder for now
  xp: number;
}

const following: Friend[] = []; // Empty for now as per example
const followers: Friend[] = [
  { id: '1', name: 'John Doe', username: 'johndoe', xp: 1200 },
];

export const FriendsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'following' | 'followers'>('following');

  return (
    <div className="space-y-6">
      {/* Friends List Card */}
      <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveTab('following')}
            className={`flex-1 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
              activeTab === 'following'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:bg-secondary/50'
            }`}
          >
            Following
          </button>
          <button
            onClick={() => setActiveTab('followers')}
            className={`flex-1 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
              activeTab === 'followers'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:bg-secondary/50'
            }`}
          >
            Followers
          </button>
        </div>

        <div className="p-6 min-h-[200px] flex flex-col items-center justify-center text-center">
          {activeTab === 'following' && following.length === 0 ? (
            <div className="space-y-4">
               <div className="mx-auto w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                   <Users className="w-10 h-10 text-muted-foreground" />
               </div>
              <p className="text-muted-foreground font-medium">
                Learning is more fun and effective when you connect with others.
              </p>
            </div>
          ) : activeTab === 'followers' && followers.length > 0 ? (
             <div className="w-full space-y-3">
                {followers.map(friend => (
                    <div key={friend.id} className="flex items-center justify-between w-full p-2 hover:bg-secondary/50 rounded-lg transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                                {friend.name[0]}
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-sm">{friend.name}</p>
                                <p className="text-xs text-muted-foreground">@{friend.username}</p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-muted-foreground">{friend.xp} XP</span>
                    </div>
                ))}
             </div>
          ) : (
             <p className="text-muted-foreground">No followers yet.</p>
          )}
        </div>
      </div>

      {/* Add Friends Card */}
      <div className="bg-card rounded-2xl border border-border shadow-sm p-4 space-y-4">
        <h3 className="font-bold text-lg text-foreground">Add friends</h3>
        
        <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
              <Search className="w-5 h-5" />
            </div>
            <span className="font-bold text-foreground">Find friends</span>
          </div>
          <span className="text-muted-foreground text-xl">›</span>
        </button>

        <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
              <UserPlus className="w-5 h-5" />
            </div>
            <span className="font-bold text-foreground">Invite friends</span>
          </div>
          <span className="text-muted-foreground text-xl">›</span>
        </button>
      </div>
    </div>
  );
};
