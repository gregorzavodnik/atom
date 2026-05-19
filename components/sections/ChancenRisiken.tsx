import SectionWrapper from '@/components/layout/SectionWrapper'
import Footnote from '@/components/content/Footnote'
import GlossaryTerm from '@/components/content/GlossaryTerm'
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from '@/components/ui/table'

const rows: { type: 'pro' | 'contra'; aspect: string; detail: string }[] = [
   {
      type: 'pro',
      aspect: 'Klimaschutz',
      detail:
         '[TODO: Geringe CO₂-Emissionen je kWh im Lebenszyklus – vergleichbar mit Windkraft]',
   },
   {
      type: 'pro',
      aspect: 'Grundlastfähigkeit',
      detail:
         '[TODO: 24/7-Verfügbarkeit unabhängig von Wetter – wichtige Ergänzung zu fluktuierenden Erneuerbaren]',
   },
   {
      type: 'pro',
      aspect: 'Flächenverbrauch',
      detail:
         '[TODO: Sehr geringer Flächenbedarf pro erzeugter kWh gegenüber Windparks und Freiflächen-PV]',
   },
   {
      type: 'pro',
      aspect: 'Energiesicherheit',
      detail:
         '[TODO: Reduktion von Gasimportabhängigkeit; Uran aus diversifizierten Quellen (Kasachstan, Kanada, Australien)]',
   },
   {
      type: 'contra',
      aspect: 'Endlagerung',
      detail:
         '[TODO: Kein Endlager in Betrieb; hochradioaktiver Abfall bleibt 100.000 Jahre gefährlich]',
   },
   {
      type: 'contra',
      aspect: 'Unfallrisiko',
      detail:
         '[TODO: Katastrophale Auswirkungen bei schweren Störfällen (Tschernobyl 1986, Fukushima 2011)]',
   },
   {
      type: 'contra',
      aspect: 'Investitionskosten',
      detail:
         '[TODO: Extrem hohe Investitionskosten und häufige Bauzeitverzögerungen – Beispiel Hinkley Point C (UK)]',
   },
   {
      type: 'contra',
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

         <div className="mt-10 overflow-x-auto rounded-lg border border-stone-200">
            <Table>
               <TableHeader>
                  <TableRow className="bg-stone-50">
                     <TableHead className="w-28">Typ</TableHead>
                     <TableHead className="w-52">Aspekt</TableHead>
                     <TableHead>Erläuterung (TODO)</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {rows.map((row, i) => (
                     <TableRow key={i}>
                        <TableCell>
                           <span
                              className={
                                 row.type === 'pro'
                                    ? 'inline-block px-2 py-0.5 text-xs rounded-full bg-emerald-100 text-emerald-700 font-medium'
                                    : 'inline-block px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-700 font-medium'
                              }
                           >
                              {row.type === 'pro' ? 'Chance' : 'Risiko'}
                           </span>
                        </TableCell>
                        <TableCell className="font-medium text-stone-800">
                           {row.aspect}
                        </TableCell>
                        <TableCell className="text-stone-600 text-sm">
                           {row.detail}
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </div>
      </SectionWrapper>
   )
}
