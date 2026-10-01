import type { ReactNode } from 'react';
import { Diamond, type Accent } from './Diamond';

export function Badge({ accent, children }: { accent: Accent; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold tracking-wide text-fg uppercase">
      <Diamond accent={accent} className="size-2" />
      {children}
    </span>
  );
}
