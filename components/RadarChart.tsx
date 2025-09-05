import { useEffect, useRef } from 'react';

type RadarChartProps = {
  size?: number;
  labels: string[];
  values: number[]; // 0..100
};

export default function RadarChart({ size = 280, labels, values }: RadarChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const numAxes = labels.length;
  const radius = size / 2 - 24;

  useEffect(() => {
    // noop; purely for hydration correctness
  }, []);

  const toPoint = (value: number, index: number) => {
    const angle = (Math.PI * 2 * index) / numAxes - Math.PI / 2;
    const r = (value / 100) * radius;
    const x = size / 2 + r * Math.cos(angle);
    const y = size / 2 + r * Math.sin(angle);
    return `${x},${y}`;
  };

  const gridPolys = [20, 40, 60, 80, 100].map(pct =>
    Array.from({ length: numAxes }, (_, i) => toPoint(pct, i)).join(' ')
  );

  const valuePoly = values.map((v, i) => toPoint(v, i)).join(' ');

  return (
    <div className="glass p-4">
      <svg ref={svgRef} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {gridPolys.map((points, idx) => (
          <polygon key={idx} points={points} fill="none" stroke="rgba(255,255,255,0.12)" />
        ))}
        {Array.from({ length: numAxes }, (_, i) => {
          const angle = (Math.PI * 2 * i) / numAxes - Math.PI / 2;
          const x = size / 2 + radius * Math.cos(angle);
          const y = size / 2 + radius * Math.sin(angle);
          return <line key={i} x1={size / 2} y1={size / 2} x2={x} y2={y} stroke="rgba(255,255,255,0.12)" />;
        })}

        <polygon points={valuePoly} fill="rgba(0,229,255,0.25)" stroke="#00E5FF" />

        {labels.map((label, i) => {
          const angle = (Math.PI * 2 * i) / numAxes - Math.PI / 2;
          const x = size / 2 + (radius + 14) * Math.cos(angle);
          const y = size / 2 + (radius + 14) * Math.sin(angle);
          return (
            <text key={label} x={x} y={y} fill="white" fontSize="10" textAnchor="middle" dominantBaseline="middle">
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}


