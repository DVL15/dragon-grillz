'use client'

import { useState } from 'react'

interface ToothDef {
  id: string
  label: string
  x: number
  y: number
  w: number
  h: number
}

const UPPER: ToothDef[] = [
  { id: 'ul_premolar', label: 'Prémolaire G sup.',   x: 113, y: 100, w: 34, h: 40 },
  { id: 'ul_canine',   label: 'Canine G sup.',        x: 153, y: 86,  w: 30, h: 54 },
  { id: 'ul_lateral',  label: 'Latérale G sup.',      x: 189, y: 80,  w: 36, h: 60 },
  { id: 'ul_central',  label: 'Centrale G sup.',      x: 231, y: 72,  w: 46, h: 68 },
  { id: 'ur_central',  label: 'Centrale D sup.',      x: 283, y: 72,  w: 46, h: 68 },
  { id: 'ur_lateral',  label: 'Latérale D sup.',      x: 335, y: 80,  w: 36, h: 60 },
  { id: 'ur_canine',   label: 'Canine D sup.',        x: 377, y: 86,  w: 30, h: 54 },
  { id: 'ur_premolar', label: 'Prémolaire D sup.',    x: 413, y: 100, w: 34, h: 40 },
]

const LOWER: ToothDef[] = [
  { id: 'll_premolar', label: 'Prémolaire G inf.',   x: 113, y: 165, w: 34, h: 40 },
  { id: 'll_canine',   label: 'Canine G inf.',        x: 153, y: 165, w: 30, h: 54 },
  { id: 'll_lateral',  label: 'Latérale G inf.',      x: 189, y: 165, w: 36, h: 60 },
  { id: 'll_central',  label: 'Centrale G inf.',      x: 231, y: 165, w: 46, h: 68 },
  { id: 'lr_central',  label: 'Centrale D inf.',      x: 283, y: 165, w: 46, h: 68 },
  { id: 'lr_lateral',  label: 'Latérale D inf.',      x: 335, y: 165, w: 36, h: 60 },
  { id: 'lr_canine',   label: 'Canine D inf.',        x: 377, y: 165, w: 30, h: 54 },
  { id: 'lr_premolar', label: 'Prémolaire D inf.',    x: 413, y: 165, w: 34, h: 40 },
]

const ALL = [...UPPER, ...LOWER]

export default function ToothSelector({
  selected,
  onToggle,
}: {
  selected: string[]
  onToggle: (id: string) => void
}) {
  const [hovered, setHovered] = useState<string | null>(null)

  const fill = (id: string) =>
    selected.includes(id) ? '#C8A84B' : hovered === id ? '#f0ebd8' : '#e8e2cc'

  const stroke = (id: string) =>
    selected.includes(id) ? '#E8C96B' : hovered === id ? '#C8A84B' : '#a89e88'

  const hoveredTooth = hovered ? ALL.find((t) => t.id === hovered) : null

  return (
    <div>
      <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-4 text-center">
        Clique sur les dents souhaitées — plusieurs sélections possibles
      </p>

      <svg
        viewBox="0 0 560 276"
        className="w-full max-w-md mx-auto block"
        style={{ userSelect: 'none', touchAction: 'manipulation' }}
        aria-label="Sélecteur de dents"
      >
        {/* Fond sombre */}
        <rect width="560" height="276" fill="#070707" rx="14" />

        {/* Cavité buccale */}
        <ellipse cx="280" cy="148" rx="224" ry="110" fill="#170305" />

        {/* Langue */}
        <ellipse cx="280" cy="192" rx="108" ry="36" fill="#621a28" opacity="0.85" />
        <ellipse cx="280" cy="186" rx="80" ry="22" fill="#7a2235" opacity="0.5" />

        {/* Dents inférieures */}
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
              rx={3}
              fill={fill(t.id)}
              stroke={stroke(t.id)}
              strokeWidth="1.5"
            />
            {selected.includes(t.id) && (
              <rect
                x={t.x + 5} y={t.y + t.h - 13}
                width={t.w - 10} height={5}
                rx={2} fill="#fff" opacity="0.22"
              />
            )}
          </g>
        ))}

        {/* Dents supérieures */}
        {UPPER.map((t) => (
          <g
            key={t.id}
            onClick={() => onToggle(t.id)}
            onMouseEnter={() => setHovered(t.id)}
            onMouseLeave={() => setHovered(null)}
            style={{ cursor: 'pointer' }}
          >
            <rect
              x={t.x} y={t.y} width={t.w} height={t.h}
              rx={3}
              fill={fill(t.id)}
              stroke={stroke(t.id)}
              strokeWidth="1.5"
            />
            {selected.includes(t.id) && (
              <rect
                x={t.x + 5} y={t.y + 5}
                width={t.w - 10} height={5}
                rx={2} fill="#fff" opacity="0.22"
              />
            )}
          </g>
        ))}

        {/* Gencive supérieure (cache les racines) */}
        <path d="M 55,38 Q 280,14 505,38 L 505,108 Q 280,84 55,108 Z" fill="#621a28" />
        <path d="M 55,108 Q 280,84 505,108" fill="none" stroke="#9a3048" strokeWidth="1.5" opacity="0.7" />

        {/* Gencive inférieure (cache les racines) */}
        <path d="M 55,196 Q 280,216 505,196 L 505,258 Q 280,274 55,258 Z" fill="#621a28" />
        <path d="M 55,196 Q 280,216 505,196" fill="none" stroke="#9a3048" strokeWidth="1.5" opacity="0.7" />

        {/* Bordure de bouche */}
        <ellipse cx="280" cy="148" rx="224" ry="110" fill="none" stroke="#200810" strokeWidth="6" />

        {/* Lèvre du milieu (ligne de fermeture) */}
        <line x1="55" y1="148" x2="505" y2="148" stroke="#0e0205" strokeWidth="2" opacity="0.6" />

        {/* Label dent survolée */}
        {hoveredTooth && (
          <text
            x="280" y="270"
            textAnchor="middle"
            fill="#C8A84B"
            fontSize="11"
            fontFamily="system-ui, sans-serif"
            letterSpacing="1"
          >
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
                className="text-[10px] tracking-wider uppercase bg-[#C8A84B]/10 border border-[#C8A84B]/30 text-[#C8A84B] px-3 py-1 hover:bg-[#C8A84B]/20 transition-colors"
              >
                {tooth.label} ×
              </button>
            ) : null
          })}
        </div>
      )}

      {selected.length === 0 && (
        <p className="text-white/20 text-[10px] text-center mt-3 tracking-wider">
          Aucune dent sélectionnée
        </p>
      )}
    </div>
  )
}
