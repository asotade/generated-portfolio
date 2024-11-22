"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function Hero() {
  return (
    <motion.section 
      variants={fadeIn}
      className="text-center space-y-6 py-16"
      aria-label="Introduction"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-32 h-32 mx-auto rounded-full border-4 border-primary/50 overflow-hidden"
      >
        <Image
          src="/profile.png"
          alt="Abdessamii Salhi"
          width={256}
          height={256}
          priority
          quality={75}
          sizes="(max-width: 768px) 128px, 256px"
          className="w-full h-full object-cover transform scale-100 hover:scale-110 transition-transform duration-300"
          loading="eager"
        />
      </motion.div>
      <motion.h1 
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
          Abdessamii Salhi
        </span>
      </motion.h1>
      <motion.p 
        className="text-xl text-muted-foreground max-w-2xl mx-auto"
        variants={fadeIn}
      >
        Senior Software Engineer with over 8 years of experience in full-stack development, cloud architecture, and technical leadership.
      </motion.p>
      <motion.div 
        className="flex justify-center gap-4"
        variants={fadeIn}
      >
        <Link href="https://github.com/asotade" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform" aria-label="Visit GitHub Profile">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub Profile</span>
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/abdessamii" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform" aria-label="Connect on LinkedIn">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn Profile</span>
          </Button>
        </Link>
        <Link href="mailto:salhi.abdessamii@gmail.com">
          <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform" aria-label="Send Email">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email Contact</span>
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
}