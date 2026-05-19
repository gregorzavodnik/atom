import SectionWrapper from '@/components/layout/SectionWrapper'
import Footnote from '@/components/content/Footnote'
import GlossaryTerm from '@/components/content/GlossaryTerm'
import Figure from '@/components/content/Figure'
import ChartPlaceholder from '@/components/content/ChartPlaceholder'

export default function Entstehung() {
   return (
      <SectionWrapper id="entstehung" kicker="Sektion 01 · Geologie">
         <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900">
            Wie entsteht Uran?
         </h2>
         <p className="mt-5 text-xl text-stone-600 leading-relaxed max-w-prose">
            Uran ist ein natürlich vorkommendes Schwermetall, das vor Milliarden
            Jahren in sterbenden Sternen entstand und heute tief in der
            Erdkruste gefunden wird.
         </p>

         <div className="mt-8 space-y-5 text-stone-700 leading-relaxed max-w-prose">
            <p>
               [TODO: Beschreibung der nukleosynthetischen Entstehung von Uran
               in Supernovaexplosionen und dessen Einlagerung in der frühen
               Erdkruste vor ca. 4,5 Milliarden Jahren. Uran ist das schwerste
               natürlich vorkommende Element mit der Ordnungszahl 92.]
               <Footnote sourceId="Q01" />
            </p>
            <p>
               Natürliches Uran besteht zu etwa 99,3 % aus dem Isotop U-238 und
               zu nur ca. 0,7 % aus dem spaltbaren Isotop U-235, das für die
               Kernspaltung in Reaktoren genutzt wird. Die{' '}
               <GlossaryTerm term="Halbwertszeit" /> von U-238 beträgt rund 4,5
               Milliarden Jahre – annähernd das Alter der Erde.
               <Footnote sourceId="Q01" />
            </p>
            <p>
               [TODO: Beschreibung der geologischen Vorkommen: Uran reichert
               sich bevorzugt in Graniten, Pegmatiten und Sedimentgesteinen an.
               Erläuterung der wichtigsten Lagerstättentypen (Unconformity-Typ,
               Sandstein-Typ, Breccia-Typ) und deren wirtschaftliche Bedeutung.]
            </p>
         </div>

         <Figure
            caption="Zerfallsreihe des Uranisotops U-238 mit Zwischenprodukten bis zum stabilen Blei-206"
            sourceId="Q01"
         >
            <ChartPlaceholder title="Zerfallsreihe U-238" />
         </Figure>
      </SectionWrapper>
   )
}
