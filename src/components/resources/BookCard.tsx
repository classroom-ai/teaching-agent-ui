import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import { Download, Book } from 'lucide-react';

interface BookCardProps {
  title: string;
  author: string;
  coverColor: string;
  format: 'PDF' | 'EPUB';
  size: string;
}

export function BookCard({
  title,
  author,
  coverColor,
  format,
  size,
}: BookCardProps) {
  return (
    <div className="group flex flex-col bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50">
      {/* Cover Preview */}
      <div className={`h-48 w-full ${coverColor} relative p-6 flex flex-col justify-between group-hover:opacity-90 transition-opacity`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10">
          <Book className="w-8 h-8 text-white/80" />
        </div>
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-white line-clamp-2 leading-tight">
            {title}
          </h3>
          <p className="text-white/80 text-sm mt-1">{author}</p>
        </div>
      </div>

      {/* Details & Action */}
      <div className="p-4 flex items-center justify-between bg-slate-900">
        <div className="text-xs text-slate-400">
          <span className="font-medium text-slate-300">{format}</span> • {size}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-slate-400 hover:text-white hover:bg-slate-800"
        >
          <Download className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
