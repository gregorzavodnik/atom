import type { Metadata } from 'next'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
   title: 'Impressum – Atomenergie',
   description: 'Impressum des Geographie-Schulprojekts zur Atomenergie.',
}

export default function ImpressumPage() {
   return (
      <main className="min-h-screen py-16">
         <div className="max-w-3xl mx-auto px-6 md:px-12">
            <Link
               href="/"
               className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-teal-800 transition-colors mb-10"
            >
               ← Zurück zur Hauptseite
            </Link>

            <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-3">
               Rechtliches
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900 mb-10">
               Impressum
            </h1>

            <div className="space-y-8 text-stone-700">
               <section>
                  <h2 className="font-semibold text-stone-900 mb-2">
                     Schulprojekt
                  </h2>
                  <p className="text-sm leading-relaxed">
                     Diese Webseite ist ein Schulprojekt im Fach Geographie,
                     Klasse 11, am Freien Christlichen Gymnasium Düsseldorf. Sie
                     dient ausschließlich Bildungszwecken und ist kein
                     kommerzielles Angebot.
                  </p>
               </section>

               <Separator />

               <section>
                  <h2 className="font-semibold text-stone-900 mb-2">
                     Verantwortlich
                  </h2>
                  <p className="text-sm text-stone-400 italic mb-1">
                     [TODO: Namen der Projektgruppe eintragen – Datenschutz
                     beachten, ggf. nur Vornamen]
                  </p>
                  <p className="text-sm leading-relaxed">
                     Freies Christliches Gymnasium Düsseldorf
                     <br />
                     [TODO: Schuladresse eintragen]
                  </p>
               </section>

               <Separator />

               <section>
                  <h2 className="font-semibold text-stone-900 mb-2">
                     Haftungsausschluss
                  </h2>
                  <p className="text-sm leading-relaxed">
                     Alle Inhalte wurden nach bestem Wissen und Gewissen
                     recherchiert und mit Quellen belegt. Für die Richtigkeit,
                     Vollständigkeit und Aktualität wird keine Gewähr
                     übernommen. Externe Links wurden zum Zeitpunkt der
                     Verlinkung geprüft; für die Inhalte verlinkter Seiten sind
                     deren Betreiber verantwortlich.
                  </p>
               </section>

               <Separator />

               <section>
                  <h2 className="font-semibold text-stone-900 mb-2">Quellen</h2>
                  <p className="text-sm leading-relaxed">
                     Alle verwendeten Quellen sind im{' '}
                     <Link
                        href="/quellen"
                        className="text-teal-700 underline hover:text-teal-900"
                     >
                        Quellenverzeichnis
                     </Link>{' '}
                     aufgeführt.
                  </p>
               </section>

               <Separator />

               <section>
                  <h2 className="font-semibold text-stone-900 mb-2">
                     Schuljahr
                  </h2>
                  <p className="text-sm">2025/2026</p>
               </section>
            </div>
         </div>
      </main>
   )
}
