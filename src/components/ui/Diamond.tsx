import { cn } from '@/lib/cn';

export type Accent = 'red' | 'blue' | 'yellow' | 'pink';

const fill: Record<Accent, string> = {
  red: 'fill-accent-red',
  blue: 'fill-accent-blue',
  yellow: 'fill-accent-yellow',
  pink: 'fill-accent-pink',
};

type DiamondProps = {
  accent: Accent;
  className?: string;
};

/** The site's signature shape. Purely decorative, so hidden from assistive tech. */
export function Diamond({ accent, className }: DiamondProps) {
  return (
    <svg
      viewBox="0 0 10 10"
      aria-hidden="true"
      className={cn('size-2.5 shrink-0', fill[accent], className)}
    >
      <path d="M5 0 10 5 5 10 0 5Z" />
    </svg>
  );
}
