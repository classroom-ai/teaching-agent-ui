import React from 'react';
import { CalendarDays, MapPin } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  username: string;
  joinDate: string;
  location?: string;
  avatarUrl?: string; // In a real app, this would be used. For now, we'll use a placeholder or initials.
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  username,
  joinDate,
  location = "Earth",
}) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-card rounded-2xl border border-border shadow-sm">
      <div className="relative group">
        <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center text-4xl font-bold text-primary border-4 border-background shadow-md overflow-hidden">
            {/* Placeholder for avatar image if available, else initials */}
            {initials}
        </div>
        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-2 border-white rounded-full" title="Online"></div>
      </div>

      <div className="flex-1 text-center md:text-left space-y-2">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{name}</h1>
          <p className="text-muted-foreground text-lg">@{username}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground mt-2">
          <div className="flex items-center gap-1.5">
            <CalendarDays className="w-4 h-4" />
            <span>Joined {joinDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
        
        {/* Optional: Add a bio or status here later */}
      </div>
      
      <div className="flex gap-3">
          {/* Action buttons can go here, e.g., Edit Profile */}
          <button className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-colors">
              Edit Profile
          </button>
      </div>
    </div>
  );
};
