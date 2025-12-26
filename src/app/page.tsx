import { LetterDisplay } from '@/components/home/LetterDisplay';
import { InteractiveApology } from '@/components/home/InteractiveApology';
import { MemoryWall } from '@/components/home/MemoryWall';
import { FloatingElements } from '@/components/home/FloatingElements';

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full">
      <FloatingElements />
      <main className="container relative z-20 mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col items-center gap-12 lg:gap-16">
          <LetterDisplay />
          <MemoryWall />
          <InteractiveApology />
        </div>
      </main>
    </div>
  );
}
