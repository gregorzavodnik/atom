import SectionWrapper from '@/components/layout/SectionWrapper'
import Footnote from '@/components/content/Footnote'
import GlossaryTerm from '@/components/content/GlossaryTerm'
import { LocateFixed, Compass, Mountain, Layers } from 'lucide-react'
import Image from 'next/image'

export default function Abbau() {
   return (
      <SectionWrapper id="abbau" kicker="Sektion 02 · Rohstoffgeographie">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
               <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900">
                  Wo wird Uran abgebaut?
               </h2>

               <div className="mt-8 space-y-5 text-stone-700 leading-relaxed">
                  <p>
                     Uran wird weltweit nur in wenigen Ländern in nennenswertem
                     Umfang abgebaut, wodurch die Versorgung stark konzentriert
                     ist. Im Jahr 2024 entfielen rund 74,6 % der weltweiten
                     Minenförderung auf die drei größten Produzenten, die Top
                     fünf erreichten etwa 88,9 %. Diese geografische
                     Konzentration macht den Weltmarkt anfällig für politische
                     oder betriebliche Störungen in einzelnen Ländern.
                     <Footnote sourceId="Q06" />
                  </p>
                  <p>
                     Mit Abstand führend ist Kasachstan, gefolgt von Australien,
                     Kanada, Namibia, Usbekistan, Niger, Russland, China, den
                     USA und der Ukraine als den zehn größten Förderländern.
                     Australien verfügt zugleich über die größten bekannten
                     wirtschaftlich gewinnbaren Uranreserven.
                     <Footnote sourceId="Q07" />
                  </p>
                  <p>
                     Die Abbaumethoden unterscheiden sich je nach Land und
                     Lagerstätte. Der überwiegende Teil des kasachischen Urans
                     wird per <GlossaryTerm term="In-situ-Laugung" /> gewonnen,
                     während Kanada vor allem auf das ergiebige Athabasca-Becken
                     in Saskatchewan setzt. Namibia fördert über große Tagebaue
                     wie Rössing und Husab.
                     <Footnote sourceId="Q07" />
                  </p>
               </div>
            </div>

            <div>
               <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-6">
                  Lokalisierung des Chu-Sarysu-Beckens (Kasachstan)
               </h3>

               <div className="space-y-4">
                  <div className="border rounded-xl p-5 bg-blue-50 border-blue-200">
                     <div className="flex items-start gap-3">
                        <LocateFixed
                           size={20}
                           strokeWidth={1.75}
                           className="mt-0.5 shrink-0 text-blue-600"
                        />
                        <div>
                           <h4 className="font-semibold text-sm leading-snug mb-2 text-blue-800">
                              Absolute Lage – Kontinent, Land und Koordinaten
                           </h4>
                           <p className="text-sm text-stone-700 leading-relaxed">
                              Das Chu-Sarysu-Becken liegt auf dem Kontinent
                              Asien im Süden bzw. Süd-Zentralteil der Republik
                              Kasachstan. In absoluter Lage erstreckt es sich
                              ungefähr zwischen 44° und 47° nördlicher Breite
                              sowie 67° und 70° östlicher Länge und liegt damit
                              deutlich im gemäßigt-kontinentalen Binnenraum
                              Eurasiens.
                              <Footnote sourceId="Q05" />
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="border rounded-xl p-5 bg-blue-50 border-blue-200">
                     <div className="flex items-start gap-3">
                        <Compass
                           size={20}
                           strokeWidth={1.75}
                           className="mt-0.5 shrink-0 text-blue-600"
                        />
                        <div>
                           <h4 className="font-semibold text-sm leading-snug mb-2 text-blue-800">
                              Relative Lage – Orientierung zu Nachbarräumen
                           </h4>
                           <p className="text-sm text-stone-700 leading-relaxed">
                              Relativ betrachtet befindet sich das Becken im
                              Süden Kasachstans, nordöstlich der Stadt Taraz und
                              nördlich der Karatau-Kette, die es nach Süden hin
                              begrenzt. Nach Nordosten schließen die Kasachische
                              Schwelle und nach Norden die Wüste Betpak-Dala an.
                              Namensgebend sind die beiden Binnenflüsse Chu und
                              Sarysu, die das Becken durchziehen und in
                              abflusslosen Seen und Salzsenken versickern.
                              Südöstlich grenzt Kasachstan an Kirgistan, südlich
                              an Usbekistan.
                              <Footnote sourceId="Q05" />
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="border rounded-xl p-5 bg-emerald-50 border-emerald-200">
                     <div className="flex items-start gap-3">
                        <Mountain
                           size={20}
                           strokeWidth={1.75}
                           className="mt-0.5 shrink-0 text-emerald-700"
                        />
                        <div>
                           <h4 className="font-semibold text-sm leading-snug mb-2 text-emerald-900">
                              Naturräumliche Einordnung – Landschaft, Klima,
                              Besiedlung
                           </h4>
                           <p className="text-sm text-stone-700 leading-relaxed">
                              Naturräumlich handelt es sich um ein weites,
                              flaches Senkungsbecken im Übergang von der
                              Trockensteppe zur Halbwüste. Es herrscht ein
                              kontinental-arides Klima mit geringen
                              Niederschlägen, heißen Sommern und kalten Wintern;
                              die Besiedlungsdichte ist sehr gering.
                              <Footnote sourceId="Q05" />
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="border rounded-xl p-5 bg-emerald-50 border-emerald-200">
                     <div className="flex items-start gap-3">
                        <Layers
                           size={20}
                           strokeWidth={1.75}
                           className="mt-0.5 shrink-0 text-emerald-700"
                        />
                        <div>
                           <h4 className="font-semibold text-sm leading-snug mb-2 text-emerald-900">
                              Topographische Einordnung – Großlandschaften
                              Zentralasiens
                           </h4>
                           <p className="text-sm text-stone-700 leading-relaxed">
                              Topographisch ordnet sich das Becken in die
                              ausgedehnten Tiefländer und Senken Zentralasiens
                              ein, zwischen der Turanischen Tiefebene im Westen
                              und dem Bergland des Tienschan im Südosten.
                              <Footnote sourceId="Q05" />
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="mt-12 lg:mt-16">
            <Image
               src="/images/world-map.png"
               alt="Weltkarte der weltweiten Uranförderländer"
               width={2319}
               height={1279}
               priority
               className="w-full h-auto rounded-xl shadow-lg"
            />
         </div>
      </SectionWrapper>
   )
}
