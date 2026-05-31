import SectionWrapper from '@/components/layout/SectionWrapper'
import Footnote from '@/components/content/Footnote'
import GlossaryTerm from '@/components/content/GlossaryTerm'
import MapPlaceholder from '@/components/content/MapPlaceholder'

export default function Konflikte() {
   return (
      <SectionWrapper id="konflikte" kicker="Sektion 06 · Geopolitik">
         <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900">
            Lokale und globale Konflikte
         </h2>
         <p className="mt-5 text-xl text-stone-600 leading-relaxed max-w-prose">
            Uran ist ein geopolitisch sensibler Rohstoff. Vom Abbau in Niger bis
            zur Anreicherung im Iran entstehen Konflikte auf mehreren Ebenen.
         </p>

         <div className="mt-8 space-y-5 text-stone-700 leading-relaxed max-w-prose">
            <p>
               [TODO: Überblick lokaler Konflikte – Uranminen in Niger (Arlit):
               Vorwürfe gegen den französischen Konzern Orano (ehem. AREVA)
               wegen mangelnder Strahlenschutzmaßnahmen und
               Grundwasserkontamination. Verbindung zu Tuareg-Aufständen
               2007–2009 und dem Niger-Putsch 2023.]
               <Footnote sourceId="Q02" />
            </p>
            <p>
               Auf globaler Ebene ist der Streit um{' '}
               <GlossaryTerm term="Anreicherung" /> das wichtigste Konfliktfeld:
               Jede Nation mit Anreicherungstechnologie verfügt potenziell über
               den Schlüssel zu Kernwaffen. Der Iran-Nuklearstreit und die
               Nordkorea-Krise illustrieren dieses Proliferationsrisiko
               eindrücklich.
               <Footnote sourceId="Q01" />
            </p>
            <p>
               [TODO: Russland als Uranlieferant und Reaktorexporteur –
               geopolitische Abhängigkeiten der EU nach dem Ukrainekrieg 2022.
               Kasachstans Balancepolitik zwischen Russland und China.
               Wettbewerb USA vs. China vs. Russland um globale Reaktorexporte
               als außenpolitisches Instrument.]
            </p>
         </div>
      </SectionWrapper>
   )
}
