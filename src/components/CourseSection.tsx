'use client';

import React, { useState } from 'react';
import { CourseCard } from './CourseCard';
import {
  Brain,
  Atom,
  Calculator,
  Terminal,
  BookOpen,
  BarChart,
  LayoutGrid,
  List,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/lib/utils';

const COURSES = [
  {
    id: 1,
    title: 'Neural Networks Fundamentals',
    description:
      'Master the building blocks of artificial intelligence and deep learning',
    category: 'AI & ML',
    level: 'Intermediate',
    progress: 65,
    color: 'bg-gradient-to-br from-violet-600 to-indigo-600',
    icon: Brain,
    status: 'ongoing',
  },
  {
    id: 2,
    title: 'Quantum Computing',
    description:
      'Explore the revolutionary world of quantum mechanics and computing',
    category: 'Science',
    level: 'Advanced',
    progress: 0,
    color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    icon: Atom,
    status: 'not-started',
  },
  {
    id: 3,
    title: 'Calculus & Analysis',
    description:
      'Build strong foundations in mathematical analysis and calculus',
    category: 'Mathematics',
    level: 'Beginner',
    progress: 100,
    color: 'bg-gradient-to-br from-orange-500 to-red-600',
    icon: Calculator,
    status: 'completed',
  },
  {
    id: 4,
    title: 'Advanced Python',
    description: 'Master advanced Python concepts and data structures',
    category: 'Programming',
    level: 'Intermediate',
    progress: 30,
    color: 'bg-gradient-to-br from-purple-600 to-blue-600',
    icon: Terminal,
    status: 'ongoing',
  },
  {
    id: 5,
    title: 'Philosophy & Ethics',
    description:
      'Explore fundamental questions about existence, knowledge, and morality',
    category: 'Humanities',
    level: 'Beginner',
    progress: 0,
    color: 'bg-gradient-to-br from-pink-500 to-rose-600',
    icon: BookOpen,
    status: 'not-started',
  },
  {
    id: 6,
    title: 'Data Analytics',
    description:
      'Learn to extract insights from complex datasets using modern tools',
    category: 'Data Science',
    level: 'Advanced',
    progress: 45,
    color: 'bg-gradient-to-br from-cyan-500 to-blue-500',
    icon: BarChart,
    status: 'ongoing',
  },
] as const;

type Level = 'All' | 'Beginner' | 'Intermediate' | 'Advanced';

export function CourseSection() {
  const [activeFilter, setActiveFilter] = useState<Level>('All');

  const filteredCourses = COURSES.filter((course) => {
    if (activeFilter === 'All') return true;
    return course.level === activeFilter;
  });

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
            <h2 className="text-2xl font-bold text-foreground">Modern Courses</h2>
          </div>
          <p className="text-muted-foreground">
            Explore AI-powered courses designed for your success
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            className="bg-muted border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground min-w-[140px] justify-between"
          >
            All Courses
            <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
          </Button>

          <div className="bg-muted p-1 rounded-lg border border-border flex items-center">
            {(['All', 'Beginner', 'Intermediate', 'Advanced'] as Level[]).map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    'px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200',
                    activeFilter === filter
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  )}
                >
                  {filter}
                </button>
              )
            )}
          </div>

          <div className="flex items-center gap-1 bg-muted p-1 rounded-lg border border-border">
            <button className="p-2 rounded-md bg-background text-foreground shadow-sm">
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
