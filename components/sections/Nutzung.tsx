import SectionWrapper from '@/components/layout/SectionWrapper'
import Footnote from '@/components/content/Footnote'
import GlossaryTerm from '@/components/content/GlossaryTerm'
import Figure from '@/components/content/Figure'
import ChartPlaceholder from '@/components/content/ChartPlaceholder'

export default function Nutzung() {
   return (
      <SectionWrapper id="nutzung" kicker="Sektion 03 · Anwendungsfelder">
         <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900">
            Wofür wird Atomenergie genutzt?
         </h2>
         <p className="mt-5 text-xl text-stone-600 leading-relaxed max-w-prose">
            Kernenergie hat drei Hauptanwendungsgebiete: Stromerzeugung,
            militärische Nutzung und Medizin. Die zivile Stromproduktion
            dominiert den Energiemix vieler Länder.
         </p>

         <div className="mt-8 space-y-5 text-stone-700 leading-relaxed max-w-prose">
            <p>
               Weltweit liefern über 400 Kernkraftwerke in rund 30 Ländern
               zuverlässig Strom. Der <GlossaryTerm term="Brennstab" /> aus
               angereichertem Urandioxid (UO₂) ist das Herzstück jedes Reaktors:
               Er ermöglicht die kontrollierte{' '}
               <GlossaryTerm term="Kernspaltung" />, bei der Wärme entsteht, die
               Turbinen antreibt und schließlich Strom erzeugt.
               <Footnote sourceId="Q01" />
            </p>
            <p>
               [TODO: Militärische Nutzung – Kernwaffen (waffenfähiges Uran mit{' '}
               {'>'}90 % U-235), nukleare U-Boote und Flugzeugträger.
               Proliferationsrisiken durch Dual-Use-Technologien (Anreicherung
               für Brennstoff vs. Bomben). Internationale Kontrollregime: NPT,
               CTBT, IAEA-Safeguards.]
            </p>
            <p>
               [TODO: Medizinische Nutzung – Nuklearmedizin: Diagnostik mit
               Technetium-99m (kurzlebig, aus Molybdän-99 gewonnen),
               Strahlentherapie gegen Krebs (Cobalt-60), Sterilisation
               medizinischer Güter durch Gammastrahlung. Forschungsreaktoren für
               Materialwissenschaft und Isotopenproduktion.]
               <Footnote sourceId="Q02" />
            </p>
         </div>

         <Figure
            caption="Anteil der Kernkraft an der globalen Stromerzeugung im historischen Verlauf seit 1970"
            sourceId="Q01"
         >
            <ChartPlaceholder title="Anteil Kernkraft am globalen Strommix" />
         </Figure>
      </SectionWrapper>
   )
}
