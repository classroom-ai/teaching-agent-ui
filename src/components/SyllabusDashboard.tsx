function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-sky-400 text-lg font-semibold">{value}</div>
      <div className="text-[11px] text-slate-400">{label}</div>
    </div>
  );
}

function Card({ title, status, progress, actions }: { title: string; status?: string; progress?: number; actions?: React.ReactNode }) {
  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-slate-100">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">{title}</div>
        {status && <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-600/20 text-emerald-300 border border-emerald-700">{status}</span>}
      </div>
      {typeof progress === 'number' && (
        <div className="mt-3">
          <div className="h-1.5 bg-slate-700 rounded-full">
            <div className="h-1.5 bg-emerald-500 rounded-full" style={{ width: `${progress}%` }} />
          </div>
          <div className="text-[10px] text-right mt-1 text-slate-400">{progress}%</div>
        </div>
      )}
      {actions && <div className="mt-3 flex gap-2">{actions}</div>}
    </div>
  );
}

export default function SyllabusDashboard() {
  return (
    <main className="flex-1 min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-300">Syllabus <span className="ml-2 text-[10px] text-slate-500">12 day streak</span></div>
          <input className="hidden md:block bg-slate-900 border border-slate-800 rounded-md text-sm px-3 py-1.5 w-80 placeholder-slate-500" placeholder="Search topics..."/>
        </div>

        {/* Live Class Card */}
        <div className="mt-3 relative bg-[#1A1B26] border border-transparent rounded-xl p-6 overflow-hidden">
          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 p-[1px]">
            <div className="w-full h-full bg-[#1A1B26] rounded-xl"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Top Row */}
            <div className="flex items-start justify-between mb-4">
              {/* LIVE NOW Badge */}
              <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                LIVE NOW
              </div>
              
              {/* Play Button */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            
            {/* Title */}
            <h2 className="text-white text-xl font-bold mb-2">
              Advanced React Patterns & Performance
            </h2>
            
            {/* Description */}
            <p className="text-gray-400 text-sm mb-6">
              Master advanced React concepts with real-world projects
            </p>
            
            {/* Metadata */}
            <div className="flex items-center gap-6 mb-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span>Dr. Michael Chen</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7H16.5c-.8 0-1.54.5-1.85 1.26L12.5 16H15v6h5zM6.5 6c-.83 0-1.5-.67-1.5-1.5S5.67 3 6.5 3 8 3.67 8 4.5 7.33 6 6.5 6zm3 6c-.83 0-1.5-.67-1.5-1.5S8.67 9 9.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5 6c0 .83-.67 1.5-1.5 1.5S7.5 19.83 7.5 19s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"/>
                </svg>
                <span>24 students online</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <span>2h 15m remaining</span>
              </div>
            </div>
            
            {/* Join Button */}
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
              Join Live Class Now
            </button>
          </div>
        </div>

        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <Card title="Linear Equations" status="Completed" progress={100} actions={
            <>
              <button className="px-3 py-1.5 text-xs rounded-md bg-slate-700 hover:bg-slate-600">Review</button>
              <button className="px-3 py-1.5 text-xs rounded-md bg-emerald-600 hover:bg-emerald-500">Quiz</button>
            </>
          }/>
          <Card title="Quadratic Equations" status="In Progress" progress={65} actions={
            <>
              <button className="px-3 py-1.5 text-xs rounded-md bg-slate-700 hover:bg-slate-600">Notes</button>
              <button className="px-3 py-1.5 text-xs rounded-md bg-blue-600 hover:bg-blue-500">Resume</button>
            </>
          }/>
          <Card title="Limits & Derivatives" progress={0} actions={
            <>
              <button className="px-3 py-1.5 text-xs rounded-md bg-slate-700/60 text-slate-400 cursor-not-allowed">Preview</button>
              <button className="px-3 py-1.5 text-xs rounded-md bg-slate-700/60 text-slate-400 cursor-not-allowed">Start Learning</button>
            </>
          }/>

          <Card title="Trigonometry" progress={0} actions={
            <>
              <button className="px-3 py-1.5 text-xs rounded-md bg-slate-700 hover:bg-slate-600">Preview</button>
              <button className="px-3 py-1.5 text-xs rounded-md bg-sky-600 hover:bg-sky-500">Start Learning</button>
            </>
          }/>
          <Card title="Percentages & Ratios" status="Completed" progress={100} actions={
            <>
              <button className="px-3 py-1.5 text-xs rounded-md bg-slate-700 hover:bg-slate-600">Review</button>
              <button className="px-3 py-1.5 text-xs rounded-md bg-emerald-600 hover:bg-emerald-500">Quiz</button>
            </>
          }/>
          <Card title="Statistics & Probability" progress={0} actions={
            <>
              <button className="px-3 py-1.5 text-xs rounded-md bg-slate-700 hover:bg-slate-600">Preview</button>
              <button className="px-3 py-1.5 text-xs rounded-md bg-sky-600 hover:bg-sky-500">Start Learning</button>
            </>
          }/>
        </div>

        <div className="mt-4 bg-slate-900/60 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
          <div className="text-sm">You're doing great! <span className="text-slate-400 text-xs">You're just 2 lessons away from mastering Quadratic Equations. Keep going! 🚀</span></div>
          <button className="px-3 py-1.5 text-xs rounded-md bg-blue-600 hover:bg-blue-500">Continue Learning</button>
        </div>
      </div>
    </main>
  );
}


