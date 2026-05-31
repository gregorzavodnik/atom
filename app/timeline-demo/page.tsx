import { loadTimelineMd } from '@/lib/timeline'
import Timeline from '@/components/timeline/Timeline'

export const metadata = { title: 'Timeline Demo – Kernenergie Deutschland' }

export default function TimelineDemoPage() {
  const items = loadTimelineMd('content/deutschland-timeline.md')

  return (
    <main className="min-h-screen bg-stone-50 py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-3">
          Sektion 04 · Deutschland
        </p>
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900 mb-4">
          Atomenergie in Deutschland
        </h1>
        <p className="text-stone-500 text-base mb-16 max-w-2xl">
          Chronologie der zentralen Ereignisse von den Anfängen 1955 bis zum
          endgültigen Ausstieg 2023 und der aktuellen Debatte.
        </p>
        <Timeline items={items} ariaLabel="Chronologie der Kernenergie in Deutschland" />
      </div>
    </main>
  )
}
