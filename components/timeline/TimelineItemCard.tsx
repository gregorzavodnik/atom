'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { formatTimelineDate } from '@/lib/timeline-types'
import type { TimelineItem, TimelineItemStatus } from '@/lib/timeline-types'

const DOT_COLOR: Record<TimelineItemStatus, string> = {
  done: 'bg-stone-400',
  current: 'bg-amber-500 ring-4 ring-amber-100',
  upcoming: 'bg-stone-200 ring-2 ring-stone-300',
}

interface Props {
  item: TimelineItem
  index: number
  isFirst: boolean
  isLast: boolean
}

export default function TimelineItemCard({ item, index, isFirst, isLast }: Props) {
  const ref = useRef<HTMLLIElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const isEven = index % 2 === 0
  const dotClass = DOT_COLOR[item.status]

  // Vertical line bounds: starts at dot-center for first item, ends at dot-center for last
  const lineTop = isFirst ? 'top-7' : 'top-0'
  const lineBottom = isLast ? 'bottom-[calc(100%-1.75rem)]' : 'bottom-0'

  return (
    <li
      ref={ref}
      className={cn(
        'grid grid-cols-[2rem_1fr] md:grid-cols-[1fr_2rem_1fr] gap-x-4',
        'transition-all duration-500 ease-out',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
      )}
      aria-label={`${item.dateLabel ?? formatTimelineDate(item.date)}: ${item.title}`}
    >
      {/* Card ─ mobile: col 2 right of dot; desktop even: col 1 left; desktop odd: col 3 right */}
      <div
        className={cn(
          'py-3 col-start-2 row-start-1',
          isEven
            ? 'md:col-start-1 md:col-end-2 md:pr-5'
            : 'md:col-start-3 md:col-end-4 md:pl-5',
        )}
      >
        <Card item={item} />
      </div>

      {/* Dot + vertical line ─ mobile: col 1; desktop: col 2 */}
      <div
        className={cn(
          'col-start-1 row-start-1 relative flex justify-center',
          'md:col-start-2 md:col-end-3',
        )}
        aria-hidden="true"
      >
        <div
          className={cn('absolute w-px bg-stone-200', lineTop, lineBottom)}
        />
        <div
          className={cn(
            'relative z-10 mt-5 w-4 h-4 rounded-full shrink-0 transition-colors',
            dotClass,
          )}
        />
      </div>
    </li>
  )
}

function Card({ item }: { item: TimelineItem }) {
  const displayDate = item.dateLabel ?? formatTimelineDate(item.date)

  return (
    <article className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-200 focus-within:ring-2 focus-within:ring-stone-400 focus-within:ring-offset-2">
      <time dateTime={item.date} className="block text-xs font-mono text-stone-400 mb-1">
        {displayDate}
      </time>
      <h3 className="font-semibold text-stone-900 text-base leading-snug mb-3">
        {item.title}
      </h3>
      {item.descriptionHtml && (
        <div
          className={cn(
            'text-sm leading-relaxed',
            // List layout
            '[&_ul]:space-y-2',
            '[&_li]:flex [&_li]:flex-col [&_li]:gap-0.5',
            '[&_li]:border-b [&_li]:border-stone-100 [&_li]:pb-2',
            '[&_li:last-child]:border-none [&_li:last-child]:pb-0',
            // Date span (first child of li)
            '[&_li>span:first-child]:text-xs [&_li>span:first-child]:font-mono [&_li>span:first-child]:text-stone-400',
            // Event title
            '[&_strong]:font-semibold [&_strong]:text-stone-800',
            // Description text
            '[&_li>span:last-child]:text-stone-500',
            '[&_em]:italic',
            '[&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-stone-800',
          )}
          // Safe: HTML produced by our own parser from a trusted local .md file, never from user input
          dangerouslySetInnerHTML={{ __html: item.descriptionHtml }}
        />
      )}
    </article>
  )
}
