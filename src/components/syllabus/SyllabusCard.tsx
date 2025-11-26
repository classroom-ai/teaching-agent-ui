import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/lib/utils';
import { LucideIcon, Play, Clock, FileText, CheckCircle, Lock } from 'lucide-react';

interface SyllabusCardProps {
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'locked' | 'not-started';
  progress: number;
  time: string;
  lessons: string;
  icon: LucideIcon;
}

export function SyllabusCard({
  title,
  description,
  status,
  progress,
  time,
  lessons,
  icon: Icon,
}: SyllabusCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'in-progress':
        return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      case 'locked':
        return 'text-slate-500 bg-slate-800/50 border-slate-800';
      default:
        return 'text-slate-400 bg-slate-800/30 border-slate-800';
    }
  };

  const statusColor = getStatusColor();

  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3">
          <div
            className={cn(
              'p-2 rounded-lg flex items-center justify-center transition-colors',
              statusColor
            )}
          >
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
        {status === 'completed' && (
          <div className="flex items-center gap-1 text-xs font-medium text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
            <CheckCircle className="w-3 h-3" />
            Completed
          </div>
        )}
        {status === 'in-progress' && (
          <div className="flex items-center gap-1 text-xs font-medium text-blue-500 bg-blue-500/10 px-2 py-1 rounded-full">
            <Play className="w-3 h-3 fill-current" />
            In Progress
          </div>
        )}
        {status === 'locked' && (
          <div className="flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-800 px-2 py-1 rounded-full">
            <Lock className="w-3 h-3" />
            Locked
          </div>
        )}
        {status === 'not-started' && (
          <div className="flex items-center gap-1 text-xs font-medium text-slate-400 bg-slate-800 px-2 py-1 rounded-full">
            <Clock className="w-3 h-3" />
            Not Started
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-xs text-slate-400">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <div
            className={cn(
              'h-full rounded-full transition-all duration-500',
              status === 'completed'
                ? 'bg-green-500'
                : status === 'in-progress'
                ? 'bg-blue-500'
                : 'bg-slate-700'
            )}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-auto space-y-4">
        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {time}
          </div>
          <div className="flex items-center gap-1.5">
            <Play className="w-3.5 h-3.5" />
            {lessons}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {status === 'completed' ? (
            <>
              <Button
                variant="outline"
                className="flex-1 bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 h-9 text-xs"
              >
                Review
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-green-900/20 border-green-900/50 text-green-400 hover:bg-green-900/40 hover:text-green-300 h-9 text-xs"
              >
                Quiz
              </Button>
            </>
          ) : status === 'in-progress' ? (
            <>
              <Button
                variant="outline"
                className="flex-1 bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 h-9 text-xs"
              >
                Notes
              </Button>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white border-none h-9 text-xs">
                Resume
              </Button>
            </>
          ) : status === 'locked' ? (
            <>
              <Button
                variant="outline"
                disabled
                className="flex-1 bg-slate-800/50 border-slate-800 text-slate-500 h-9 text-xs"
              >
                Preview
              </Button>
              <Button
                disabled
                className="flex-1 bg-slate-800 border-slate-800 text-slate-500 h-9 text-xs"
              >
                Start Learning
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                className="flex-1 bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 h-9 text-xs"
              >
                Preview
              </Button>
              <Button className="flex-1 bg-slate-700 hover:bg-blue-600 text-white border-none h-9 text-xs transition-colors">
                Start Learning
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
