'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Memory {
  id: number;
  alt: string;
  'data-ai-hint': string;
  message: string;
}

interface MemoryTileProps {
  memory: Memory;
}

export function MemoryTile({ memory }: MemoryTileProps) {
  // Direct path to public folder (public/photos/imageX.jpeg)
  const imageSrc = `/photos/image${memory.id}.jpeg`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer">
          <img
            src={imageSrc}
            alt={memory.alt}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={memory['data-ai-hint']}
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-2xl bg-background/90 backdrop-blur-md p-2 sm:p-4">
        <div className="relative aspect-video w-full flex items-center justify-center">
          <img
            src={imageSrc}
            alt={memory.alt}
            className="max-h-full max-w-full rounded-lg"
            data-ai-hint={memory['data-ai-hint']}
          />
        </div>
        <DialogHeader className="p-4 pt-2">
          <DialogTitle className="sr-only">Memory</DialogTitle>
          <DialogDescription asChild>
            <p className="text-center text-muted-foreground text-lg font-body">
              {memory.message}
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
