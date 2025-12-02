import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import { Trophy, Rocket } from 'lucide-react';

export function MotivationBanner() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
      <div className="flex items-center gap-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
          <Trophy className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">You're doing great!</h3>
          <p className="text-muted-foreground text-sm">
            You're just 2 lessons away from mastering Quadratic Equations. Keep
            going! <Rocket className="w-4 h-4 inline text-orange-500 ml-1" />
          </p>
        </div>
      </div>

      <div className="relative z-10">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white border-none min-w-[160px]">
          Continue Learning
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
    </div>
  );
}
