import type { Metadata } from 'next';
import { Alegreya } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { BackgroundAnimation } from '@/components/layout/BackgroundAnimation';
import { Header } from '@/components/layout/Header';

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
});

export const metadata: Metadata = {
  title: 'Heartfelt Haven',
  description: 'A special place to show how much you mean to me. Filled with letters, memories, and lots of love.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-headline antialiased', alegreya.variable)}>
        <BackgroundAnimation />
        <div className="relative z-10">
          <Header />
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
