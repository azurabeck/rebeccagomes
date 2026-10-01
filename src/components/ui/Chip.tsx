import type { ReactNode } from 'react';

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted">
      {children}
    </span>
  );
}
