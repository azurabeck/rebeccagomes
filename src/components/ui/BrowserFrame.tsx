import type { ReactNode } from 'react';

/** Minimal browser chrome around a screenshot. */
export function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-lift transition motion-safe:group-hover:-translate-y-1">
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <div aria-hidden="true" className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </div>
        <p className="min-w-0 flex-1 truncate rounded-full bg-bg px-3 py-1 text-xs text-muted">
          {url}
        </p>
      </div>
      {children}
    </div>
  );
}
