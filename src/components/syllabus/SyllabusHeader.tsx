import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import { User, Users, Clock, Play } from 'lucide-react';

interface SyllabusHeaderProps {
  title: string;
  description: string;
  instructor: string;
  studentsOnline: number;
  timeRemaining: string;
  isLive?: boolean;
}

export function SyllabusHeader({
  title,
  description,
  instructor,
  studentsOnline,
  timeRemaining,
  isLive = false,
}: SyllabusHeaderProps) {
  return (
    <div className="bg-[#0F172A] border border-blue-900/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl shadow-blue-900/10">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="space-y-6 flex-1 relative z-10 w-full">
        {isLive && (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wide uppercase shadow-lg shadow-blue-600/20">
            Live Now
          </div>
        )}

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            {title}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">{description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-slate-500" />
            <span>{instructor}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-slate-500" />
            <span>{studentsOnline} students online</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-500" />
            <span>{timeRemaining} remaining</span>
          </div>
        </div>

        <div className="pt-2">
          <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white border-none shadow-lg shadow-blue-900/20 px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105">
            Join Live Class Now
          </Button>
        </div>
      </div>

      <div className="relative z-10 hidden md:block">
        <button className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-blue-500/30 hover:scale-110 transition-transform duration-300 group">
          <Play className="w-8 h-8 text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}
