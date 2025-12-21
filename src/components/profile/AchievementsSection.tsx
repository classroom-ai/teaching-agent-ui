import React from 'react';
import { Flame, Trophy, Target, Zap } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  total: number;
  level: number;
  color: string;
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Wildfire',
    description: 'Reach a 3 day streak',
    icon: <Flame className="w-6 h-6 text-white" />,
    progress: 1,
    total: 3,
    level: 1,
    color: 'bg-orange-500',
  },
  {
    id: '2',
    title: 'Champion',
    description: 'Complete 10 lessons',
    icon: <Trophy className="w-6 h-6 text-white" />,
    progress: 4,
    total: 10,
    level: 1,
    color: 'bg-yellow-500',
  },
  {
    id: '3',
    title: 'Sharpshooter',
    description: 'Complete a lesson with no mistakes',
    icon: <Target className="w-6 h-6 text-white" />,
    progress: 0,
    total: 1,
    level: 1,
    color: 'bg-red-500',
  },
   {
    id: '4',
    title: 'Speed Racer',
    description: 'Complete a lesson in under 2 minutes',
    icon: <Zap className="w-6 h-6 text-white" />,
    progress: 0,
    total: 5,
    level: 1,
    color: 'bg-blue-500',
  },
];

export const AchievementsSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Achievements</h2>
        <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          View All
        </button>
      </div>

      <div className="grid gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`flex-shrink-0 w-16 h-16 rounded-xl ${achievement.color} flex flex-col items-center justify-center shadow-sm`}>
               {achievement.icon}
               <span className="text-[10px] font-bold text-white uppercase mt-1">Lvl {achievement.level}</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-foreground truncate">{achievement.title}</h3>
                <span className="text-sm text-muted-foreground font-medium">
                  {achievement.progress}/{achievement.total}
                </span>
              </div>
              
              <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                <div
                  className={`h-full rounded-full ${achievement.color.replace('bg-', 'bg-')}`} 
                  style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                ></div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-1 truncate">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
