import { ResourcesSection } from '@/components/resources/ResourcesSection';

export default function BooksPage() {
  return (
    <main className="flex-1 min-h-screen bg-background text-foreground p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <ResourcesSection />
      </div>
    </main>
  );
}


