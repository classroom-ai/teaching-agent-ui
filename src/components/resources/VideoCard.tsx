import React from 'react';
import { Play, Clock, Eye } from 'lucide-react';

interface VideoCardProps {
  title: string;
  duration: string;
  thumbnailColor: string;
  platform: string;
  views: string;
}

export function VideoCard({
  title,
  duration,
  thumbnailColor,
  platform,
  views,
}: VideoCardProps) {
  return (
    <div className="group flex flex-col bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50 cursor-pointer">
      {/* Thumbnail */}
      <div className={`h-40 w-full ${thumbnailColor} relative flex items-center justify-center group-hover:opacity-90 transition-opacity`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Play className="w-5 h-5 text-white fill-white ml-0.5" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">
          {duration}
        </div>
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300">
            {platform}
          </span>
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {views}
          </div>
        </div>
      </div>
    </div>
  );
}
