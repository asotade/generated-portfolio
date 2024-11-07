import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/Theme/ThemeProvider';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Abdessamii Salhi - Senior Software Engineer Portfolio',
  description: 'Senior Software Engineer specializing in React, Next.js, Node.js, and cloud technologies.',
  keywords: 'Software Engineer, Full Stack Developer, React, Next.js, Node.js, TypeScript',
  authors: [{ name: 'Abdessamii Salhi' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdessamii.com',
    title: 'Abdessamii Salhi - Senior Software Engineer Portfolio',
    description: 'Senior Software Engineer specializing in React, Next.js, Node.js, and cloud technologies.',
    siteName: 'Abdessamii Salhi Portfolio',
    images: [{
      url: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=256&h=256&fit=crop&q=75&fm=webp',
      width: 256,
      height: 256,
      alt: 'Abdessamii Salhi'
    }]
  },
  twitter: {
    card: 'summary',
    title: 'Abdessamii Salhi - Senior Software Engineer Portfolio',
    description: 'Senior Software Engineer specializing in React, Next.js, Node.js, and cloud technologies.',
    images: ['https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=256&h=256&fit=crop&q=75&fm=webp']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#22c55e" />
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=256&h=256&fit=crop&q=75&fm=webp" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}