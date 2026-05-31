import type { CSSProperties } from 'react'

type Quadrant = {
   id: string
   label: string
   score: number
   color: string
   tint: string
   description: string
}

const quadrants: Quadrant[] = [
   {
      id: 'oekologisch',
      label: 'Ökologisch',
      score: 3,
      color: '#15803d',
      tint: '#f0fdf4',
      description:
         'TODO: Begründung der ökologischen Dimension (CO₂-Bilanz, Endlagerung, Rohstoffabbau, Strahlung).',
   },
   {
      id: 'oekonomisch',
      label: 'Ökonomisch',
      score: 4,
      color: '#1d4ed8',
      tint: '#eff6ff',
      description:
         'TODO: Begründung der ökonomischen Dimension (Bau- und Rückbaukosten, Stromgestehungskosten, Subventionen).',
   },
   {
      id: 'sozial',
      label: 'Sozial',
      score: 2,
      color: '#b45309',
      tint: '#fffbeb',
      description:
         'TODO: Begründung der sozialen Dimension (Akzeptanz, Sicherheitsrisiken, Verteilungsgerechtigkeit der Lasten).',
   },
   {
      id: 'politisch',
      label: 'Politisch-Institutionell',
      score: 3,
      color: '#7c3aed',
      tint: '#f5f3ff',
      description:
         'TODO: Begründung der politisch-institutionellen Dimension (Regulierung, fehlendes Endlager, internationale Konflikte).',
   },
]

export default function SustainabilitySquare() {
   return (
      <figure className="my-10">
         <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {quadrants.map((q) => (
               <div
                  key={q.id}
                  className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-200/60"
                  style={{ '--accent': q.color } as CSSProperties}
               >
                  {/* Dezenter Farbschimmer beim Hovern */}
                  <div
                     className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                     style={{
                        background: `radial-gradient(130% 130% at 100% 0%, ${q.tint}, transparent 55%)`,
                     }}
                  />
                  {/* Akzentleiste, die beim Hovern hereinwächst */}
                  <span
                     className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                     style={{ background: q.color }}
                  />

                  <div className="relative">
                     <div className="flex items-baseline justify-between gap-3">
                        <h3
                           className="font-serif text-lg tracking-tight transition-colors duration-300"
                           style={{ color: q.color }}
                        >
                           {q.label}
                        </h3>
                        <span className="text-sm font-medium tabular-nums text-stone-400">
                           {q.score}
                           <span className="text-stone-300">/5</span>
                        </span>
                     </div>

                     {/* Sternebewertung mit gestaffelter Hover-Animation */}
                     <div className="mt-4 flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => {
                           const filled = i < q.score
                           return (
                              <svg
                                 key={i}
                                 viewBox="0 0 24 24"
                                 className={`h-4 w-4 transition-transform duration-300 ease-out ${
                                    filled ? 'group-hover:scale-125' : ''
                                 }`}
                                 style={{
                                    fill: filled ? q.color : '#e7e5e4',
                                    transitionDelay: `${i * 50}ms`,
                                 }}
                                 aria-hidden="true"
                              >
                                 <path d="M12 2.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L12 16.77l-5.2 2.75.99-5.8-4.21-4.1 5.82-.85z" />
                              </svg>
                           )
                        })}
                     </div>

                     <p className="mt-4 text-sm leading-relaxed text-stone-500">
                        {q.description}
                     </p>
                  </div>
               </div>
            ))}
         </div>

         <figcaption className="mt-5 text-center text-sm text-stone-500">
            Viereck der Nachhaltigkeit – Platzhalterbewertung (★ = 1–5 Punkte je
            Dimension)
         </figcaption>
         <p className="mt-1 text-center text-xs text-stone-400">
            TODO: Endgültige Bewertung und Begründung nach Teamdiskussion
            eintragen
         </p>
      </figure>
   )
}
