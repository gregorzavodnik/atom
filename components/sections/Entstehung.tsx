import SectionWrapper from '@/components/layout/SectionWrapper'
import Footnote from '@/components/content/Footnote'
import ChartPlaceholder from '@/components/content/ChartPlaceholder'
import Image from 'next/image'

export default function Entstehung() {
   return (
      <SectionWrapper id="entstehung" kicker="Sektion 01 · Geologie">
         <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="md:w-1/2 flex-shrink-0 md:sticky md:top-20 md:self-start">
               <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <Image
                     src="/images/supernova.png"
                     alt="Supernova-Explosion: kosmischer Ursprung schwerer Elemente wie Uran"
                     fill
                     sizes="(max-width: 768px) 100vw, 50vw"
                     className="object-cover"
                  />
               </div>
               <p className="mt-2 text-xs text-stone-500 italic">
                  Supernova-Explosion – kosmischer Geburtsort schwerer Elemente
               </p>
            </div>

            <div className="md:w-1/2">
               <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900">
                  Wie entsteht Uran?
               </h2>

               <div className="mt-8 space-y-5 text-stone-700 leading-relaxed max-w-prose">
                  <p>
                     Uran gehört zu den schwersten natürlich vorkommenden
                     Elementen im Universum. Es entstand nicht direkt beim
                     Urknall, denn damals bildeten sich fast ausschließlich
                     Wasserstoff und Helium. Erst viele Millionen Jahre später
                     entstanden schwerere Elemente im Inneren von Sternen durch
                     Kernfusion. Für Elemente schwerer als Eisen, darunter Uran,
                     reicht die normale Fusion jedoch nicht mehr aus.
                     Stattdessen müssen große Mengen freier Neutronen vorhanden
                     sein, damit Atomkerne schnell Neutronen einfangen können.
                     Diesen Vorgang nennt man „r-Prozess“ (rapid neutron
                     capture).
                     <Footnote sourceId="Q02" />
                  </p>
                  <p>
                     Heute gehen Forschende davon aus, dass Uran vor allem bei
                     extrem energiereichen kosmischen Ereignissen entsteht.
                     Besonders wichtig sind dabei Kollisionen von
                     Neutronensternen. Wenn zwei dieser extrem dichten
                     Sternreste verschmelzen, werden enorme Mengen
                     neutronenreicher Materie ins All geschleudert. Dort können
                     innerhalb kürzester Zeit schwere Elemente wie Gold, Blei
                     oder Uran entstehen. Beobachtungen der
                     Neutronenstern-Kollision GW170817 lieferten erstmals
                     direkte Hinweise darauf, dass solche Ereignisse tatsächlich
                     als „Element-Herstellungs-Fabriken“ für schwere Atome
                     dienen. Astronomische Messungen bestätigten dabei die
                     Entstehung schwerer Elemente durch den r-Prozess.
                     <Footnote sourceId="Q03" />
                  </p>
                  <p>
                     Ein Teil des Urans könnte außerdem bei bestimmten
                     Supernova-Explosionen massereicher Sterne gebildet worden
                     sein. Während des Kollapses eines Sterns entstehen extreme
                     Temperaturen und hohe Neutronendichten, die ebenfalls den
                     r-Prozess ermöglichen können. Es wird noch untersucht,
                     welchen Anteil Supernovae und welchen Anteil
                     Neutronenstern-Kollisionen an der gesamten Uranmenge im
                     Universum haben. Sicher ist jedoch, dass das Uran auf der
                     Erde aus Materie stammt, die lange vor der Entstehung
                     unseres Sonnensystems bei solchen Sternexplosionen und
                     Sternkollisionen erzeugt wurde.
                     <Footnote sourceId="Q04" />
                  </p>
               </div>
            </div>
         </div>
      </SectionWrapper>
   )
}
