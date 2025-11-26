'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/Button/button';
import { Sun, Moon, Bell, Search } from 'lucide-react';
import Image from 'next/image';

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    setMounted(true);
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-16 border-b border-slate-800 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50 px-6 flex items-center justify-between">
      {/* Greeting Section */}
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold text-white">
          {greeting}, Faseeh! 👋
        </h1>
        <p className="text-xs text-slate-400">
          Ready to continue your learning journey?
        </p>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 text-sm text-slate-400 w-64">
          <Search className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search courses..."
            className="bg-transparent border-none outline-none w-full placeholder:text-slate-500"
          />
        </div>

        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full"
        >
          <Bell className="w-5 h-5" />
        </Button>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </Button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-2 border-l border-slate-800">
          <div className="text-right hidden md:block">
            <div className="text-sm font-medium text-white">Faseeh Ahmad</div>
            <div className="text-xs text-slate-400">Student</div>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 p-0.5">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-violet-600">
                FA
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}