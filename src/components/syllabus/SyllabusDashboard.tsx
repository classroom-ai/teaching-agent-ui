'use client';

import React, { useState } from 'react';
import { SyllabusHeader } from './SyllabusHeader';
import { SyllabusCard } from './SyllabusCard';
import { MotivationBanner } from './MotivationBanner';
import { Button } from '@/components/ui/Button/button';
import {
  ChevronDown,
  LayoutGrid,
  List,
  Calculator,
  Sigma,
  Infinity,
  Waves,
  PieChart,
  BarChart,
} from 'lucide-react';

const CHAPTERS = [
  {
    id: 1,
    title: 'Linear Equations',
    description: 'Master single and multi-variable equations',
    status: 'completed',
    progress: 100,
    time: '4h 30m',
    lessons: '12 lessons',
    icon: Calculator,
  },
  {
    id: 2,
    title: 'Quadratic Equations',
    description: 'Solve complex quadratic problems and applications',
    status: 'in-progress',
    progress: 65,
    time: '5h 15m',
    lessons: '8/15 lessons',
    icon: Sigma,
  },
  {
    id: 3,
    title: 'Limits & Derivatives',
    description: 'Understand calculus fundamentals and applications',
    status: 'locked',
    progress: 0,
    time: '6h 45m',
    lessons: '15 lessons',
    icon: Infinity,
  },
  {
    id: 4,
    title: 'Trigonometry',
    description: 'Master trigonometric functions and identities',
    status: 'not-started',
    progress: 0,
    time: '7h 20m',
    lessons: '22 lessons',
    icon: Waves,
  },
  {
    id: 5,
    title: 'Percentages & Ratios',
    description: 'Calculate percentages and solve ratio problems',
    status: 'completed',
    progress: 100,
    time: '3h 45m',
    lessons: '10 lessons',
    icon: PieChart,
  },
  {
    id: 6,
    title: 'Statistics & Probability',
    description: 'Analyze data and calculate probabilities',
    status: 'not-started',
    progress: 0,
    time: '8h 30m',
    lessons: '25 lessons',
    icon: BarChart,
  },
] as const;

export function SyllabusDashboard() {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white min-w-[140px] justify-between h-9"
          >
            All Subjects
            <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
          </Button>
          <Button
            variant="outline"
            className="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white min-w-[140px] justify-between h-9"
          >
            By Progress
            <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-400 mr-2">View:</span>
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setView('grid')}
              className={`p-1.5 rounded-md transition-colors ${
                view === 'grid'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-1.5 rounded-md transition-colors ${
                view === 'list'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <SyllabusHeader
        title="Advanced React Patterns & Performance"
        description="Master advanced React concepts with real-world projects"
        instructor="Dr. Michael Chen"
        studentsOnline={24}
        timeRemaining="2h 15m"
        isLive={true}
      />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CHAPTERS.map((chapter) => (
          <SyllabusCard key={chapter.id} {...chapter} />
        ))}
      </div>

      {/* Banner */}
      <MotivationBanner />
    </div>
  );
}
