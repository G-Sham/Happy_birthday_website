'use client';

import { useState, useEffect } from 'react';
import { Star, Heart, Gift, Sparkles, Gem, Music } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { floatingElementCompliments, specialCompliments } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface FloatingElement {
  id: number;
  style: React.CSSProperties;
  compliment: string;
  icon: React.ElementType;
  color: string;
}

const icons = [Heart, Star, Gift, Sparkles, Gem, Music];
const allCompliments = [...floatingElementCompliments, ...specialCompliments];

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const regularElements = floatingElementCompliments.map((compliment, i) => ({
        id: i,
        style: {
          top: `${Math.random() * 90}%`,
          left: `${Math.random() * 90}%`,
          animation: `move-orb ${
            15 + Math.random() * 10
          }s infinite alternate ${Math.random() * -15}s`,
        },
        compliment,
        icon: icons[i % icons.length],
        color: 'text-accent fill-accent',
      }));

      const specialElements = specialCompliments.map((compliment, i) => ({
        id: floatingElementCompliments.length + i,
        style: {
          top: `${Math.random() * 90}%`,
          left: `${Math.random() * 90}%`,
          animation: `move-orb ${
            15 + Math.random() * 10
          }s infinite alternate ${Math.random() * -15}s`,
        },
        compliment,
        icon: Heart,
        color: 'text-red-500 fill-red-500',
      }));

      setElements([...regularElements, ...specialElements]);
    }
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-30">
      <TooltipProvider>
        {elements.map((el) => (
          <Tooltip key={el.id}>
            <TooltipTrigger asChild>
              <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
                style={el.style}
              >
                <el.icon className={cn('w-8 h-8 animate-pulse', el.color)} />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{el.compliment}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}
