'use client'

import { type ReactNode } from 'react'
import SectionWrapper from '@/components/layout/SectionWrapper'
import Footnote from '@/components/content/Footnote'
import GlossaryTerm from '@/components/content/GlossaryTerm'
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel'

const proArgs: { aspect: string; detail: ReactNode; footnoteId?: string }[] = [
   {
      aspect: 'Klimaschutz',
      detail: (
         <>
            Kernkraftwerke setzen im Betrieb nahezu keine Treibhausgase frei.
            Über den gesamten Lebenszyklus betrachtet liegen die Emissionen laut
            IPCC bei etwa 4 bis 110 Gramm CO₂-Äquivalent pro Kilowattstunde, im
            Median rund 12 Gramm. Kohlekraftwerke verursachen im Mittel etwa 820
            Gramm. Bestehende Reaktoren können fossile Kraftwerke kurzfristig
            ersetzen.
            <Footnote sourceId="Q48" />
         </>
      ),
   },
   {
      aspect: 'Versorgungssicherheit',
      detail: (
         <>
            Kernkraftwerke erzeugen kontinuierlich große, planbare Strommengen
            und sind nicht von Wetter oder Tageszeit abhängig. Sie erreichen
            hohe Volllaststunden und tragen damit zur Versorgungssicherheit bei.
            In der Europäischen Union deckt Kernenergie etwa 22 bis 25 Prozent
            der Stromerzeugung, weltweit rund neun bis zehn Prozent.
            <Footnote sourceId="Q48" />
         </>
      ),
   },
   {
      aspect: 'Energiedichte',
      detail: (
         <>
            Die Energiedichte von Kernbrennstoff ist sehr hoch: In sehr wenig
            Material wie Uran steckt viel Energie. Kernkraftwerke benötigen
            daher nur geringe Brennstoffmengen für hohe Stromerträge. Diese
            effiziente Brennstoffnutzung kann in Ländern mit begrenzten
            erneuerbaren Potenzialen oder hohem Strombedarf ein Argument für die
            Kernenergie sein.
            <Footnote sourceId="Q48" />
         </>
      ),
   },
]

const contraArgs: { aspect: string; detail: ReactNode; footnoteId?: string }[] =
   [
      {
         aspect: 'Unfallrisiko',
         detail: (
            <>
               Schwere Unfälle können große Mengen Radioaktivität freisetzen.
               Die Katastrophen von Tschernobyl 1986 und Fukushima 2011
               erreichten Stufe 7 der internationalen INES-Skala. In Tschernobyl
               wurden hunderttausende Menschen evakuiert; akute Strahlenschäden
               führten zu Todesfällen, und Spätfolgen wie erhöhte
               Schilddrüsenkrebsraten bei Kindern sind dokumentiert.
               <Footnote sourceId="Q49" />
            </>
         ),
      },
      {
         aspect: 'Endlagerung',
         detail: (
            <>
               Beim Betrieb entstehen hochradioaktive Abfälle, die wegen langer
               Halbwertszeiten über sehr lange Zeiträume sicher eingeschlossen
               werden müssen. Als risikoärmste Lösung gilt die Lagerung in
               tiefen geologischen Schichten. In Deutschland existiert noch kein
               Endlager für hochradioaktive Abfälle; die Standortsuche dauert
               nach offiziellen Schätzungen noch Jahrzehnte.
               <Footnote sourceId="Q50" />
            </>
         ),
      },
      {
         aspect: 'Wirtschaftlichkeit',
         detail: (
            <>
               Der Neubau von Kernkraftwerken ist kapitalintensiv und
               langwierig. Projekte wie das finnische Olkiluoto 3 oder das
               britische Hinkley Point C verzögerten sich um viele Jahre, und
               ihre Kosten überstiegen die Planung deutlich. Lange Bauzeiten und
               Kostensteigerungen mindern die Wirtschaftlichkeit und verzögern
               den Klimanutzen.
               <Footnote sourceId="Q51" />
            </>
         ),
      },
   ]

export default function ChancenRisiken() {
   return (
      <SectionWrapper id="chancen-risiken" kicker="Sektion 05 · Analyse">
         <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900">
            Chancen und Risiken
         </h2>

         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Pro-Carousel */}
            <div className="flex flex-col">
               <div className="mb-5 flex items-center justify-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700">
                     Chancen
                  </span>
               </div>
               <div className="px-8 flex-1 flex flex-col">
                  <Carousel
                     opts={{ loop: true }}
                     className="w-full flex-1 flex flex-col"
                  >
                     <CarouselContent className="flex-1">
                        {proArgs.map((arg, i) => (
                           <CarouselItem key={i} className="flex">
                              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7 min-h-60 w-full flex flex-col justify-between">
                                 <div>
                                    <p className="text-xs font-medium text-emerald-500 uppercase tracking-widest mb-3">
                                       {i + 1} / {proArgs.length}
                                    </p>
                                    <h3 className="font-serif text-2xl text-emerald-900 mb-3">
                                       {arg.aspect}
                                    </h3>
                                    <p className="text-stone-600 text-sm leading-relaxed">
                                       {arg.detail}
                                    </p>
                                 </div>
                                 {arg.footnoteId && (
                                    <Footnote sourceId={arg.footnoteId} />
                                 )}
                              </div>
                           </CarouselItem>
                        ))}
                     </CarouselContent>
                     <CarouselPrevious />
                     <CarouselNext />
                  </Carousel>
               </div>
            </div>

            <div className="flex flex-col">
               <div className="mb-5 flex items-center justify-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-700">
                     Risiken
                  </span>
               </div>
               <div className="px-8 flex-1 flex flex-col">
                  <Carousel
                     opts={{ loop: true }}
                     className="w-full flex-1 flex flex-col"
                  >
                     <CarouselContent className="flex-1">
                        {contraArgs.map((arg, i) => (
                           <CarouselItem key={i} className="flex">
                              <div className="rounded-2xl border border-red-200 bg-red-50 p-7 min-h-60 w-full flex flex-col justify-between">
                                 <div>
                                    <p className="text-xs font-medium text-red-400 uppercase tracking-widest mb-3">
                                       {i + 1} / {contraArgs.length}
                                    </p>
                                    <h3 className="font-serif text-2xl text-red-900 mb-3">
                                       {arg.aspect}
                                    </h3>
                                    <p className="text-stone-600 text-sm leading-relaxed">
                                       {arg.detail}
                                    </p>
                                 </div>
                                 {arg.footnoteId && (
                                    <Footnote sourceId={arg.footnoteId} />
                                 )}
                              </div>
                           </CarouselItem>
                        ))}
                     </CarouselContent>
                     <CarouselPrevious />
                     <CarouselNext />
                  </Carousel>
               </div>
            </div>
         </div>
      </SectionWrapper>
   )
}
