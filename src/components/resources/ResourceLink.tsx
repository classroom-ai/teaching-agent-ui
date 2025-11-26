import React from 'react';
import { ExternalLink, LucideIcon } from 'lucide-react';

interface ResourceLinkProps {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  color: string;
}

export function ResourceLink({
  title,
  description,
  url,
  icon: Icon,
  color,
}: ResourceLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300"
    >
      <div className={`p-3 rounded-lg ${color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
    </a>
  );
}
