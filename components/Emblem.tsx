// Original hero emblem: a "queen's seal" — rotating lettered ring, four suits, crowned Q.

const ticks = Array.from({ length: 72 }, (_, i) => i * 5);
const rays = Array.from({ length: 16 }, (_, i) => i * 22.5);
const suits = [
  { glyph: "♠", angle: 0, color: "var(--champagne)" },
  { glyph: "♥", angle: 90, color: "var(--rose)" },
  { glyph: "♣", angle: 180, color: "var(--champagne)" },
  { glyph: "♦", angle: 270, color: "var(--rose)" },
];

export function Emblem({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="em-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#4a1d3a" stopOpacity="0.85" />
          <stop offset="0.6" stopColor="#24152c" stopOpacity="0.4" />
          <stop offset="1" stopColor="#110a15" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="em-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6e3d0" />
          <stop offset="0.5" stopColor="#e2bfa0" />
          <stop offset="1" stopColor="#a87a5d" />
        </linearGradient>
        <path id="em-text-ring" d="M300,300 m-246,0 a246,246 0 1,1 492,0 a246,246 0 1,1 -492,0" />
      </defs>

      <circle cx="300" cy="300" r="300" fill="url(#em-glow)" />

      {/* rotating outer ring */}
      <g className="animate-spin-slow">
        <circle cx="300" cy="300" r="282" fill="none" stroke="var(--line-gold)" />
        {ticks.map((a) => (
          <line
            key={a}
            x1="300" y1="22" x2="300" y2={a % 45 === 0 ? 40 : 30}
            stroke="var(--champagne)" strokeOpacity={a % 45 === 0 ? 0.8 : 0.35}
            transform={`rotate(${a} 300 300)`}
          />
        ))}
        <text fill="var(--champagne)" fontSize="15" letterSpacing="7.4" style={{ fontFamily: "var(--font-monument)" }}>
          <textPath href="#em-text-ring">
            WOMEN IN POKER · LEARN · PLAY · GROW · TOGETHER · WOMEN IN POKER · LEARN · PLAY · GROW · TOGETHER ·
          </textPath>
        </text>
      </g>

      <circle cx="300" cy="300" r="226" fill="none" stroke="var(--line-gold)" />
      <circle cx="300" cy="300" r="218" fill="none" stroke="var(--champagne)" strokeOpacity="0.18" />

      {rays.map((a) => (
        <line key={a} x1="300" y1="92" x2="300" y2="152" stroke="var(--champagne)" strokeOpacity="0.22"
          transform={`rotate(${a + 11.25} 300 300)`} />
      ))}

      {suits.map((s) => {
        const rad = ((s.angle - 90) * Math.PI) / 180;
        const x = 300 + Math.cos(rad) * 186;
        const y = 300 + Math.sin(rad) * 186;
        return (
          <g key={s.glyph}>
            <circle cx={x} cy={y} r="24" fill="var(--night)" stroke="var(--line-gold)" />
            <text x={x} y={y + 10} textAnchor="middle" fontSize="28" fill={s.color} style={{ fontFamily: "Georgia, serif" }}>
              {s.glyph}
            </text>
          </g>
        );
      })}

      <circle cx="300" cy="300" r="148" fill="var(--plum)" fillOpacity="0.75" stroke="url(#em-gold)" strokeWidth="1.5" />
      <circle cx="300" cy="300" r="138" fill="none" stroke="var(--champagne)" strokeOpacity="0.25" />

      {/* crown */}
      <path
        d="M252 232 L246 196 L272 216 L300 180 L328 216 L354 196 L348 232 Z"
        fill="none" stroke="url(#em-gold)" strokeWidth="2" strokeLinejoin="round"
      />
      <circle cx="246" cy="193" r="4" fill="url(#em-gold)" />
      <circle cx="300" cy="176" r="5" fill="url(#em-gold)" />
      <circle cx="354" cy="193" r="4" fill="url(#em-gold)" />
      <line x1="256" y1="242" x2="344" y2="242" stroke="url(#em-gold)" strokeWidth="1.5" />

      {/* Q */}
      <text x="300" y="378" textAnchor="middle" fontSize="170" fontStyle="italic" fontWeight="300"
        fill="url(#em-gold)" style={{ fontFamily: "var(--font-display)" }}>
        Q
      </text>
      <text x="300" y="412" textAnchor="middle" fontSize="22" fill="var(--rose)" style={{ fontFamily: "Georgia, serif" }}>
        ♥
      </text>
    </svg>
  );
}
