import { readFileSync } from 'fs'
import path from 'path'
import { formatTimelineDate } from '@/lib/timeline-types'
import type { TimelineItem, TimelineItemStatus } from '@/lib/timeline-types'

export type { TimelineItem, TimelineItemStatus }
export { formatTimelineDate }

// ─── Date normalisation ───────────────────────────────────────────────────────

const GERMAN_MONTHS: Record<string, string> = {
   januar: '01',
   jan: '01',
   februar: '02',
   feb: '02',
   märz: '03',
   mär: '03',
   mar: '03',
   april: '04',
   apr: '04',
   mai: '05',
   juni: '06',
   jun: '06',
   juli: '07',
   jul: '07',
   august: '08',
   aug: '08',
   september: '09',
   sep: '09',
   oktober: '10',
   okt: '10',
   november: '11',
   nov: '11',
   dezember: '12',
   dez: '12',
}

function normalizeDate(raw: string): string {
   const s = raw.trim()

   // DD.MM.YYYY
   const dmy = s.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/)
   if (dmy) {
      return `${dmy[3]}-${dmy[2].padStart(2, '0')}-${dmy[1].padStart(2, '0')}`
   }

   // "Month YYYY" or "Month. YYYY" (German month name)
   const monthYear = s.match(/^([A-Za-zÄÖÜäöüß]+\.?)\s+(\d{4})$/)
   if (monthYear) {
      const key = monthYear[1].replace('.', '').toLowerCase()
      const month = GERMAN_MONTHS[key]
      if (month) return `${monthYear[2]}-${month}-01`
   }

   // YYYY–YYYY or YYYY/YYYY — use the first year only for sorting
   const yearRange = s.match(/^(\d{4})[–\-\/]/)
   if (yearRange) return `${yearRange[1]}-01-01`

   // Bare YYYY
   const year = s.match(/^(\d{4})$/)
   if (year) return `${year[1]}-01-01`

   console.warn(`[timeline] Datum konnte nicht geparst werden: "${raw}"`)
   return '9999-01-01'
}

// ─── Inline-Markdown renderer (trusted local content only) ───────────────────

function renderInline(text: string): string {
   return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(
         /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
         '<a href="$2" class="underline" target="_blank" rel="noopener noreferrer">$1</a>'
      )
}

function stripInline(text: string): string {
   return text
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
}

// ─── Title / description extraction ─────────────────────────────────────────

function extractFields(cell: string): {
   title: string
   descriptionHtml: string
} {
   // **Bold** [– or : or —] rest
   const boldLead = cell.match(/^\*\*(.*?)\*\*(?:\s*[–—:\-]\s*(.*))?$/)
   if (boldLead) {
      return {
         title: boldLead[1].trim(),
         descriptionHtml: boldLead[2] ? renderInline(boldLead[2].trim()) : '',
      }
   }

   // Short title [; or –] rest (title must be ≤ 80 chars, no separators inside)
   const split = cell.match(/^([^;–—]{3,80})[;–]\s*(.+)$/)
   if (split) {
      return {
         title: stripInline(split[1].trim()),
         descriptionHtml: renderInline(split[2].trim()),
      }
   }

   return { title: stripInline(cell), descriptionHtml: '' }
}

// ─── Status from date ────────────────────────────────────────────────────────

function deriveStatus(iso: string): TimelineItemStatus {
   if (iso === '9999-01-01') return 'upcoming'
   const today = new Date().toISOString().slice(0, 10)
   if (iso > today) return 'upcoming'
   if (iso.slice(0, 7) === today.slice(0, 7)) return 'current'
   return 'done'
}

// ─── Parser ──────────────────────────────────────────────────────────────────

type EventEntry = {
   isoDate: string
   rawDate: string
   title: string
   descriptionHtml: string
}
type PhaseGroup = { phaseTitle: string; events: EventEntry[] }

export function parseTimelineMd(content: string): TimelineItem[] {
   const phases: PhaseGroup[] = []
   let current: PhaseGroup | null = null

   for (const raw of content.split('\n')) {
      const line = raw.trim()

      // ## heading → start a new phase group
      if (line.startsWith('## ')) {
         const m = line.match(/^## (?:Phase \d+\s*[–\-]\s*)?(.+)$/)
         if (m) {
            // Strip trailing "(YYYY…)" or "(1970er)" from phase title
            const phaseTitle = m[1]
               .trim()
               .replace(/\s*\([^)]+\)\s*$/, '')
               .trim()
            current = { phaseTitle, events: [] }
            phases.push(current)
         }
         continue
      }

      if (!current || !line.startsWith('|')) continue
      if (line.includes('---')) continue
      const lower = line.toLowerCase()
      if (
         lower.includes('| jahr |') ||
         lower.includes('| datum |') ||
         lower.includes('| ereignis |')
      )
         continue

      const cells = line
         .split('|')
         .map((c) => c.trim())
         .filter((c) => c.length > 0)
      if (cells.length < 2) continue

      const rawDate = cells[0]
      const rawContent = cells.slice(1).join(' | ')
      if (!rawDate || !rawContent) continue

      const isoDate = normalizeDate(rawDate)
      const { title, descriptionHtml } = extractFields(rawContent)

      if (!title) {
         console.warn(
            `[timeline] Eintrag ohne Titel übersprungen: "${rawContent}"`
         )
         continue
      }

      current.events.push({ isoDate, rawDate, title, descriptionHtml })
   }

   return phases
      .filter((p) => p.events.length > 0)
      .map((phase, i) => {
         const sorted = [...phase.events].sort((a, b) =>
            a.isoDate.localeCompare(b.isoDate)
         )
         const firstIso = sorted[0].isoDate
         const lastIso = sorted[sorted.length - 1].isoDate
         const startYear = firstIso.slice(0, 4)
         const endYear = lastIso.slice(0, 4)
         const dateLabel =
            startYear === endYear ? startYear : `${startYear}–${endYear}`

         const eventsHtml = sorted
            .map((ev) => {
               const dateStr = formatTimelineDate(ev.isoDate)
               const desc = ev.descriptionHtml
                  ? `<span> – ${ev.descriptionHtml}</span>`
                  : ''
               return `<li><span>${dateStr}</span><strong>${ev.title}</strong>${desc}</li>`
            })
            .join('')

         return {
            id: `phase-${i + 1}`,
            date: firstIso,
            dateLabel,
            title: phase.phaseTitle,
            descriptionHtml: `<ul>${eventsHtml}</ul>`,
            status: deriveStatus(lastIso),
         }
      })
      .sort((a, b) => a.date.localeCompare(b.date))
}

export function loadTimelineMd(relativePath: string): TimelineItem[] {
   const absolute = path.join(process.cwd(), relativePath)
   const content = readFileSync(absolute, 'utf-8')
   return parseTimelineMd(content)
}
