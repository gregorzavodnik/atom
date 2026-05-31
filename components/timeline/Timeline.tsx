/**
 * Timeline – wiederverwendbare vertikale Zeitstrahl-Komponente.
 *
 * Verwendung (in einer Server Component):
 *   import { loadTimelineMd } from '@/lib/timeline'
 *   import Timeline from '@/components/timeline/Timeline'
 *
 *   const items = loadTimelineMd('content/meine-timeline.md')
 *   return <Timeline items={items} />
 *
 * Layout: Desktop → Linie mittig, Einträge alternierend links/rechts.
 *         Mobile  → Linie links, alle Einträge rechtsseitig.
 */

import type { TimelineItem } from '@/lib/timeline-types'
import TimelineItemCard from './TimelineItemCard'

interface Props {
   items: TimelineItem[]
   ariaLabel?: string
}

export default function Timeline({
   items,
   ariaLabel = 'Chronologischer Zeitstrahl',
}: Props) {
   if (items.length === 0) {
      return (
         <p className="text-stone-400 text-sm italic">
            Keine Timeline-Einträge gefunden.
         </p>
      )
   }

   return (
      <section aria-label={ariaLabel}>
         <ol className="relative flex flex-col">
            {items.map((item, index) => (
               <TimelineItemCard
                  key={item.id}
                  item={item}
                  index={index}
                  isFirst={index === 0}
                  isLast={index === items.length - 1}
               />
            ))}
         </ol>
      </section>
   )
}
