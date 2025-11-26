import { PerformanceChart } from '@/components/performance/PerformanceChart';

export default function PerformancePage() {
  return (
    <main className="flex-1 min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-lg font-semibold">My Performance</h1>
          <p className="text-slate-400 text-sm mt-1">
            Track your progress and stats.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Line Graph Section - 2/3 width */}
          <div className="w-full lg:w-2/3">
            <PerformanceChart />
          </div>

          {/* Empty Section - 1/3 width */}
          <div className="w-full lg:w-1/3 bg-slate-900/30 border border-slate-800/50 rounded-xl min-h-[400px]">
            {/* Empty placeholder as requested */}
          </div>
        </div>
      </div>
    </main>
  );
}


