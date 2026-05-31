export type TimelineItemStatus = 'done' | 'current' | 'upcoming'

export type TimelineItem = {
   id: string
   date: string // ISO 8601 (YYYY-MM-DD), used for sorting
   dateLabel?: string // display override, e.g. "1955–1969" for phase ranges
   title: string
   descriptionHtml: string
   status: TimelineItemStatus
}

export function formatTimelineDate(iso: string): string {
   if (iso === '9999-01-01') return 'Datum unbekannt'
   // Bare year sentinel: YYYY-01-01
   if (iso.endsWith('-01-01')) return iso.slice(0, 4)
   // Month + year (day = 01 sentinel): YYYY-MM-01
   if (iso.endsWith('-01')) {
      const [y, m] = iso.split('-').map(Number)
      return new Date(y, m - 1, 1).toLocaleDateString('de-DE', {
         year: 'numeric',
         month: 'long',
      })
   }
   // Full date
   const [y, m, d] = iso.split('-').map(Number)
   return new Date(y, m - 1, d).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
   })
}
