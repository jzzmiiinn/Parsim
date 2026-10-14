/** Parsim mark — stacked orange squares from the brand lockup */
export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  const gap = 1.2;
  const size = 5.2;
  const rows = [
    { count: 4, y: 1 },
    { count: 3, y: 1 + size + gap },
    { count: 2, y: 1 + 2 * (size + gap) },
  ];

  return (
    <svg
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {rows.map((row) => {
        const rowWidth = row.count * size + (row.count - 1) * gap;
        const startX = (28 - rowWidth) / 2;
        return Array.from({ length: row.count }).map((_, i) => (
          <rect
            key={`${row.count}-${i}`}
            x={startX + i * (size + gap)}
            y={row.y}
            width={size}
            height={size}
            rx={0.6}
            className="fill-orange-500"
          />
        ));
      })}
    </svg>
  );
}
