"use client";

import { motion } from 'framer-motion';
import { Code2, Briefcase, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function Skills() {
  return (
    <motion.section 
      variants={fadeIn} 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      aria-label="Technical Skills"
    >
      <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="text-lg font-semibold">Programming Languages</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc list-inside text-muted-foreground">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="text-lg font-semibold">Frameworks & Libraries</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc list-inside text-muted-foreground">
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Cpu className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="text-lg font-semibold">Cloud & DevOps</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc list-inside text-muted-foreground">
            <li>AWS</li>
            <li>GCP</li>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
        </CardContent>
      </Card>
    </motion.section>
  );
}