'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  GraduationCap,
  Trophy,
  Library,
  Compass,
  Settings,
  X,
} from "lucide-react";
import { useSidebar } from "@/contexts/SidebarContext";
import { useEffect, useRef } from "react";

const SIDEBAR_ITEMS = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "My Learning", href: "/syllabus", icon: GraduationCap },
  { label: "My Performance", href: "/performance", icon: Trophy },
  { label: "Books", href: "/books", icon: Library },
  { label: "Courses", href: "/classes", icon: Compass },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { isOpen, close } = useSidebar();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) close();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, close]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        isOpen
      ) {
        close();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, close]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop - mobile only */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden animate-in fade-in duration-200"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={cn(
          "w-[280px] bg-sidebar border-r border-sidebar-border h-screen flex flex-col p-4 gap-4 z-50",
          // Mobile: fixed position, slide animation
          "fixed md:sticky top-0",
          "transition-transform duration-300 ease-in-out",
          isOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Close button - mobile only */}
        <button
          onClick={close}
          className="md:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors z-10"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo Area */}
        <div className="px-4 py-3 flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            {/* Simple Logo Icon */}
            <div className="w-3 h-3 bg-primary-foreground rounded-full" />
          </div>
          <span className="font-bold text-xl tracking-tight text-primary">Classroom</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col gap-2">
          {SIDEBAR_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  // Close sidebar on mobile when link is clicked
                  if (window.innerWidth < 768) {
                    close();
                  }
                }}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group",
                  isActive
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground border border-transparent"
                )}
              >
                <item.icon
                  className={cn(
                    "w-6 h-6 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className={cn(
                  "font-bold text-sm uppercase tracking-wide",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Footer / User Profile */}
        <div className="mt-auto pt-4 border-t border-sidebar-border px-2">
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-accent cursor-pointer transition-colors group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 p-0.5 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <span className="font-bold text-xs">SC</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Sarah Chen</span>
              <span className="text-xs text-muted-foreground font-medium">Premium Student</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
