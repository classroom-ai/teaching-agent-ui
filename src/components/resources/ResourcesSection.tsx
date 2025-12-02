'use client';

import React from 'react';
import { BookCard } from './BookCard';
import { VideoCard } from './VideoCard';
import { ResourceLink } from './ResourceLink';
import {
  BookOpen,
  Video,
  Link as LinkIcon,
  Github,
  Globe,
  FileCode,
} from 'lucide-react';

const BOOKS = [
  {
    id: 1,
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    coverColor: 'bg-emerald-600',
    format: 'PDF',
    size: '12.5 MB',
  },
  {
    id: 2,
    title: 'Clean Code: A Handbook',
    author: 'Robert C. Martin',
    coverColor: 'bg-blue-600',
    format: 'EPUB',
    size: '4.2 MB',
  },
  {
    id: 3,
    title: 'Design Patterns',
    author: 'Erich Gamma',
    coverColor: 'bg-violet-600',
    format: 'PDF',
    size: '8.1 MB',
  },
  {
    id: 4,
    title: 'You Don\'t Know JS',
    author: 'Kyle Simpson',
    coverColor: 'bg-yellow-600',
    format: 'PDF',
    size: '3.5 MB',
  },
] as const;

const VIDEOS = [
  {
    id: 1,
    title: 'React Server Components Explained',
    duration: '12:45',
    thumbnailColor: 'bg-slate-800',
    platform: 'YouTube',
    views: '12K',
  },
  {
    id: 2,
    title: 'Advanced TypeScript Patterns',
    duration: '24:10',
    thumbnailColor: 'bg-blue-900',
    platform: 'Vimeo',
    views: '8.5K',
  },
  {
    id: 3,
    title: 'System Design Interview Guide',
    duration: '45:30',
    thumbnailColor: 'bg-indigo-900',
    platform: 'YouTube',
    views: '45K',
  },
];

const LINKS = [
  {
    id: 1,
    title: 'React Documentation',
    description: 'Official React documentation and guides',
    url: 'https://react.dev',
    icon: FileCode,
    color: 'bg-cyan-500',
  },
  {
    id: 2,
    title: 'MDN Web Docs',
    description: 'Resources for developers, by developers',
    url: 'https://developer.mozilla.org',
    icon: Globe,
    color: 'bg-yellow-500',
  },
  {
    id: 3,
    title: 'GitHub Student Pack',
    description: 'Free access to the best developer tools',
    url: 'https://education.github.com/pack',
    icon: Github,
    color: 'bg-purple-500',
  },
];

export function ResourcesSection() {
  return (
    <div className="space-y-12">
      {/* Books Shelf */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-6 h-6 text-blue-500" />
          <h2 className="text-xl font-bold text-foreground">Books Shelf</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOOKS.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </section>

      {/* Videos Bucket */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Video className="w-6 h-6 text-red-500" />
          <h2 className="text-xl font-bold text-foreground">Videos Bucket</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </section>

      {/* Useful Links */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <LinkIcon className="w-6 h-6 text-green-500" />
          <h2 className="text-xl font-bold text-foreground">Useful Links</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LINKS.map((link) => (
            <ResourceLink key={link.id} {...link} />
          ))}
        </div>
      </section>
    </div>
  );
}
