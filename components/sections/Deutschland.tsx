'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import SectionWrapper from '@/components/layout/SectionWrapper'
import Footnote from '@/components/content/Footnote'

// Atomenergie in Deutschland – Chronologie als vertikaler Zeitstrahl.
// Die 7 Phasen stehen direkt unten im Markup; <TimelineRow> kümmert sich nur
// um Layout (alternierendes Grid, Punkt + Linie) und den Fade-in beim Scrollen.
//
// Quellenbeleg: Jede Phase weist ihre Quellen per <Footnote> am Titel aus. Die
// sourceIds sind ein String-Array – pro Phase also mehrere Belege möglich. Die
// Einträge sind aktuell Platzhalter (Q-TODO-N); die echten Quellen in
// content/sources.json (Q13 ff.) eintragen und die IDs hier ersetzen/ergänzen.

export default function Deutschland() {
   return (
      <SectionWrapper id="deutschland" kicker="Sektion 04 · Deutschland">
         <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900 mb-4">
            Atomenergie in Deutschland
         </h2>
         <section aria-label="Chronologie der Kernenergie in Deutschland">
            <ol className="relative flex flex-col">
               <TimelineRow
                  index={0}
                  sourceIds={['Q21', 'Q22', 'Q23', 'Q24']}
                  isFirst
                  isLast={false}
                  dotClass="bg-stone-400"
                  date="1955-01-01"
                  dateLabel="1955–1969"
                  title="Aufbau und Euphorie"
                  html='<ul><li><span>1955</span><strong>Gründung des Bundesministeriums für Atomfragen ("Atomministerium")</strong><span> – erster Minister: Franz Josef Strauß</span></li><li><span>1957</span><strong>Erster Forschungsreaktor Deutschlands geht in Garching kritisch ("Atomei", FRM)</strong></li><li><span>1959</span><strong>Verabschiedung des Atomgesetzes (Gesetz über die friedliche Verwendung der Kernenergie), in Kraft 1960</strong></li><li><span>1961</span><strong>Erstes kommerzielles Versuchskernkraftwerk Kahl (VAK) speist Strom ins Netz</strong><span> – Beginn der deutschen Atomstromproduktion</span></li><li><span>1969</span><strong>Inbetriebnahme erster großer Leistungsreaktoren (u. a. Obrigheim)</strong></li></ul>'
               />
               <TimelineRow
                  index={1}
                  sourceIds={['Q25', 'Q26']}
                  isFirst={false}
                  isLast={false}
                  dotClass="bg-stone-400"
                  date="1973-01-01"
                  dateLabel="1973–1979"
                  title="Ausbau und der Beginn des Widerstands"
                  html="<ul><li><span>1973</span><strong>Ölpreiskrise</strong><span> – Kernkraft wird zur energiepolitischen Priorität</span></li><li><span>1975</span><strong>Besetzung des Bauplatzes Wyhl</strong><span> – Geburtsstunde der bundesweiten Anti-Atom-Bewegung</span></li><li><span>1977</span><strong>Festlegung Gorlebens als Standort für ein nukleares Entsorgungszentrum</strong><span> – Großdemonstrationen in Brokdorf, Grohnde, Kalkar</span></li><li><span>1979</span><strong>Reaktorunfall in Harrisburg/Three Mile Island (USA)</strong><span> – 100.000 demonstrieren in Bonn und Gorleben</span></li></ul>"
               />
               <TimelineRow
                  index={2}
                  sourceIds={['Q27', 'Q28', 'Q29', 'Q30', 'Q31']}
                  isFirst={false}
                  isLast={false}
                  dotClass="bg-stone-200 ring-2 ring-stone-300"
                  date="1980-01-01"
                  dateLabel="1980–1989"
                  title="Tschernobyl und die Politisierung"
                  html="<ul><li><span>1980</span><strong>Gründung der Partei Die Grünen</strong><span> – Atomausstieg als Kernforderung</span></li><li><span>1985</span><strong>Betrieb und Stilllegung des Thorium-Hochtemperaturreaktors THTR-300 (Hamm-Uentrop) nach Störfällen</strong></li><li><span>26. April 1986</span><strong>Reaktorkatastrophe von Tschernobyl</strong><span> – radioaktiver Niederschlag auch über Deutschland</span></li><li><span>Juni 1986</span><strong>Gründung des Bundesumweltministeriums (BMU) als direkte Reaktion auf Tschernobyl</strong></li><li><span>1989</span><strong>Aufgabe der Wiederaufarbeitungsanlage Wackersdorf nach jahrelangen Protesten</strong></li></ul>"
               />
               <TimelineRow
                  index={3}
                  sourceIds={['Q32', 'Q33', 'Q34']}
                  isFirst={false}
                  isLast={false}
                  dotClass="bg-stone-200 ring-2 ring-stone-300"
                  date="1990-01-01"
                  dateLabel="1990–2002"
                  title="Konsolidierung und erster Ausstiegsbeschluss"
                  html="<ul><li><span>1990</span><strong>Abschaltung der sowjetischen Reaktoren in Greifswald/Lubmin nach der Wiedervereinigung</strong></li><li><span>1991</span><strong>Endgültige Aufgabe des nie betriebenen Schnellen Brüters Kalkar (heute Freizeitpark)</strong></li><li><span>14. Juni 2000</span><strong>Atomkonsens</strong><span> – Vereinbarung zwischen Schröder-Regierung und Energieversorgern über den geordneten Ausstieg</span></li><li><span>27. April 2002</span><strong>Novelle des Atomgesetzes: gesetzliche Verankerung des ersten Atomausstiegs, Begrenzung der Reststrommengen</strong></li></ul>"
               />
               <TimelineRow
                  index={4}
                  sourceIds={['Q35', 'Q36', 'Q37']}
                  isFirst={false}
                  isLast={false}
                  dotClass="bg-stone-200 ring-2 ring-stone-300"
                  date="2003-01-01"
                  dateLabel="2003–2011"
                  title="Erste Abschaltungen, Rolle rückwärts, Fukushima-Wende"
                  html="<ul><li><span>2003</span><strong>Abschaltung Stade</strong><span> – erstes KKW nach dem Konsens vom Netz</span></li><li><span>2005</span><strong>Abschaltung Obrigheim</strong></li><li><span>Oktober 2010</span><strong>Laufzeitverlängerung durch Schwarz-Gelb (Merkel/Westerwelle)</strong><span> – im Schnitt rund 12 Jahre längere Restlaufzeiten</span></li><li><span>11. März 2011</span><strong>Reaktorkatastrophe von Fukushima (Japan)</strong></li><li><span>14. März 2011</span><strong>Atom-Moratorium</strong><span> – sofortige vorübergehende Abschaltung der acht ältesten Reaktoren</span></li><li><span>30. Juni 2011</span><strong>Bundestag beschließt mit breiter Mehrheit den endgültigen Atomausstieg bis Ende 2022 (13. Atomgesetz-Novelle)</strong></li></ul>"
               />
               <TimelineRow
                  index={5}
                  sourceIds={['Q38', 'Q39', 'Q40']}
                  isFirst={false}
                  isLast={false}
                  dotClass="bg-stone-200 ring-2 ring-stone-300"
                  date="2015-01-01"
                  dateLabel="2015–2022"
                  title="Der schrittweise Ausstieg"
                  html="<ul><li><span>2015</span><strong>Abschaltung Grafenrheinfeld</strong></li><li><span>2017</span><strong>Abschaltung Gundremmingen B</strong></li><li><span>2019</span><strong>Abschaltung Philippsburg 2</strong></li><li><span>2020</span><strong>Gorleben scheidet im Standortauswahlverfahren als mögliches Endlager aus</strong></li><li><span>31. Dezember 2021</span><strong>Abschaltung Brokdorf, Grohnde, Gundremmingen C</strong></li><li><span>Februar 2022</span><strong>Russischer Angriff auf die Ukraine</strong><span> – Energiekrise stellt Ausstiegstermin infrage</span></li><li><span>Oktober 2022</span><strong>Kanzler Scholz ordnet Streckbetrieb der drei letzten Meiler bis 15. April 2023 an</strong></li></ul>"
               />
               <TimelineRow
                  index={6}
                  sourceIds={['Q41', 'Q42', 'Q43', 'Q44', 'Q45', 'Q46', 'Q47']}
                  isFirst={false}
                  isLast
                  dotClass="bg-stone-200 ring-2 ring-stone-300"
                  date="2023-04-15"
                  dateLabel="2023–2026"
                  title="Endgültiger Ausstieg und Nachspiel"
                  html='<ul><li><span>15. April 2023</span><strong>Endgültige Abschaltung der letzten drei Kernkraftwerke</strong><span> – Emsland, Isar 2, Neckarwestheim 2</span></li><li><span>2024</span><strong>Wiederkehrende Debatten über eine Neubewertung</strong><span> – laut Umfragen befürwortet eine knappe Mehrheit den Wiedereinstieg</span></li><li><span>Juni 2025</span><strong>Bundeskanzler Friedrich Merz bezeichnet den Kernkraftausstieg als „strategischen Fehler" – hält eine Rückkehr aber für faktisch kaum umsetzbar</strong></li><li><span>Oktober 2025</span><strong>Sprengung der Kühltürme des stillgelegten Kraftwerks Gundremmingen</strong><span> – symbolisches Ende einer Ära</span></li><li><span>März 2026</span><strong>EU-Kommissionspräsidentin von der Leyen kündigt beim Kernenergiegipfel in Paris eine „Renaissance der Kernenergie" an</strong></li><li><span>April 2026</span><strong>Unionsfraktionschef Jens Spahn fordert Debatte über Wiedereinstieg</strong><span> – Studien beziffern Reaktivierung auf rund 9–10 Mrd. Euro</span></li></ul>'
               />
            </ol>
         </section>

         <div className="mt-12 lg:mt-16">
            <Image
               src="/images/akw-germany.jpg"
               alt="Kernkraftwerk in Deutschland"
               width={2000}
               height={2829}
               className="w-full h-auto rounded-xl shadow-lg"
            />
         </div>
      </SectionWrapper>
   )
}

function TimelineRow({
   index,
   isFirst,
   isLast,
   dotClass,
   date,
   dateLabel,
   title,
   html,
   sourceIds,
}: {
   index: number
   isFirst: boolean
   isLast: boolean
   dotClass: string
   date: string
   dateLabel: string
   title: string
   html: string
   sourceIds: string[]
}) {
   const ref = useRef<HTMLLIElement>(null)
   const [visible, setVisible] = useState(false)

   useEffect(() => {
      const el = ref.current
      if (!el) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
         setVisible(true)
         return
      }
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setVisible(true)
               observer.disconnect()
            }
         },
         { threshold: 0.1 }
      )
      observer.observe(el)
      return () => observer.disconnect()
   }, [])

   const isEven = index % 2 === 0

   // Vertikale Linie: beginnt bei erster Zeile am Punkt-Zentrum, endet bei letzter dort
   const lineTop = isFirst ? 'top-7' : 'top-0'
   const lineBottom = isLast ? 'bottom-[calc(100%-1.75rem)]' : 'bottom-0'

   return (
      <li
         ref={ref}
         className={cn(
            'grid grid-cols-[2rem_1fr] md:grid-cols-[1fr_2rem_1fr] gap-x-4',
            'transition-all duration-500 ease-out',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
         )}
         aria-label={`${dateLabel}: ${title}`}
      >
         {/* Karte ─ mobil: Spalte 2 rechts vom Punkt; Desktop gerade: Spalte 1 links; ungerade: Spalte 3 rechts */}
         <div
            className={cn(
               'py-3 col-start-2 row-start-1',
               isEven
                  ? 'md:col-start-1 md:col-end-2 md:pr-5'
                  : 'md:col-start-3 md:col-end-4 md:pl-5'
            )}
         >
            <article className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-200 focus-within:ring-2 focus-within:ring-stone-400 focus-within:ring-offset-2">
               <time
                  dateTime={date}
                  className="block text-xs font-mono text-stone-400 mb-1"
               >
                  {dateLabel}
               </time>
               <h3 className="font-semibold text-stone-900 text-base leading-snug mb-3">
                  {title}
                  {sourceIds.map((id) => (
                     <Footnote key={id} sourceId={id} />
                  ))}
               </h3>
               <div
                  className={cn(
                     'text-sm leading-relaxed',
                     // List-Layout
                     '[&_ul]:space-y-2',
                     '[&_li]:flex [&_li]:flex-col [&_li]:gap-0.5',
                     '[&_li]:border-b [&_li]:border-stone-100 [&_li]:pb-2',
                     '[&_li:last-child]:border-none [&_li:last-child]:pb-0',
                     // Datums-Span (erstes Kind des li)
                     '[&_li>span:first-child]:text-xs [&_li>span:first-child]:font-mono [&_li>span:first-child]:text-stone-400',
                     // Ereignis-Titel
                     '[&_strong]:font-semibold [&_strong]:text-stone-800',
                     // Beschreibungstext
                     '[&_li>span:last-child]:text-stone-500',
                     '[&_em]:italic',
                     '[&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-stone-800'
                  )}
                  // Sicher: statisches, vertrauenswürdiges HTML aus diesem Projekt, nie aus Nutzereingaben
                  dangerouslySetInnerHTML={{ __html: html }}
               />
            </article>
         </div>

         {/* Punkt + vertikale Linie ─ mobil: Spalte 1; Desktop: Spalte 2 */}
         <div
            className={cn(
               'col-start-1 row-start-1 relative flex justify-center',
               'md:col-start-2 md:col-end-3'
            )}
            aria-hidden="true"
         >
            <div
               className={cn('absolute w-px bg-stone-200', lineTop, lineBottom)}
            />
            <div
               className={cn(
                  'relative z-10 mt-5 w-4 h-4 rounded-full shrink-0 transition-colors',
                  dotClass
               )}
            />
         </div>
      </li>
   )
}
