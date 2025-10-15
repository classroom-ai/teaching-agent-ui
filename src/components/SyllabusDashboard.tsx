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

        <div className="mt-3 bg-slate-900/60 border border-slate-800 rounded-xl p-4">
          <div className="text-sm font-semibold">JEE Advanced 2024</div>
          <div className="text-[11px] text-slate-400">Master the concepts and problem-solving techniques for competitive exams</div>
          <div className="mt-3 grid grid-cols-3 md:grid-cols-6 gap-4">
            <Stat label="Total Chapters" value="24" />
            <Stat label="Hours Content" value="156" />
            <Stat label="Completed" value="8" />
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


