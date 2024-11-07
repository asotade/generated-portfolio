"use client";

import dynamic from 'next/dynamic';
import { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CommandInput } from '@/components/Terminal/CommandInput';
import { TerminalOutput } from '@/components/Terminal/TerminalOutput';
import { Header } from '@/components/Terminal/Header';
import { executeCommand } from '@/lib/commands';

// Dynamically import ModernView to reduce initial bundle size
const ModernView = dynamic(
  () => import('@/components/Modern/ModernView').then(mod => ({ default: mod.ModernView })),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-primary">Loading...</div>
      </div>
    ),
    ssr: false
  }
);

export default function Home() {
  const [isTerminalView, setIsTerminalView] = useState(false);
  const [history, setHistory] = useState<Array<{ type: 'command' | 'response', content: string }>>([
    { type: 'response', content: 'Welcome! Type "help" to see available commands.' }
  ]);

  const handleCommand = (command: string) => {
    setHistory(prev => [...prev, { type: 'command', content: command }]);

    if (command === 'clear') {
      setHistory([]);
      return;
    }

    const response = executeCommand(command);
    
    if (response) {
      setHistory(prev => [...prev, { type: 'response', content: response.content }]);
    } else {
      setHistory(prev => [...prev, { 
        type: 'response', 
        content: `Command not found: ${command}. Type "help" for available commands.`
      }]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      <div className="fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsTerminalView(!isTerminalView)}
          className="bg-background/50 backdrop-blur-sm border-primary/50 hover:border-primary transition-all duration-300"
          aria-label={isTerminalView ? "Switch to modern view" : "Switch to terminal view"}
        >
          {isTerminalView ? (
            <Monitor className="h-5 w-5 text-primary" />
          ) : (
            <Terminal className="h-5 w-5 text-primary" />
          )}
          <span className="sr-only">
            {isTerminalView ? "Switch to modern view" : "Switch to terminal view"}
          </span>
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {isTerminalView ? (
          <motion.div
            key="terminal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-8"
          >
            <div className="max-w-3xl mx-auto">
              <Header />
              <div className="space-y-6 mb-4">
                <TerminalOutput history={history} />
              </div>
              <CommandInput onCommand={handleCommand} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="modern"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="animate-pulse text-primary">Loading...</div>
              </div>
            }>
              <ModernView />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}