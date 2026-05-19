import SectionWrapper from '@/components/layout/SectionWrapper'
import Footnote from '@/components/content/Footnote'
import GlossaryTerm from '@/components/content/GlossaryTerm'
import SustainabilitySquare from '@/components/content/SustainabilitySquare'

export default function Bewertung() {
   return (
      <SectionWrapper id="bewertung" kicker="Sektion 07 · Nachhaltigkeit">
         <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900">
            Bewertung: Viereck der Nachhaltigkeit
         </h2>
         <p className="mt-5 text-xl text-stone-600 leading-relaxed max-w-prose">
            Das Viereck der Nachhaltigkeit bewertet Atomenergie in vier
            Dimensionen: ökologisch, ökonomisch, sozial und
            politisch-institutionell.
         </p>

         <div className="mt-8 space-y-5 text-stone-700 leading-relaxed max-w-prose">
            <p>
               [TODO: Erklärung der Methodik – das Viereck der Nachhaltigkeit
               als Instrument der Geographie-Didaktik. Die vier Dimensionen
               bilden ein Spannungsfeld, in dem sich jeder Rohstoff und jede
               Technologie verorten lässt. Verbesserungen in einer Dimension
               gehen häufig zulasten einer anderen.]
               <Footnote sourceId="Q03" />
            </p>
            <p>
               Die Bewertung am Beispiel des{' '}
               <GlossaryTerm term="Castor-Behälter" />
               -Transports zeigt das Dilemma exemplarisch: Technisch
               beherrschbar und ökonomisch kalkulierbar, aber gesellschaftlich
               hochumstritten und politisch-institutionell noch nicht
               abschließend geregelt – kein Endlager existiert bisher.
               <Footnote sourceId="Q03" />
            </p>
            <p>
               [TODO: Ausführliche Begründung der Punktevergabe in allen vier
               Dimensionen durch das Team. Vergleich mit anderen Energieträgern:
               Wie schneidet Atomenergie im Vergleich zu Kohle, Gas, Wind und
               Photovoltaik ab? Quellen für jede Teildimension angeben.]
            </p>
         </div>

         <SustainabilitySquare />
      </SectionWrapper>
   )
}
