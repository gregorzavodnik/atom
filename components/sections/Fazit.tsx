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
               In mehreren messbaren Punkten ist Kernenergie vorteilhafter, als
               ihr Ruf in Deutschland nahelegt. Über den Lebenszyklus gehört sie
               zu den treibhausgasärmsten Stromquellen: Die Bundeszentrale für
               politische Bildung nennt nach IPCC-Angaben einen Median von etwa
               12 g CO₂-Äquivalent pro Kilowattstunde, gegenüber rund 820 g bei
               Kohlekraftwerken. Bei der Sicherheit gilt Ähnliches. Je erzeugter
               Terawattstunde bleibt Kernkraft selbst mit Tschernobyl und
               Fukushima eine der sichersten Energiequellen und liegt damit weit
               unter Braunkohle (rund 32,7 Tote) und Steinkohle (rund 24,6),
               deren Opfer fast nur durch Feinstaub entstehen. Die wenigen
               großen Reaktorunfälle prägen zwar die Wahrnehmung, fallen
               statistisch aber kaum ins Gewicht neben der täglichen Last
               fossiler Verbrennung.
               <Footnote sourceId="Q48" />
               <Footnote sourceId="Q65" />
               <Footnote sourceId="Q66" />
            </p>
            <p>
               Wirtschaftlich überzeugt vor allem der Betrieb bestehender
               Anlagen. Frankreich erzeugt rund zwei Drittel seines Stroms
               nuklear (2024 etwa 70 %), kam 2024 auf rund 570 TWh und war mit
               etwa 105 TWh Nettoexport größter Stromexporteur und zugleich
               Deutschlands wichtigster Lieferant. Da der Brennstoff nur einen
               kleinen Kostenanteil hat, rechnet sich eine hohe Auslastung über
               Jahrzehnte. Beim Neubau dreht sich das Bild jedoch um. Das DIW
               Berlin hält Atomkraft für unwirtschaftlich, und der finnische
               Reaktor Olkiluoto 3 brauchte 17 Jahre Bauzeit, bei einer
               Kostensteigerung von knapp 4 auf über 12 Milliarden. Auch das
               Fraunhofer ISE sieht die Gestehungskosten neuer Kraftwerke klar
               über denen der Erneuerbaren.
               <Footnote sourceId="Q48" />
               <Footnote sourceId="Q61" />
               <Footnote sourceId="Q63" />
               <Footnote sourceId="Q64" />
            </p>
            <p>
               Politisch hat sich die Lage zuletzt gedreht. Die EU-Kommission
               stufte mit der Delegierten Verordnung (EU) 2022/1214 bestimmte
               Nuklearaktivitäten auf Basis wissenschaftlicher Gutachten unter
               strengen Bedingungen als taxonomiekonform ein; das Europäische
               Parlament erhob keine Einwände, und das Gericht der EU wies am
               10. September 2025 die Klage Österreichs ab und bestätigte einen
               möglichen Klimaschutzbeitrag. Länder wie Frankreich, Schweden und
               Polen bauen aus oder neu. Die Gegenseite ist ebenso real:
               Deutschland vollzog am 15. April 2023 den Atomausstieg, die
               Endlagerfrage bleibt offen, und Österreich legte 2025
               Rechtsmittel gegen das Urteil ein. Die stärksten Argumente
               liefern Klimabilanz und Sicherheit; die ernsthaftesten Einwände
               sind die Neubaukosten und das verbleibende Unfall- und
               Abfallrisiko.
               <Footnote sourceId="Q39" />
               <Footnote sourceId="Q48" />
               <Footnote sourceId="Q67" />
               <Footnote sourceId="Q68" />
               <Footnote sourceId="Q69" />
            </p>
         </div>
      </SectionWrapper>
   )
}
