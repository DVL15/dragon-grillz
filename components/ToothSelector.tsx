'use client'

import { useState } from 'react'

interface ToothDef {
  id: string
  label: string
  x: number
  y: number
  w: number
  h: number
  fang?: boolean
}

// Tous les lower teeth ont le top à y=192
const UPPER: ToothDef[] = [
  { id: 'ul_premolar', label: 'Prémolaire G sup.',   x: 115, y: 137, w: 34, h: 46 },
  { id: 'ul_canine',   label: 'Canine G sup.',        x: 154, y: 107, w: 32, h: 76, fang: true },
  { id: 'ul_lateral',  label: 'Latérale G sup.',      x: 191, y: 119, w: 36, h: 64 },
  { id: 'ul_central',  label: 'Centrale G sup.',      x: 232, y: 111, w: 46, h: 72 },
  { id: 'ur_central',  label: 'Centrale D sup.',      x: 283, y: 111, w: 46, h: 72 },
  { id: 'ur_lateral',  label: 'Latérale D sup.',      x: 334, y: 119, w: 36, h: 64 },
  { id: 'ur_canine',   label: 'Canine D sup.',        x: 375, y: 107, w: 32, h: 76, fang: true },
  { id: 'ur_premolar', label: 'Prémolaire D sup.',    x: 412, y: 137, w: 34, h: 46 },
]

const LOWER: ToothDef[] = [
  { id: 'll_premolar', label: 'Prémolaire G inf.',   x: 115, y: 192, w: 34, h: 45 },
  { id: 'll_canine',   label: 'Canine G inf.',        x: 154, y: 192, w: 32, h: 58 },
  { id: 'll_lateral',  label: 'Latérale G inf.',      x: 191, y: 192, w: 36, h: 55 },
  { id: 'll_central',  label: 'Centrale G inf.',      x: 232, y: 192, w: 46, h: 62 },
  { id: 'lr_central',  label: 'Centrale D inf.',      x: 283, y: 192, w: 46, h: 62 },
  { id: 'lr_lateral',  label: 'Latérale D inf.',      x: 334, y: 192, w: 36, h: 55 },
  { id: 'lr_canine',   label: 'Canine D inf.',        x: 375, y: 192, w: 32, h: 58 },
  { id: 'lr_premolar', label: 'Prémolaire D inf.',    x: 412, y: 192, w: 34, h: 45 },
]

const ALL = [...UPPER, ...LOWER]

function fangPath(x: number, y: number, w: number, h: number): string {
  const cx = x + w / 2
  return `M ${x},${y} L ${x + w},${y} L ${x + w},${y + h - 12} L ${cx},${y + h + 10} L ${x},${y + h - 12} Z`
}

export default function ToothSelector({
  selected,
  onToggle,
}: {
  selected: string[]
  onToggle: (id: string) => void
}) {
  const [hovered, setHovered] = useState<string | null>(null)

  const fill = (id: string) =>
    selected.includes(id) ? '#4a5568' : hovered === id ? '#fffcf0' : '#f2ede0'

  const stroke = (id: string) =>
    selected.includes(id) ? '#6b7d94' : hovered === id ? '#b0bcc8' : '#c8bfa8'

  const hoveredTooth = hovered ? ALL.find((t) => t.id === hovered) : null

  return (
    <div>
      <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-5 text-center">
        Clique sur les dents souhaitées — plusieurs sélections possibles
      </p>

      <svg
        viewBox="0 0 560 312"
        className="w-full max-w-md mx-auto block"
        style={{ userSelect: 'none', touchAction: 'manipulation' }}
        aria-label="Sélecteur de dents"
      >
        {/* Fond SVG */}
        <rect width="560" height="312" fill="#050505" rx="18" />

        {/* Ombre extérieure bouche */}
        <ellipse cx="280" cy="192" rx="228" ry="135" fill="#0e0205" />

        {/* Intérieur bouche */}
        <ellipse cx="280" cy="196" rx="210" ry="115" fill="#1e0308" />

        {/* Tongue */}
        <ellipse cx="280" cy="252" rx="108" ry="42" fill="#7a1525" opacity="0.95" />
        <ellipse cx="272" cy="246" rx="72" ry="24" fill="#9a1e32" opacity="0.45" />

        {/* ── Dents inférieures (derrière lèvre inf) ── */}
        {LOWER.map((t) => (
          <g
            key={t.id}
            onClick={() => onToggle(t.id)}
            onMouseEnter={() => setHovered(t.id)}
            onMouseLeave={() => setHovered(null)}
            style={{ cursor: 'pointer' }}
          >
            <rect
              x={t.x} y={t.y} width={t.w} height={t.h}
              rx={5}
              fill={fill(t.id)}
              stroke={stroke(t.id)}
              strokeWidth="1.5"
            />
            {selected.includes(t.id) && (
              <rect x={t.x + 5} y={t.y + 5} width={t.w - 10} height={4} rx={2} fill="#fff" opacity="0.2" />
            )}
          </g>
        ))}

        {/* ── Dents supérieures (derrière lèvre sup) ── */}
        {UPPER.map((t) => (
          <g
            key={t.id}
            onClick={() => onToggle(t.id)}
            onMouseEnter={() => setHovered(t.id)}
            onMouseLeave={() => setHovered(null)}
            style={{ cursor: 'pointer' }}
          >
            {t.fang ? (
              <path
                d={fangPath(t.x, t.y, t.w, t.h)}
                fill={fill(t.id)}
                stroke={stroke(t.id)}
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            ) : (
              <rect
                x={t.x} y={t.y} width={t.w} height={t.h}
                rx={5}
                fill={fill(t.id)}
                stroke={stroke(t.id)}
                strokeWidth="1.5"
              />
            )}
            {selected.includes(t.id) && (
              <rect x={t.x + 5} y={t.y + t.h - 12} width={t.w - 10} height={4} rx={2} fill="#fff" opacity="0.2" />
            )}
          </g>
        ))}

        {/* ══ LÈVRE SUPÉRIEURE ══ */}
        {/* Remplit depuis le haut jusqu'au bord d'ouverture */}
        <path
          d="M 72,136 C 55,115 62,48 160,40 C 208,36 250,82 280,70 C 310,58 352,36 400,40 C 498,48 505,115 488,136 C 420,128 350,118 280,120 C 210,122 140,128 72,136 Z"
          fill="#cc1a2e"
        />
        {/* Bord extérieur lèvre sup — contour noir */}
        <path
          d="M 72,136 C 55,115 62,48 160,40 C 208,36 250,82 280,70 C 310,58 352,36 400,40 C 498,48 505,115 488,136"
          fill="none"
          stroke="#180006"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Séparation des lèvres */}
        <path
          d="M 72,136 C 140,128 210,122 280,120 C 350,118 420,128 488,136"
          fill="none"
          stroke="#880010"
          strokeWidth="2"
          opacity="0.5"
        />
        {/* Reflet cupid's bow */}
        <path
          d="M 175,70 C 215,60 248,78 280,68 C 312,58 345,60 385,70"
          fill="none"
          stroke="#ff3d55"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.28"
        />

        {/* ══ LÈVRE INFÉRIEURE ══ */}
        <path
          d="M 72,238 C 140,244 210,250 280,250 C 350,250 420,244 488,238 C 500,262 494,296 412,305 C 362,310 320,312 280,312 C 240,312 198,310 148,305 C 66,296 60,262 72,238 Z"
          fill="#cc1a2e"
        />
        {/* Contour extérieur lèvre inf */}
        <path
          d="M 72,238 C 60,262 66,296 148,305 C 198,310 240,312 280,312 C 320,312 362,310 412,305 C 494,296 500,262 488,238"
          fill="none"
          stroke="#180006"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Bord ouverture lèvre inf */}
        <path
          d="M 72,238 C 140,244 210,250 280,250 C 350,250 420,244 488,238"
          fill="none"
          stroke="#880010"
          strokeWidth="2"
          opacity="0.5"
        />
        {/* Reflet lèvre inf */}
        <path
          d="M 162,264 C 200,260 240,258 280,258 C 320,258 360,260 398,264"
          fill="none"
          stroke="#ff3d55"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.22"
        />

        {/* Coins de bouche */}
        <ellipse cx="72" cy="138" rx="8" ry="5" fill="#990010" />
        <ellipse cx="488" cy="138" rx="8" ry="5" fill="#990010" />

        {/* Contour silhouette global */}
        <ellipse cx="280" cy="176" rx="220" ry="138" fill="none" stroke="#0a0005" strokeWidth="6" />

        {/* Label dent survolée */}
        {hoveredTooth && (
          <text x="280" y="307" textAnchor="middle" fill="#a8b4c0" fontSize="11" fontFamily="system-ui, sans-serif" letterSpacing="1">
            {hoveredTooth.label}
          </text>
        )}
      </svg>

      {/* Tags dents sélectionnées */}
      {selected.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {selected.map((id) => {
            const tooth = ALL.find((t) => t.id === id)
            return tooth ? (
              <button
                key={id}
                type="button"
                onClick={() => onToggle(id)}
                className="text-[10px] tracking-wider uppercase bg-white/5 border border-white/20 text-white/60 px-3 py-1 hover:bg-white/10 transition-colors"
              >
                {tooth.label} ×
              </button>
            ) : null
          })}
        </div>
      )}

      {selected.length === 0 && (
        <p className="text-white/15 text-[10px] text-center mt-3 tracking-wider">
          Aucune dent sélectionnée
        </p>
      )}
    </div>
  )
}
