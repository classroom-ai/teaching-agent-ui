import React from 'react';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { AchievementsSection } from '@/components/profile/AchievementsSection';
import { FriendsSection } from '@/components/profile/FriendsSection';
import { LeaderboardSection } from '@/components/profile/LeaderboardSection';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background p-6 space-y-8">
      <ProfileHeader 
        name="Student User"
        username="student_123"
        joinDate="December 2025"
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
