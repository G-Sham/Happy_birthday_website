
import { PoppingHearts } from '@/components/shared/PoppingHearts';
import { MemoryTile } from '@/components/memories/MemoryTile';
import { Card } from '@/components/ui/card';

const newMessages = [
  "Message 1",
  "Message 2",
  "Message 3",
  "Message 4",
  "Message 5",
  "Message 6",
  "Message 7",
  "Message 8",
  "Message 9",
  "Message 10",
  "Message 11",
  "Message 12",
  "Message 13",
  "Message 14",
  "Message 15",
  "Message 16",
  "Message 17",
  "Message 18",
  "Message 19",
  "Message 20",
  "Message 21",
  "Message 22",
  "Message 23",
  "Message 24"
];

const memories = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  src: `/photos/image${i}.jpeg`,
  alt: `Memory ${i}`,
  'data-ai-hint': 'cherished moment',
  message: newMessages[i],
}));

export default function MemoriesPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden">
      <PoppingHearts />
      <main className="container mx-auto px-4 py-8 md:py-12 z-10 relative">
        <Card className="mb-12 text-center backdrop-blur-sm bg-card/80 p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">A Special Message For You</h2>
          <div className="flex justify-center">
            <audio controls className="w-full max-w-md">
              <source src="/audio/your-recording.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </Card>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Pictures
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            A collection of moments that I'll cherish forever. Click on a memory!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {memories.map((memory) => (
            <MemoryTile key={memory.id} memory={memory} />
          ))}
        </div>
      </main>
    </div>
  );
}
