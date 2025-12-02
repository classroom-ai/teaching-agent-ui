import { PerformanceChart } from '@/components/performance/PerformanceChart';
import { Flame, Zap, Award, BookOpen } from 'lucide-react';

export default function PerformancePage() {
  return (
    <main className="flex-1 min-h-screen bg-background text-foreground p-6">
      <div className="max-w-6xl mx-auto space-y-6">

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Line Graph Section - 2/3 width */}
          <div className="w-full lg:w-2/3">
            <PerformanceChart />
          </div>

          
          <div className="w-full lg:w-1/3 bg-card/30 border border-border/50 rounded-xl min-h-[400px] p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-3 bg-gradient-to-br from-blue-500 to-violet-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <img
                  src="/profile photo.png"
                  alt="Faseeh Ahmad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-xl font-bold text-foreground mb-1">Faseeh Ahmad</h2>
            <p className="text-sm text-muted-foreground mb-6">Premium Student</p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="bg-muted/30 border border-border/50 p-3 rounded-xl flex flex-col items-center gap-1">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="font-bold text-lg">12</span>
                <span className="text-xs text-muted-foreground">Day Streak</span>
              </div>
              <div className="bg-muted/30 border border-border/50 p-3 rounded-xl flex flex-col items-center gap-1">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="font-bold text-lg">2,450</span>
                <span className="text-xs text-muted-foreground">Total XP</span>
              </div>
              <div className="bg-muted/30 border border-border/50 p-3 rounded-xl flex flex-col items-center gap-1">
                <Award className="w-5 h-5 text-purple-500" />
                <span className="font-bold text-lg">5</span>
                <span className="text-xs text-muted-foreground">Badges</span>
              </div>
              <div className="bg-muted/30 border border-border/50 p-3 rounded-xl flex flex-col items-center gap-1">
                <BookOpen className="w-5 h-5 text-blue-500" />
                <span className="font-bold text-lg">48</span>
                <span className="text-xs text-muted-foreground">Lessons</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


