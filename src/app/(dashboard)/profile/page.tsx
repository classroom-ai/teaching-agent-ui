'use client';

import React from 'react';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { AchievementsSection } from '@/components/profile/AchievementsSection';
import { FriendsSection } from '@/components/profile/FriendsSection';
import { LeaderboardSection } from '@/components/profile/LeaderboardSection';
import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data: session } = authClient.useSession();

  const joinDate = session?.user?.createdAt 
    ? new Date(session.user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : "December 2025";

  const username = session?.user?.email 
    ? session.user.email.split('@')[0]
    : "student_123";

  return (
    <div className="min-h-screen bg-background p-6 space-y-8">
      <ProfileHeader 
        name={session?.user?.name || "Student User"}
        username={username}
        joinDate={joinDate}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <AchievementsSection />
          <FriendsSection />
        </div>
        
        <div className="lg:col-span-1">
          <LeaderboardSection />
        </div>
      </div>
    </div>
  );
}
