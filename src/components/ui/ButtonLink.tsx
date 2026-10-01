import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

type ButtonLinkProps = ComponentProps<'a'> & {
  variant?: 'primary' | 'secondary';
};

const variants = {
  primary: 'bg-action text-action-fg hover:bg-action-hover',
  secondary: 'border border-fg text-fg hover:bg-fg hover:text-bg',
} as const;

export function ButtonLink({ variant = 'primary', className, ...props }: ButtonLinkProps) {
  return (
    <a
      className={cn(
        'inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition motion-safe:hover:-translate-y-0.5',
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
