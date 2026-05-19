const quadrants = [
   {
      id: 'oekologisch',
      label: 'Ökologisch',
      score: 3,
      color: '#15803d',
      x: 100,
      y: 100,
   },
   {
      id: 'oekonomisch',
      label: 'Ökonomisch',
      score: 4,
      color: '#1d4ed8',
      x: 300,
      y: 100,
   },
   {
      id: 'sozial',
      label: 'Sozial',
      score: 2,
      color: '#b45309',
      x: 100,
      y: 300,
   },
   {
      id: 'politisch',
      label: 'Politisch-Institutionell',
      score: 3,
      color: '#7c3aed',
      x: 300,
      y: 300,
   },
]

export default function SustainabilitySquare() {
   return (
      <div className="my-8">
         <div className="max-w-md mx-auto border-2 border-stone-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <svg
               viewBox="0 0 400 400"
               className="w-full h-full"
               aria-label="Viereck der Nachhaltigkeit"
            >
               {/* Trennlinien */}
               <line
                  x1="200"
                  y1="0"
                  x2="200"
                  y2="400"
                  stroke="#e7e5e4"
                  strokeWidth="2"
               />
               <line
                  x1="0"
                  y1="200"
                  x2="400"
                  y2="200"
                  stroke="#e7e5e4"
                  strokeWidth="2"
               />

               {/* Mittel-Label */}
               <text
                  x="200"
                  y="194"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#a8a29e"
                  fontFamily="sans-serif"
               >
                  Atomenergie
               </text>

               {quadrants.map((q) => (
                  <g key={q.id}>
                     <text
                        x={q.x}
                        y={q.y - 40}
                        textAnchor="middle"
                        fontSize="11"
                        fontWeight="600"
                        fill={q.color}
                        fontFamily="sans-serif"
                     >
                        {q.label}
                     </text>

                     {/* Punkte-Skala (5 Punkte) */}
                     {Array.from({ length: 5 }).map((_, i) => (
                        <circle
                           key={i}
                           cx={q.x - 30 + i * 15}
                           cy={q.y - 20}
                           r={5}
                           fill={i < q.score ? q.color : '#e7e5e4'}
                        />
                     ))}

                     <text
                        x={q.x}
                        y={q.y}
                        textAnchor="middle"
                        fontSize="8"
                        fill="#a8a29e"
                        fontFamily="sans-serif"
                        fontStyle="italic"
                     >
                        TODO: Begründung
                     </text>
                  </g>
               ))}
            </svg>
         </div>
         <p className="text-sm text-stone-500 text-center mt-3">
            Viereck der Nachhaltigkeit – Platzhalterbewertung (● = 1–5 Punkte je
            Dimension)
         </p>
         <p className="text-xs text-stone-400 text-center mt-1">
            TODO: Endgültige Bewertung und Begründung nach Teamdiskussion
            eintragen
         </p>
      </div>
   )
}
