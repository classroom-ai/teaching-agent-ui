export default function DashboardSidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-slate-100 h-screen sticky top-0 hidden md:flex flex-col">
      <div className="flex items-center gap-2 px-4 h-14 border-b border-slate-800">
        <div className="w-6 h-6 rounded bg-blue-500" />
        <span className="font-semibold text-sm">Classroom AI</span>
      </div>
      <nav className="flex-1 p-2 text-sm">
        <a className="block px-3 py-2 rounded hover:bg-slate-800" href="#">Dashboard</a>
        <a className="block px-3 py-2 rounded bg-slate-800 mt-1" href="#">Syllabus</a>
        <a className="block px-3 py-2 rounded hover:bg-slate-800 mt-1" href="#">My Performance</a>
        <a className="block px-3 py-2 rounded hover:bg-slate-800 mt-1" href="#">Books</a>
        <a className="block px-3 py-2 rounded hover:bg-slate-800 mt-1" href="#">Classes</a>
        <a className="block px-3 py-2 rounded hover:bg-slate-800 mt-1" href="#">Settings</a>
      </nav>
      <div className="p-4 border-t border-slate-800 text-xs text-slate-400">Sarah Chen<br/>Premium Student</div>
    </aside>
  );
}


