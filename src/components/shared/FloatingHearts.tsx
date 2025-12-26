'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingHeart {
  id: number;
  style: React.CSSProperties;
  size: string;
  color: string;
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setHearts(
        Array.from({ length: 40 }).map((_, i) => ({
          id: i,
          style: {
            left: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 10}s ease-in-out ${
              Math.random() * 5
            }s infinite`,
          },
          size: `${0.75 + Math.random()}rem`,
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
          @keyframes float {
            0% { 
              transform: translateY(110vh) rotate(0deg); 
              opacity: 1; 
            }
            100% { 
              transform: translateY(-20vh) rotate(720deg); 
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
            width: heart.size,
            height: heart.size,
            fill: 'currentColor',
          }}
        />
      ))}
    </div>
  );
}
