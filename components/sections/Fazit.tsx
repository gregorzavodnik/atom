import SectionWrapper from '@/components/layout/SectionWrapper'
import Footnote from '@/components/content/Footnote'
import GlossaryTerm from '@/components/content/GlossaryTerm'

export default function Fazit() {
   return (
      <SectionWrapper id="fazit" kicker="Sektion 08 · Fazit">
         <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900">
            Fazit und Ausblick
         </h2>
         <p className="mt-5 text-xl text-stone-600 leading-relaxed max-w-prose">
            Atomenergie bleibt ein Technologiepfad mit enormem Potenzial und
            ungelösten Risiken – die Entscheidung liegt bei Gesellschaft und
            Politik.
         </p>

         <div className="mt-8 space-y-5 text-stone-700 leading-relaxed max-w-prose">
            <p>
               [TODO: Zusammenfassung der wichtigsten Ergebnisse aus allen
               Sektionen. Antwort auf die Leitfrage: Ist Atomenergie ein
               notwendiger Baustein der nachhaltigen Energiewende oder ein
               Auslaufmodell des 20. Jahrhunderts?]
               <Footnote sourceId="Q03" />
            </p>
            <p>
               [TODO: Ausblick auf neue Reaktorkonzepte – Small Modular Reactors
               (SMR) als kostengünstigere Alternative zu Großreaktoren,
               Thorium-Reaktoren, und langfristig die Kernfusion (ITER, DEMO).
               Welche Rolle könnte <GlossaryTerm term="Kernspaltung" /> noch
               spielen, wenn Fusion bis 2050 kommerziell werden sollte?]
               <Footnote sourceId="Q02" />
            </p>
            <p>
               [TODO: Persönliches Fazit des Teams: Was hat das Projekt ergeben?
               Welche Position nehmt ihr nach der Recherche ein? Bezug zur
               eigenen Lebenswelt und zur globalen Energiepolitik 2026 –
               Klimakrise vs. Technologierisiken.]
            </p>
         </div>
      </SectionWrapper>
   )
}
