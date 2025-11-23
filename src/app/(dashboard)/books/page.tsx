export default function BooksPage() {
  return (
    <main className="flex-1 min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-lg font-semibold">Books</h1>
        <p className="text-slate-400 text-sm mt-1">Browse and manage your course books.</p>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <div className="text-sm font-semibold">Introduction to Algorithms</div>
            <div className="text-[11px] text-slate-400">CLRS, 3rd Edition</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <div className="text-sm font-semibold">Operating Systems</div>
            <div className="text-[11px] text-slate-400">Concepts and Design</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <div className="text-sm font-semibold">Discrete Mathematics</div>
            <div className="text-[11px] text-slate-400">With Applications</div>
          </div>
        </div>
      </div>
    </main>
  );
}


