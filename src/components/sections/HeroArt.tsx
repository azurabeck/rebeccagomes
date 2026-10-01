'use client';

import { useId, type CSSProperties, type PointerEvent } from 'react';
import { useTranslations } from 'next-intl';
import type { Accent } from '@/components/ui/Diamond';

type Facet = {
  accent: Accent;
  /** Diamond outline in viewBox units. */
  path: string;
  /** Parallax strength; higher moves further. */
  depth: number;
};

// Painted in order, so later facets overlap earlier ones.
const facets: readonly Facet[] = [
  { accent: 'red', path: 'M215 50 345 215 215 380 85 215Z', depth: 10 },
  { accent: 'blue', path: 'M295 105 402 255 295 405 188 255Z', depth: 16 },
  { accent: 'yellow', path: 'M200 280 290 395 200 510 110 395Z', depth: 22 },
  { accent: 'pink', path: 'M120 75 180 150 120 225 60 150Z', depth: 28 },
];

const fill: Record<Accent, string> = {
  red: 'fill-accent-red',
  blue: 'fill-accent-blue',
  yellow: 'fill-accent-yellow',
  pink: 'fill-accent-pink',
};

const depth = (value: number) => ({ '--depth': value }) as CSSProperties;

/**
 * Portrait cut into overlapping diamonds, each tinted with an accent color
 * (grayscale photo + multiply = duotone). Pointer position is exposed as
 * --px / --py (-1 to 1); each `.parallax-layer` moves by its own --depth.
 * The motion itself lives in CSS so prefers-reduced-motion turns it off.
 */
export function HeroArt() {
  const t = useTranslations('hero');
  const id = useId();

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse') return;
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    target.style.setProperty('--px', x.toFixed(3));
    target.style.setProperty('--py', y.toFixed(3));
  }

  function handlePointerLeave(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty('--px', '0');
    event.currentTarget.style.setProperty('--py', '0');
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="mx-auto w-full max-w-64 sm:max-w-sm lg:max-w-none"
    >
      <svg
        viewBox="0 0 480 520"
        role="img"
        aria-label={t('artAlt')}
        className="h-auto w-full overflow-visible"
      >
        <defs>
          {facets.map((facet) => (
            <clipPath key={facet.accent} id={`${id}-${facet.accent}`}>
              <path d={facet.path} />
            </clipPath>
          ))}
        </defs>

        <circle cx="240" cy="270" r="190" className="parallax-layer fill-line" style={depth(4)} />

        {facets.map((facet) => (
          <g
            key={facet.accent}
            clipPath={`url(#${id}-${facet.accent})`}
            className="parallax-layer isolate"
            style={depth(facet.depth)}
          >
            <image
              href="/me.jpg"
              x="-57"
              y="-10"
              width="460"
              height="652"
              preserveAspectRatio="xMidYMid slice"
            />
            <path d={facet.path} className={`${fill[facet.accent]} mix-blend-multiply`} />
          </g>
        ))}

        <path
          d="M385 395 420 440 385 485 350 440Z"
          fill="none"
          strokeWidth="1.5"
          className="parallax-layer stroke-fg"
          style={depth(34)}
        />
        <path
          d="M60 330 72 345 60 360 48 345Z"
          className="parallax-layer fill-fg"
          style={depth(34)}
        />
      </svg>
    </div>
  );
}
