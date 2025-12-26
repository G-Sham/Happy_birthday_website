'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/memories', label: 'Memory Wall' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">My Favorite Person</span>
        </Link>
        <nav className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
