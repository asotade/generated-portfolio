"use client";

import { motion } from 'framer-motion';
import { Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function Contact() {
  return (
    <motion.section 
      variants={fadeIn} 
      className="py-8"
      aria-label="Contact Information"
    >
      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="text-lg font-semibold">Get in Touch</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <Link href="/resume.pdf" download>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Download Resume
              <Download className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.section>
  );
}