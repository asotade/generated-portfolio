"use client";

import { motion } from 'framer-motion';
import { Hero } from '@/components/Modern/Sections/Hero';
import { Skills } from '@/components/Modern/Sections/Skills';
import { Projects } from '@/components/Modern/Sections/Projects';
import { Contact } from '@/components/Modern/Sections/Contact';
import { ThemeToggle } from '@/components/Theme/ThemeToggle';

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ModernView() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-background via-background to-background">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <motion.div 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="max-w-6xl mx-auto space-y-8"
      >
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </motion.div>
    </main>
  );
}