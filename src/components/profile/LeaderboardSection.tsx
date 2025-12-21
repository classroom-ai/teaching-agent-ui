import React from 'react';
import { Shield, TrendingUp, Medal } from 'lucide-react';

export const LeaderboardSection: React.FC = () => {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-sm p-6 space-y-6">
      <h2 className="text-xl font-bold text-foreground">Your Statistics</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border border-border bg-secondary/30 flex flex-col items-center text-center gap-2">
            <div className="p-2 bg-orange-100 text-orange-500 rounded-lg">
                <TrendingUp className="w-5 h-5" />
            </div>
            <div>
                <div className="text-2xl font-bold text-foreground">3</div>
                <div className="text-xs text-muted-foreground font-bold uppercase">Day Streak</div>
            </div>
        </div>
        
        <div className="p-4 rounded-xl border border-border bg-secondary/30 flex flex-col items-center text-center gap-2">
             <div className="p-2 bg-yellow-100 text-yellow-500 rounded-lg">
                <Medal className="w-5 h-5" />
            </div>
            <div>
                <div className="text-2xl font-bold text-foreground">1450</div>
                <div className="text-xs text-muted-foreground font-bold uppercase">Total XP</div>
            </div>
        </div>
        
        <div className="p-4 rounded-xl border border-border bg-secondary/30 flex flex-col items-center text-center gap-2">
             <div className="p-2 bg-purple-100 text-purple-500 rounded-lg">
                <Shield className="w-5 h-5" />
            </div>
            <div>
                <div className="text-2xl font-bold text-foreground">Gold</div>
                <div className="text-xs text-muted-foreground font-bold uppercase">Current League</div>
            </div>
        </div>
        
         <div className="p-4 rounded-xl border border-border bg-secondary/30 flex flex-col items-center text-center gap-2">
             <div className="p-2 bg-blue-100 text-blue-500 rounded-lg">
                <TrendingUp className="w-5 h-5" />
            </div>
            <div>
                <div className="text-2xl font-bold text-foreground">Top 10%</div>
                <div className="text-xs text-muted-foreground font-bold uppercase">Ranking</div>
            </div>
        </div>
      </div>
      
      <div className="pt-4 border-t border-border">
          <button className="w-full py-3 text-sm font-bold text-primary uppercase tracking-wide hover:bg-secondary/50 rounded-xl transition-colors">
              View Leaderboard
          </button>
      </div>
    </div>
  );
};
