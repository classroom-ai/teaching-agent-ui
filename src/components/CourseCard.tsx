import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button/button';
import { LucideIcon } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
  color: string;
  icon: LucideIcon;
  status: 'completed' | 'ongoing' | 'not-started';
}

export function CourseCard({
  title,
  description,
  category,
  level,
  progress,
  color,
  icon: Icon,
  status,
}: CourseCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/50">
      {/* Gradient Header */}
      <div
        className={cn(
          'h-32 w-full flex items-center justify-center relative overflow-hidden',
          color
        )}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Badges */}
        <div className="flex items-center justify-between text-xs font-medium">
          <span
            className={cn(
              'px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700'
            )}
          >
            {category}
          </span>
          <span className="text-slate-400">{level}</span>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-slate-400 line-clamp-2">{description}</p>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-slate-400">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div
              className={cn(
                'h-full rounded-full transition-all duration-500',
                status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
              )}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          {status === 'completed' ? (
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white border-none"
              variant="default"
            >
              ✓ Completed
            </Button>
          ) : status === 'ongoing' ? (
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none"
              variant="default"
            >
              Continue Learning
            </Button>
          ) : (
            <Button
              className="w-full bg-slate-800 hover:bg-slate-700 text-white border-slate-700"
              variant="outline"
            >
              Start Course
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
