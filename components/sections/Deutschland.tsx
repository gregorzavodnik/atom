import SectionWrapper from '@/components/layout/SectionWrapper'
import Timeline from '@/components/timeline/Timeline'
import { loadTimelineMd } from '@/lib/timeline'

export default function Deutschland() {
   const items = loadTimelineMd('content/deutschland-timeline.md')

   return (
      <SectionWrapper id="deutschland" kicker="Sektion 04 · Deutschland">
         <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900 mb-4">
            Atomenergie in Deutschland
         </h2>
         <Timeline
            items={items}
            ariaLabel="Chronologie der Kernenergie in Deutschland"
         />
      </SectionWrapper>
   )
}
