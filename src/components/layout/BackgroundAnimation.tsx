'use client';

import { useMemo } from 'react';

export function BackgroundAnimation() {
  const orbs = useMemo(() => {
    return [
      {
        color: 'bg-primary/30',
        size: 'w-64 h-64',
        position: 'top-1/4 left-1/4',
        translate: '-translate-x-1/2 -translate-y-1/2',
        delay: 'animation-delay-0',
      },
      {
        color: 'bg-accent/30',
        size: 'w-80 h-80',
        position: 'top-1/2 right-1/4',
        translate: 'translate-x-[20vw] translate-y-[10vh]',
        delay: 'animation-delay-[-5s]',
      },
      {
        color: 'bg-secondary/30',
        size: 'w-72 h-72',
        position: 'bottom-0 left-1/2',
        translate: 'translate-x-[-30vw] translate-y-[-20vh]',
        delay: 'animation-delay-[-10s]',
      },
    ];
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`orb absolute rounded-full ${orb.color} ${orb.size} ${orb.position} ${orb.delay} blur-3xl`}
          style={{
            '--tw-translate-x': orb.translate.split(' ')[0],
            '--tw-translate-y': orb.translate.split(' ')[1],
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
