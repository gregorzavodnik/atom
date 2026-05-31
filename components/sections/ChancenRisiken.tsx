'use client'

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

const proArgs: { aspect: string; detail: string; footnoteId?: string }[] = [
   {
      aspect: 'Klimaschutz',
      detail:
         '[TODO: Geringe CO₂-Emissionen je kWh im Lebenszyklus – vergleichbar mit Windkraft]',
   },
   {
      aspect: 'Grundlastfähigkeit',
      detail:
         '[TODO: 24/7-Verfügbarkeit unabhängig von Wetter – wichtige Ergänzung zu fluktuierenden Erneuerbaren]',
   },
   {
      aspect: 'Flächenverbrauch',
      detail:
         '[TODO: Sehr geringer Flächenbedarf pro erzeugter kWh gegenüber Windparks und Freiflächen-PV]',
   },
   {
      aspect: 'Energiesicherheit',
      detail:
         '[TODO: Reduktion von Gasimportabhängigkeit; Uran aus diversifizierten Quellen (Kasachstan, Kanada, Australien)]',
   },
]

const contraArgs: { aspect: string; detail: string; footnoteId?: string }[] = [
   {
      aspect: 'Endlagerung',
      detail:
         '[TODO: Kein Endlager in Betrieb; hochradioaktiver Abfall bleibt 100.000 Jahre gefährlich]',
      footnoteId: 'Q01',
   },
   {
      aspect: 'Unfallrisiko',
      detail:
         '[TODO: Katastrophale Auswirkungen bei schweren Störfällen (Tschernobyl 1986, Fukushima 2011)]',
   },
   {
      aspect: 'Investitionskosten',
      detail:
         '[TODO: Extrem hohe Investitionskosten und häufige Bauzeitverzögerungen – Beispiel Hinkley Point C (UK)]',
   },
   {
      aspect: 'Proliferation',
      detail:
         '[TODO: Duale Nutzbarkeit von Anreicherungstechnologie; Weiterverbreitung von Kernwaffen]',
   },
]

export default function ChancenRisiken() {
   return (
      <SectionWrapper id="chancen-risiken" kicker="Sektion 05 · Analyse">
         <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900">
            Chancen und Risiken
         </h2>
         <p className="mt-5 text-xl text-stone-600 leading-relaxed max-w-prose">
            Atomenergie polarisiert. Eine sachliche Abwägung verlangt, beide
            Seiten der Medaille zu betrachten – ohne ideologische Vorprägung.
         </p>

         <div className="mt-8 space-y-5 text-stone-700 leading-relaxed max-w-prose">
            <p>
               [TODO: Einleitender Absatz zur Methodik der Pro/Contra-Abwägung.
               Hinweis, dass die Bewertung je nach politischer, wirtschaftlicher
               und ethischer Perspektive unterschiedlich ausfällt. Bezug zum
               Nachhaltigkeitsviereck in Sektion 07.]
               <Footnote sourceId="Q02" />
            </p>
            <p>
               Besonders umstritten ist die Frage der{' '}
               <GlossaryTerm term="Endlagerung" />: Hochradioaktive Abfälle
               müssen Hunderttausende von Jahren sicher von der Biosphäre
               getrennt gelagert werden – eine technische und gesellschaftliche
               Herausforderung ohne historisches Vorbild.
               <Footnote sourceId="Q01" />
            </p>
         </div>

         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Pro-Carousel */}
            <div>
               <div className="mb-5 flex items-center justify-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700">
                     Chancen
                  </span>
               </div>
               <div className="px-12">
                  <Carousel className="w-full">
                     <CarouselContent>
                        {proArgs.map((arg, i) => (
                           <CarouselItem key={i}>
                              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7 h-60 flex flex-col justify-between">
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

            <div>
               <div className="mb-5 flex items-center justify-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-700">
                     Risiken
                  </span>
               </div>
               <div className="px-12">
                  <Carousel className="w-full">
                     <CarouselContent>
                        {contraArgs.map((arg, i) => (
                           <CarouselItem key={i}>
                              <div className="rounded-2xl border border-red-200 bg-red-50 p-7 h-60 flex flex-col justify-between">
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
