import SectionWrapper from '@/components/layout/SectionWrapper'
import Footnote from '@/components/content/Footnote'
import MapPlaceholder from '@/components/content/MapPlaceholder'

export default function Konflikte() {
   return (
      <SectionWrapper id="konflikte" kicker="Sektion 06 · Geopolitik">
         <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900">
            Lokale und globale Konflikte
         </h2>
         <div className="mt-8 grid gap-x-12 gap-y-5 md:grid-cols-2 text-stone-700 leading-relaxed">
            <div className="space-y-5">
               <p>
                  Von 1946 bis 1990 förderte die SDAG Wismut in Sachsen und
                  Thüringen Uran für das sowjetische Atomprogramm und zählte zu
                  den größten Produzenten weltweit. Zurück blieben radioaktive
                  Halden und Gesundheitsschäden bei Bergleuten; die bundeseigene
                  Wismut GmbH saniert die Altlasten seit 1991 mit
                  Milliardenaufwand.
                  <Footnote sourceId="Q52" />
               </p>
               <p>
                  Der mehrheitlich französische Staatskonzern Orano (früher
                  Areva) betreibt seit Jahrzehnten Uranminen in Niger. Nach dem
                  Militärputsch von 2023 entzog Niger 2024 die
                  Betriebsgenehmigung für die Imouraren-Mine; Orano verlor die
                  Kontrolle über die Arlit-Betreiberin Somaïr und leitete vor
                  dem ICSID Schiedsverfahren ein.
                  <Footnote sourceId="Q53" />
               </p>
               <p>
                  Weltweit stammt nach Angaben des Uranatlas rund 70 Prozent des
                  geförderten Urans von Land indigener Völker, etwa in Kanada,
                  Australien, Niger und den USA. Daraus entstehen wiederkehrende
                  Konflikte um Landrechte, Menschenrechte und gesundheitliche
                  sowie ökologische Folgen des Abbaus für die ansässige
                  Bevölkerung.
                  <Footnote sourceId="Q54" />
               </p>
            </div>
            <div className="space-y-5">
               <p>
                  Auf dem Gebiet der Navajo in den USA liegen über 500
                  verlassene Uranminen. Studien zufolge haben Navajo-Männer, die
                  im Uranabbau arbeiteten, eine 28-mal höhere
                  Wahrscheinlichkeit, an Krebs zu erkranken. Angesichts neuer
                  Förderpläne der US-Regierung fürchten Anwohner eine
                  Wiederholung der gesundheitlichen Folgen.
                  <Footnote sourceId="Q55" />
               </p>
               <p>
                  Der Uranabbau in Australien betrifft das Land der Aborigines,
                  etwa im Kakadu-Nationalpark. Strahlende Abraumhalden,
                  kontaminiertes Wasser und hoher Wasserverbrauch gelten als
                  ungelöste Probleme. Nach jahrelangen Protesten stoppte der
                  Mirarr-Clan 2002 die Jabiluka-Mine; die sog.
                  "Koongarra"-Lagerstätte wurde dem Nationalpark eingegliedert
                  statt abgebaut
                  <Footnote sourceId="Q56" />
               </p>
               <p>
                  Kasachstan ist seit Jahren der weltgrößte Uranproduzent. Die
                  EU bezog 2023 rund 23,5 Prozent ihres Urans aus Russland und
                  21 Prozent aus Kasachstan; 18 osteuropäische Reaktoren lassen
                  sich nur mit russischen Brennelementen betreiben. In Europa
                  selbst wird kaum noch Uran gefördert.
                  <Footnote sourceId="Q57" />
               </p>
            </div>
         </div>
      </SectionWrapper>
   )
}
