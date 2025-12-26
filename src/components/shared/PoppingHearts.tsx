
'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PoppingHeart {
  id: number;
  style: React.CSSProperties;
  color: string;
}

export function PoppingHearts() {
  const [hearts, setHearts] = useState<PoppingHeart[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setHearts(
        Array.from({ length: 50 }).map((_, i) => ({
          id: i,
          style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `pop ${1 + Math.random() * 2}s ease-out ${
              Math.random() * 3
            }s infinite`,
          },
          color: Math.random() > 0.5 ? 'text-primary' : 'text-accent',
        }))
      );
    }
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <style>
        {`
          @keyframes pop {
            0% { 
              transform: scale(0); 
              opacity: 0; 
            }
            50% {
              opacity: 1;
            }
            100% { 
              transform: scale(1.5); 
              opacity: 0; 
            }
          }
        `}
      </style>
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className={cn('absolute', heart.color)}
          style={{
            ...heart.style,
            width: '2rem',
            height: '2rem',
            fill: 'currentColor',
          }}
        />
      ))}
    </div>
  );
}
