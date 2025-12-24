'use client';

import React, { useState } from 'react';
import { SyllabusHeader } from './SyllabusHeader';
import { SyllabusCard } from './SyllabusCard';
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

    </div>
  );
}
