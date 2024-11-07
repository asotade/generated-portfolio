"use client";

import { Terminal } from 'lucide-react';
import { ThemeToggle } from '@/components/Theme/ThemeToggle';

export function Header() {
  return (
    <div className="flex items-center justify-between border-b border-primary pb-4 mb-6">
      <div className="flex items-center gap-2">
        <Terminal className="w-6 h-6 text-primary" />
        <h1 className="text-xl font-bold text-primary">Terminal Portfolio</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-primary text-sm flex items-center gap-2">
          <span className="animate-pulse">●</span> Connected
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}