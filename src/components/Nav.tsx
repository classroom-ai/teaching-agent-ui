'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/Button/Button';
import { Sun, Moon, Bell, Search, Menu } from 'lucide-react';
import Image from 'next/image';
import { useSidebar } from '@/contexts/SidebarContext';

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const { toggle } = useSidebar();
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
    <div className="h-16 border-b border-border bg-background/50 backdrop-blur-xl sticky top-0 z-50 px-6 flex items-center justify-between">
      {/* Hamburger Menu - Mobile/Tablet Only */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggle}
        className="md:hidden text-muted-foreground hover:text-foreground hover:bg-accent rounded-full"
      >
        <Menu className="w-6 h-6" />
      </Button>

      {/* Greeting Section */}
      <div className="flex flex-col">
        {/* <h1 className="text-lg font-semibold text-foreground">
          {greeting}, Faseeh! 👋
        </h1> */}
        {/* <p className="text-xs text-muted-foreground">
          Ready to continue your learning journey?
        </p> */}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        

        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-full"
        >
          <Bell className="w-5 h-5" />
        </Button>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-full"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </Button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-2 border-l border-border hover:bg-accent cursor-pointer px-2 py-1 rounded-sm">
          <div className="text-right hidden md:block">
            <div className="text-sm font-medium text-foreground">Faseeh Ahmad</div>
            <div className="text-xs text-muted-foreground">Student</div>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 p-0.5">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
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