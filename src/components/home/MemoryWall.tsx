'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import { memoryWallContent } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function MemoryWall() {
  const [selectedContent, setSelectedContent] = useState('');
  const [clickedTiles, setClickedTiles] = useState<Set<number>>(new Set());

  const handleTileClick = (content: string, index: number) => {
    setSelectedContent(content);
    setClickedTiles((prev) => new Set(prev).add(index));
  };

  return (
    <section className="w-full max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-8">A Few Reminders</h2>
      <Dialog>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {memoryWallContent.map((content, index) => (
            <DialogTrigger key={index} asChild>
              <Card
                className="aspect-square flex items-center justify-center p-4 text-center cursor-pointer hover:shadow-accent/50 hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm bg-card/60"
                onClick={() => handleTileClick(content, index)}
              >
                <Heart
                  className={cn(
                    'w-8 h-8 text-primary/70 transition-all',
                    clickedTiles.has(index) && 'fill-primary/70'
                  )}
                />
              </Card>
            </DialogTrigger>
          ))}
        </div>
        <DialogContent className="sm:max-w-[425px] bg-background/90 backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-headline">Just wanted to say...</DialogTitle>
            <DialogDescription asChild>
                <p className="text-center text-muted-foreground text-lg py-4 font-body">
                {selectedContent}
                </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}