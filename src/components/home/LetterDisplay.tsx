'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { letterContent } from '@/lib/constants';

export function LetterDisplay() {
  // The typing animation is disabled for performance reasons.
  // This was causing a high Total Blocking Time in Lighthouse reports.
  const [displayedText, setDisplayedText] = useState(letterContent);
  const [isTyping, setIsTyping] = useState(false);

  const handleSkipAnimation = () => {
    // This function is kept in case we want to re-enable the animation later.
    // For now, it does nothing as the animation is disabled.
    setIsTyping(false);
    setDisplayedText(letterContent);
  };

  return (
    <section className="w-full max-w-2xl text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        Happy Birthday My Bestiee
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">
        A Beautiful message for a beautiful person
      </p>

      <Card
        className="mt-8 text-left shadow-lg w-full backdrop-blur-sm bg-card/80"
        onClick={handleSkipAnimation}
      >
        <ScrollArea className="h-72 w-full rounded-md p-4">
          <div className="p-4 whitespace-pre-wrap font-body text-base">
            {displayedText}
            {isTyping && (
              <span className="inline-block h-4 w-1 animate-pulse bg-foreground ml-1" />
            )}
          </div>
        </ScrollArea>
      </Card>
    </section>
  );
}
