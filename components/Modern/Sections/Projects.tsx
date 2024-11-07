"use client";

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function Projects() {
  return (
    <motion.section 
      variants={fadeIn} 
      className="space-y-6"
      aria-label="Featured Projects"
    >
      <h2 className="text-2xl font-bold text-primary">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Cloud Infrastructure Automation</span>
              <Link href="#" aria-label="View Cloud Infrastructure Automation project">
                <ExternalLink className="h-4 w-4 text-primary" aria-hidden="true" />
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Developed automated deployment systems resulting in 70% reduction in deployment time</p>
          </CardContent>
        </Card>

        <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Microservices Architecture</span>
              <Link href="#" aria-label="View Microservices Architecture project">
                <ExternalLink className="h-4 w-4 text-primary" aria-hidden="true" />
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Designed and implemented scalable microservices improving system reliability</p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}