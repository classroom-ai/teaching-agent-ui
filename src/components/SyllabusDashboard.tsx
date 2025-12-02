'use client'
import React, { useState, useEffect } from 'react';

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-sky-400 text-lg font-semibold">{value}</div>
      <div className="text-[11px] text-muted-foreground">{label}</div>
    </div>
  );
}

function Card({ title, status, progress, actions }: { title: string; status?: string; progress?: number; actions?: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-xl p-4 text-card-foreground">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">{title}</div>
        {status && <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-600/20 text-emerald-300 border border-emerald-700">{status}</span>}
      </div>
      {typeof progress === 'number' && (
        <div className="mt-3">
          <div className="h-1.5 bg-muted rounded-full">
            <div className="h-1.5 bg-emerald-500 rounded-full" style={{ width: `${progress}%` }} />
          </div>
          <div className="text-[10px] text-right mt-1 text-muted-foreground">{progress}%</div>
        </div>
      )}
      {actions && <div className="mt-3 flex gap-2">{actions}</div>}
    </div>
  );
}

export default function SyllabusDashboard() {
  const [greeting, setGreeting] = useState('Good Morning');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  return (
    <main className="flex-1 min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto p-4">
        {/* Hero Section */}
        <div className="mb-8 rounded-3xl bg-black p-8 md:p-12 relative overflow-hidden shadow-sm">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              {greeting}, Faseeh!
            </h1>
            <p className="text-green-50 text-lg md:text-xl font-medium mb-8 max-w-xl leading-relaxed">
              Ready to expand your knowledge? Dive back into your lessons and keep your streak alive!
            </p>
            <button className="bg-white text-black hover:bg-green-50 font-bold py-4 px-8 rounded-2xl shadow-[0_4px_0_rgb(0,0,0,0.1)] hover:shadow-[0_2px_0_rgb(0,0,0,0.1)] hover:translate-y-[2px] transition-all uppercase tracking-wide text-sm">
              Start Learning
            </button>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-green-400/50 rounded-full blur-3xl"></div>
          <div className="absolute right-12 top-12 w-32 h-32 bg-green-400/30 rounded-full blur-2xl"></div>
        </div>

        
        
      </div>
    </main>
  );
}


