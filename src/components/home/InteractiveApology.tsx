'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Heart, ThumbsDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function InteractiveApology() {
  const router = useRouter();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleYesClick = () => {
    router.push('/memories');
  };

  const moveButton = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const buttonRect = noButtonRef.current.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPosition({ x: newX, y: newY });
  };
  
  useEffect(() => {
    if(isClient) {
      // Set an initial position for the 'No' button so it's not overlapping the 'Yes' button
       if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        setNoButtonPosition({ x: containerRect.width / 4, y: 0 });
       }
    }
  }, [isClient]);

  return (
    <section className="w-full max-w-lg text-center mt-12 py-12">
      <h2 className="text-2xl md:text-3xl font-bold">
        Question?
      </h2>
      <p className="text-muted-foreground mt-2">(I dare you to try clicking 'no')</p>
      <div
        ref={containerRef}
        className="mt-8 relative h-64 flex items-center justify-center gap-4"
      >
        <Button
          onClick={handleYesClick}
          size="lg"
          className="w-36 transition-transform hover:scale-110 z-10 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-xl"
        >
          <Heart className="mr-2 fill-white" /> Yes!
        </Button>
        {isClient && (
            <motion.div
                className="absolute"
                animate={noButtonPosition}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                onHoverStart={moveButton}
                onClick={moveButton}
            >
                <Button
                    ref={noButtonRef}
                    variant="destructive"
                    size="lg"
                    className="w-36 shake-on-hover"
                >
                    <ThumbsDown className="mr-2" /> No
                </Button>
            </motion.div>
        )}
      </div>
    </section>
  );
}
