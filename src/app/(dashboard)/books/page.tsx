import { ResourcesSection } from '@/components/resources/ResourcesSection';

export default function BooksPage() {
  return (
    <main className="flex-1 min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-lg font-semibold">Books & Resources</h1>
          <p className="text-slate-400 text-sm mt-1">
            Browse and manage your course books and learning materials.
          </p>
        </div>
        <ResourcesSection />
      </div>
    </main>
  );
}


