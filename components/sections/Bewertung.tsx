import type { CSSProperties, ReactNode } from 'react'
import SectionWrapper from '@/components/layout/SectionWrapper'
import Footnote from '@/components/content/Footnote'
import GlossaryTerm from '@/components/content/GlossaryTerm'

type Quadrant = {
   id: string
   label: string
   score: number
   color: string
   tint: string
   description: ReactNode
}

const quadrants: Quadrant[] = [
   {
      id: 'oekologisch',
      label: 'Ökologisch',
      score: 4,
      color: '#15803d',
      tint: '#f0fdf4',
      description: (
         <>
            Ökologisch ist Kernkraft eine der treibhausgasärmsten Stromquellen
            über den gesamten Lebenszyklus. Die Bundeszentrale für politische
            Bildung beziffert die Emissionen – einschließlich Bau, Uranabbau,
            Brennstoffherstellung, Rückbau und Abfalllagerung – nach
            IPCC-Angaben auf etwa 4 bis 110 g CO₂-Äquivalent pro Kilowattstunde
            mit einem Median von 12 g, während Kohlekraftwerke im Mittel rund
            820 g verursachen (bpb).
            <Footnote sourceId="Q48" />
            <br />
            <br />
            Der Wissenschaftliche Dienst des Bundestags nennt für
            Leichtwasserreaktoren einen mittleren Wert von 14,9 g
            CO₂-Äquivalente/kWh aus einer Spanne von 5,6 bis 19,7 g und verweist
            auf den auch vom Paul Scherrer Institut verwendeten IPCC-Wert von 12
            g (Deutscher Bundestag). Zum Vergleich: Der deutsche Strommix
            verursachte 2025 durchschnittlich 344 g CO₂ je Kilowattstunde
            (Umweltbundesamt) – ein Vielfaches. Hinzu kommt die hohe
            Energiedichte mit geringem Flächenbedarf.
            <Footnote sourceId="Q58" />
            <Footnote sourceId="Q59" />
            <br />
            <br />
            Einschränkend bleibt: Hochradioaktiver Abfall strahlt sehr lange,
            und die Endlagerfrage ist in Deutschland weiterhin ungelöst.
         </>
      ),
   },
   {
      id: 'oekonomisch',
      label: 'Ökonomisch',
      score: 2,
      color: '#1d4ed8',
      tint: '#eff6ff',
      description: (
         <>
            Die belegbare wirtschaftliche Stärke der Kernkraft liegt im
            zuverlässigen Grundlastbetrieb bestehender Anlagen. Frankreich deckt
            rund zwei Drittel seiner Stromerzeugung mit Kernenergie (bpb; 2024
            rund 70 %), erzeugte 2024 etwa 570 TWh und war mit rund 105 TWh
            Nettoexport größter Stromexporteur sowie zugleich Deutschlands
            wichtigster Stromlieferant (GRS; Statista/Fraunhofer ISE). Da
            Brennstoffkosten nur einen kleinen Teil der Gesamtkosten ausmachen,
            ist eine hohe Auslastung über lange Laufzeiten vorteilhaft.
            <Footnote sourceId="Q48" />
            <Footnote sourceId="Q60" />
            <Footnote sourceId="Q61" />
            <br />
            <br />
            Klar gegenzuhalten ist – und hier ist die deutsche Quellenlage
            eindeutig: Neubauten sind teuer, langwierig und mit hoher
            Kostenunsicherheit behaftet. Das DIW Berlin bewertet Atomkraft als
            unwirtschaftlich; der finnische Reaktor Olkiluoto 3 ging nach 17
            Jahren Bauzeit und einer Kostensteigerung von knapp 4 auf über 12
            Milliarden ans Netz (Heinrich-Böll-Stiftung). Laut Fraunhofer ISE
            liegen die Stromgestehungskosten neuer AKW deutlich über denen
            erneuerbarer Energien (BASE-Faktencheck).
            <Footnote sourceId="Q62" />
            <Footnote sourceId="Q63" />
            <Footnote sourceId="Q64" />
         </>
      ),
   },
   {
      id: 'sozial',
      label: 'Sozial',
      score: 4,
      color: '#b45309',
      tint: '#fffbeb',
      description: (
         <>
            Gemessen an Todesfällen je erzeugter Strommenge zählt Kernenergie zu
            den sichersten Energieformen. Bezogen auf eine Terawattstunde –
            Unfälle und Luftverschmutzung eingerechnet – verursacht Braunkohle
            rund 32,7 und Steinkohle rund 24,6 Todesfälle, während Kernkraft
            selbst unter Berücksichtigung von Tschernobyl und Fukushima zu den
            sichersten und saubersten Energiequellen gehört, die derzeit
            verfügbar sind.
            <Footnote sourceId="Q65" />
            <br />
            <br />
            Bereits ein älterer Bericht der Internationalen Energieagentur kam
            zu dem Ergebnis, dass Kohle, Gas und Wasserkraft bislang mehr
            Todesopfer gefordert haben als die Kernkraft, wobei die Mehrzahl der
            fossilen Todesfälle auf Feinstaub-Luftverschmutzung zurückgeht
            (Tagesspiegel). Die seltenen, medial dominanten Reaktorunfälle
            fallen statistisch also weit weniger ins Gewicht als die laufende
            fossile Belastung.
            <Footnote sourceId="Q66" />
            <br />
            <br />
            Einschränkend gilt: Schwere Unfälle haben langfristige psychosoziale
            Folgen, Umsiedlungen und Vertrauensverluste, auch wenn die
            statistische Sterblichkeit gering bleibt.
         </>
      ),
   },
   {
      id: 'politisch',
      label: 'Politisch-Institutionell',
      score: 3,
      color: '#7c3aed',
      tint: '#f5f3ff',
      description: (
         <>
            Institutionell hat Kernenergie zuletzt höchstrichterlich Bestätigung
            erfahren. Mit dem Ergänzenden Delegierten Klima-Rechtsakt
            (Delegierte Verordnung (EU) 2022/1214) stufte die EU-Kommission
            gestützt auf wissenschaftliche Gutachten bestimmte
            Kernenergieaktivitäten unter klaren und strengen Bedingungen als mit
            der Taxonomie vereinbar ein (EU-Kommission). Das Europäische
            Parlament lehnte den delegierten Rechtsakt nicht ab (Europäisches
            Parlament), und am 10. September 2025 wies das Gericht der EU die
            Nichtigkeitsklage Österreichs ab und bestätigte, dass diese
            Tätigkeiten unter bestimmten Voraussetzungen wesentlich zum
            Klimaschutz beitragen können (EuG, Pressemitteilung 113/25).
            <Footnote sourceId="Q67" />
            <Footnote sourceId="Q68" />
            <br />
            <br />
            International setzen Frankreich, Schweden und Polen auf Aus- bzw.
            Neubau (bpb). Gegenposition: Deutschland vollzog am 15. April 2023
            mit Abschaltung von Isar 2, Emsland und Neckarwestheim 2 den
            Atomausstieg (BASE) und hält Kernkraft für nicht nachhaltig;
            Österreich legte im November 2025 Rechtsmittel gegen das EuG-Urteil
            ein.
            <Footnote sourceId="Q39" />
            <Footnote sourceId="Q48" />
            <Footnote sourceId="Q69" />
         </>
      ),
   },
]

function SustainabilitySquare() {
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

export default function Bewertung() {
   return (
      <SectionWrapper id="bewertung" kicker="Sektion 07 · Nachhaltigkeit">
         <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900">
            Bewertung: Viereck der Nachhaltigkeit
         </h2>
         <p className="mt-5 text-xl text-stone-600 leading-relaxed max-w-prose">
            Das Viereck der Nachhaltigkeit bewertet Atomenergie in vier
            Dimensionen: ökologisch, ökonomisch, sozial und
            politisch-institutionell
         </p>

         <SustainabilitySquare />
      </SectionWrapper>
   )
}
