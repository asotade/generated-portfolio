"use client";

import { useState } from 'react';

interface CommandInputProps {
  onCommand: (command: string) => void;
}

export function CommandInput({ onCommand }: CommandInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onCommand(input.trim().toLowerCase());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <span className="text-primary">$</span>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 bg-transparent border-none outline-none text-primary font-mono placeholder-primary/50"
        placeholder="Type 'help' for commands..."
        autoFocus
      />
    </form>
  );
}