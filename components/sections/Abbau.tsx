import SectionWrapper from '@/components/layout/SectionWrapper'
import Footnote from '@/components/content/Footnote'
import GlossaryTerm from '@/components/content/GlossaryTerm'
import Figure from '@/components/content/Figure'
import ChartPlaceholder from '@/components/content/ChartPlaceholder'
import MapPlaceholder from '@/components/content/MapPlaceholder'

export default function Abbau() {
   return (
      <SectionWrapper id="abbau" kicker="Sektion 02 · Rohstoffgeographie">
         <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900">
            Wo wird Uran abgebaut?
         </h2>
         <p className="mt-5 text-xl text-stone-600 leading-relaxed max-w-prose">
            Die weltweite Uranproduktion konzentriert sich auf wenige Länder.
            Kasachstan, Kanada und Namibia dominieren den globalen Markt.
         </p>

         <div className="mt-8 space-y-5 text-stone-700 leading-relaxed max-w-prose">
            <p>
               [TODO: Übersicht der globalen Uranproduktion in Tonnen Uran (tU)
               pro Jahr. Kasachstan produziert mit Abstand am meisten – zuletzt
               über 21.000 tU jährlich. Kanada und Australien folgen.
               Gesamtweltproduktion ca. 48.000–50.000 tU/Jahr.]
               <Footnote sourceId="Q02" />
            </p>
            <p>
               Das gewonnene Erz wird vor Ort aufbereitet. Dabei entsteht
               zunächst das sogenannte <GlossaryTerm term="Yellowcake" />{' '}
               (Urankonzentrat), das anschließend zur{' '}
               <GlossaryTerm term="Anreicherung" /> weitertransportiert und zu
               Kernbrennstoff verarbeitet wird. [TODO: Beschreibung der
               Abbaumethoden – Tagebau, Untertagebergbau und In-situ-Laugung
               (ISL), mit Vor- und Nachteilen je Methode.]
               <Footnote sourceId="Q02" />
            </p>
            <p>
               [TODO: Umwelt- und Sozialauswirkungen des Uranabbaus:
               Strahlenbelastung für Bergleute, Kontamination von Grundwasser,
               Rekultivierungspflichten. Fallbeispiel: Niger/Arlit und die Minen
               des französischen Konzerns Orano (ehem. AREVA).]
            </p>
         </div>

         <Figure
            caption="Weltweite Verteilung bekannter Uranvorkommen und aktiver Abbaustandorte"
            sourceId="Q02"
         >
            <MapPlaceholder title="Weltweite Uranvorkommen" />
         </Figure>

         <Figure
            caption="Die zehn größten Uranproduzenten weltweit nach Jahresproduktion in Tonnen Uran (2024)"
            sourceId="Q02"
         >
            <ChartPlaceholder title="Top 10 Uranproduzenten 2024" />
         </Figure>
      </SectionWrapper>
   )
}
