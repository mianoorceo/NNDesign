const LAYERS = [
  { x: 40, ys: [60, 150, 240, 330] },
  { x: 210, ys: [30, 110, 190, 270, 350] },
  { x: 380, ys: [90, 190, 290] },
];

export default function NeuralGraphic({ className }: { className?: string }) {
  const lines: { x1: number; y1: number; x2: number; y2: number; k: string }[] = [];
  for (let l = 0; l < LAYERS.length - 1; l++) {
    const a = LAYERS[l];
    const b = LAYERS[l + 1];
    a.ys.forEach((y1, i) => {
      b.ys.forEach((y2, j) => {
        lines.push({ x1: a.x, y1, x2: b.x, y2, k: `${l}-${i}-${j}` });
      });
    });
  }

  return (
    <svg
      viewBox="0 0 420 360"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="var(--accent)" strokeOpacity="0.16" strokeWidth="1" fill="none">
        {lines.map((ln) => (
          <line key={ln.k} x1={ln.x1} y1={ln.y1} x2={ln.x2} y2={ln.y2} />
        ))}
      </g>
      {LAYERS.map((layer, li) => (
        <g key={li}>
          {layer.ys.map((y, i) => (
            <circle
              key={i}
              cx={layer.x}
              cy={y}
              r={li === 1 ? 7 : 6}
              fill={li === 1 ? "var(--thesis)" : "var(--accent)"}
              fillOpacity={li === 1 ? 0.85 : 0.65}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
