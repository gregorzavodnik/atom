import SectionWrapper from '@/components/layout/SectionWrapper'
import Footnote from '@/components/content/Footnote'
import GlossaryTerm from '@/components/content/GlossaryTerm'
import Figure from '@/components/content/Figure'
import ChartPlaceholder from '@/components/content/ChartPlaceholder'
import TimelinePlaceholder from '@/components/content/TimelinePlaceholder'

export default function Deutschland() {
   return (
      <SectionWrapper id="deutschland" kicker="Sektion 04 · Deutschland">
         <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900">
            Atomenergie in Deutschland
         </h2>
         <p className="mt-5 text-xl text-stone-600 leading-relaxed max-w-prose">
            Deutschland war Pionier der Kernkraftnutzung und beschloss als
            erstes großes Industrieland den vollständigen Ausstieg –
            abgeschlossen im April 2023.
         </p>

         <div className="mt-8 space-y-5 text-stone-700 leading-relaxed max-w-prose">
            <p>
               [TODO: Geschichte der deutschen Kernkraft seit dem ersten
               Forschungsreaktor 1957 bis zur Inbetriebnahme kommerzieller{' '}
               <GlossaryTerm term="Druckwasserreaktor" />
               en in den 1960er- und 70er-Jahren. Höhepunkt: 19 Reaktoren mit
               über 45 % Anteil am Strommix in den 1980er-Jahren.]
               <Footnote sourceId="Q03" />
            </p>
            <p>
               [TODO: Tschernobyl 1986 als Wendepunkt der gesellschaftlichen
               Akzeptanz in Deutschland. Erster Atomausstiegsbeschluss 2000
               unter Rot-Grün, Rücknahme 2010 unter Schwarz-Gelb, Beschleunigter
               Ausstieg 2011 nach Fukushima. Abschaltung der letzten drei
               Kraftwerke Emsland, Neckarwestheim 2 und Isar 2 am 15. April
               2023.]
               <Footnote sourceId="Q03" />
            </p>
            <p>
               [TODO: Aktueller Stand 2026 – Energiemix ohne Kernkraft.
               Verbleibende Herausforderungen: Zwischen- und{' '}
               <GlossaryTerm term="Endlagerung" /> hochradioaktiver Abfälle,
               Rückbau der Kraftwerke (Dauer ca. 20 Jahre). Debatte über
               Kernkraft-Wiedereinstieg nach europäischem Vorbild (Frankreich,
               Polen, Niederlande bauen neue Reaktoren).]
            </p>
         </div>

         <Figure
            caption="Meilensteine der Atomenergie in Deutschland von 1957 bis zur Abschaltung 2023"
            sourceId="Q03"
         >
            <TimelinePlaceholder title="Atomenergie in Deutschland 1957–2023" />
         </Figure>

         <Figure
            caption="Entwicklung des deutschen Energiemixes 1990–2024 (Anteile in % der Bruttostromerzeugung)"
            sourceId="Q03"
         >
            <ChartPlaceholder title="Energiemix Deutschland 1990–2024" />
         </Figure>
      </SectionWrapper>
   )
}
