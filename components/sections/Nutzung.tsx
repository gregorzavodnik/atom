import SectionWrapper from '@/components/layout/SectionWrapper'
import Footnote from '@/components/content/Footnote'
import GlossaryTerm from '@/components/content/GlossaryTerm'
import ChartPlaceholder from '@/components/content/ChartPlaceholder'
import { LocateFixed, Compass, Mountain, Zap } from 'lucide-react'

export default function Nutzung() {
   return (
      <SectionWrapper id="nutzung" kicker="Sektion 03 · Anwendungsfelder">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
               <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-6">
                  Lokalisierung des Kernkraftwerks Kashiwazaki-Kariwa (Japan)
               </h3>

               <div className="relative pl-9">
                  <div
                     className="absolute left-[10px] top-2 bottom-2 w-px bg-stone-200"
                     aria-hidden="true"
                  />

                  <div className="space-y-8">
                     <div className="relative">
                        <div className="absolute -left-9 top-0 w-5 h-5 rounded-full bg-teal-300 flex items-center justify-center ring-2 ring-white">
                           <LocateFixed
                              size={10}
                              strokeWidth={2.5}
                              className="text-white"
                           />
                        </div>
                        <h4 className="font-semibold text-sm text-stone-900 leading-snug mb-1.5">
                           Absolute Lage – Kontinent, Land und Koordinaten
                        </h4>
                        <p className="text-sm text-stone-600 leading-relaxed">
                           Das Kernkraftwerk Kashiwazaki-Kariwa liegt auf dem
                           asiatischen Kontinent im Inselstaat Japan, ungefähr
                           bei 37° nördlicher Breite und 138° östlicher Länge.
                           Standort ist die Westküste der Hauptinsel Honshū in
                           der Präfektur Niigata.
                           <Footnote sourceId="Q13" />
                        </p>
                     </div>

                     <div className="relative">
                        <div className="absolute -left-9 top-0 w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center ring-2 ring-white">
                           <Compass
                              size={10}
                              strokeWidth={2.5}
                              className="text-white"
                           />
                        </div>
                        <h4 className="font-semibold text-sm text-stone-900 leading-snug mb-1.5">
                           Relative Lage – Orientierung zu Nachbarräumen
                        </h4>
                        <p className="text-sm text-stone-600 leading-relaxed">
                           Die Anlage erstreckt sich über die Gemeinden
                           Kashiwazaki und Kariwa an der dem Japanischen Meer
                           zugewandten Seite Honshūs. Die nächstgelegene größere
                           Stadt ist Nagaoka rund 20 km östlich; die
                           Präfekturhauptstadt Niigata, das nächstgelegene
                           regionale Zentrum, liegt rund 65 km nordöstlich. Die
                           Metropole Tokio befindet sich jenseits der zentralen
                           Gebirgszüge rund 220 km süd-südöstlich (Luftlinie).
                           Nach Osten und Südosten erheben sich die
                           Echigo-Berge; weiter südlich schließen die zentralen
                           Gebirgszüge, darunter die Japanischen Alpe, an, die
                           die Küste Niigatas vom Großraum Tokio trennen. Im
                           Westen grenzt das Kraftwerksgelände unmittelbar an
                           das Japanische Meer.
                           <Footnote sourceId="Q14" />
                           <Footnote sourceId="Q15" />
                        </p>
                     </div>

                     <div className="relative">
                        <div className="absolute -left-9 top-0 w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center ring-2 ring-white">
                           <Mountain
                              size={10}
                              strokeWidth={2.5}
                              className="text-white"
                           />
                        </div>
                        <h4 className="font-semibold text-sm text-stone-900 leading-snug mb-1.5">
                           Naturräumliche Einordnung – Landschaft, Klima,
                           Besiedlung
                        </h4>
                        <p className="text-sm text-stone-600 leading-relaxed">
                           Naturräumlich handelt es sich um einen schmalen
                           Küstensaum am Rand der Echigo-Ebene. Das Klima ist
                           feucht und monsunal geprägt, mit außergewöhnlich
                           schneereichen Wintern. Die Küstenebene ist
                           vergleichsweise dicht besiedelt und
                           landwirtschaftlich (Reisanbau) genutzt, während die
                           Region zugleich zu den seismisch aktivsten Gebieten
                           der Erde zählt.
                           <Footnote sourceId="Q13" />
                           <Footnote sourceId="Q16" />
                           <Footnote sourceId="Q17" />
                        </p>
                     </div>

                     <div className="relative">
                        <div className="absolute -left-9 top-0 w-5 h-5 rounded-full bg-teal-800 flex items-center justify-center ring-2 ring-white">
                           <Zap
                              size={10}
                              strokeWidth={2.5}
                              className="text-white"
                           />
                        </div>

                        <h4 className="font-semibold text-sm text-stone-900 leading-snug mb-1.5">
                           Funktionale Einordnung – Rolle im japanischen
                           Stromnetz
                        </h4>
                        <p className="text-sm text-stone-600 leading-relaxed">
                           Im japanischen Stromnetz speist die Anlage in den
                           50-Hz-Verbund Ostjapans ein, der von der Tokyo
                           Electric Power Company (TEPCO) betrieben wird. Mit
                           ihrer hohen installierten Leistung ist sie als
                           Grundlastkraftwerk konzipiert und sollte die
                           Versorgung des Großraums Tokio stützen.
                           <Footnote sourceId="Q18" />
                           <Footnote sourceId="Q19" />
                           <Footnote sourceId="Q20" />
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div>
               <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900">
                  Wofür wird Atomenergie genutzt?
               </h2>

               <div className="mt-8 space-y-5 text-stone-700 leading-relaxed">
                  <p>
                     Die zivile Nutzung der Atomenergie begann 1954: Damals
                     wurde im sowjetischen Obninsk das weltweit erste
                     Kernkraftwerk an ein Stromnetz angeschlossen. Ursprünglich
                     war die Technologie militärisch getrieben. Heute sind
                     weltweit rund 417 Reaktoren in Betrieb, mit einem
                     Durchschnittsalter von etwa 32 Jahren. 63 weitere Reaktoren
                     befinden sich im Bau, der Schwerpunkt der Neubauten liegt
                     in Asien.
                     <Footnote sourceId="Q08" />
                     <Footnote sourceId="Q09" />
                  </p>
                  <p>
                     Die wichtigste zivile Nutzung ist die Erzeugung
                     elektrischer Energie. Kernreaktoren liefern seit über 70
                     Jahren Strom; 2024 erreichte die globale Erzeugung mit
                     2.667 TWh einen neuen Höchststand. Der relative Anteil
                     liegt jedoch unter dem historischen Maximum: Mitte der
                     1980er Jahre erreichte die Kernkraft mit 17 % der
                     weltweiten Stromproduktion ihren Höhepunkt. Besonders stark
                     wächst die Nutzung heute in Asien.
                     <Footnote sourceId="Q10" />
                  </p>
                  <p>
                     Die militärische Nutzung umfasst zwei Bereiche: Kernwaffen
                     und Schiffsantrieb. Anfang 2025 besaßen neun Staaten
                     zusammen rund 12.241 Sprengköpfe, wovon USA und Russland
                     etwa 90 % halten. Daneben dienen Reaktoren als Antrieb: Bei
                     der US-Marine sind 11 Flugzeugträger sowie zahlreiche
                     U-Boote nuklear angetrieben, was große Reichweite und
                     Ausdauer ohne regelmäßiges Betanken ermöglicht.
                     <Footnote sourceId="Q11" />
                  </p>
                  <p>
                     In der Medizin liefern meist Forschungsreaktoren
                     radioaktive Isotope für Diagnostik und Therapie. Weltweit
                     werden jährlich über 50 Millionen nuklearmedizinische
                     Eingriffe durchgeführt, rund 90 % davon zur Diagnose.
                     Technetium-99m kommt dabei in etwa 85 % der Verfahren zum
                     Einsatz. In der Therapie zerstören strahlende Isotope wie
                     Iod-131 gezielt krankes Gewebe, etwa bei Schilddrüsenkrebs.
                     <Footnote sourceId="Q12" />
                  </p>
               </div>
            </div>
         </div>

         <div className="mt-16">
            <img
               src="/nuclear-energy-generation.svg"
               alt="Weltweite Erzeugung elektrischer Energie aus Kernkraft im Zeitverlauf"
               className="w-full h-auto"
            />
         </div>
      </SectionWrapper>
   )
}
