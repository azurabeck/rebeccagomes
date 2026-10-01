/** "RS" monogram inside a diamond made of four smaller accent diamonds. */
export function Logo() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className="size-10">
      <path d="M20 0 30 10 20 20 10 10Z" className="fill-accent-red" />
      <path d="M30 10 40 20 30 30 20 20Z" className="fill-accent-blue" />
      <path d="M20 20 30 30 20 40 10 30Z" className="fill-accent-yellow" />
      <path d="M10 10 20 20 10 30 0 20Z" className="fill-accent-pink" />
      <text
        x="20"
        y="24.5"
        textAnchor="middle"
        className="fill-action-fg font-display text-[12px] font-bold"
      >
        RS
      </text>
    </svg>
  );
}
