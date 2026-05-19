import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
   return (
      <footer className="bg-stone-900 text-stone-300 py-12">
         <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div>
                  <p className="font-serif text-white text-lg mb-2">
                     Atomenergie
                  </p>
                  <p className="text-sm text-stone-400">
                     Geographie-Projekt · Klasse 11
                  </p>
                  <p className="text-sm text-stone-400">
                     Freies Christliches Gymnasium Düsseldorf
                  </p>
               </div>
               <div>
                  <p className="text-sm font-semibold text-white mb-3">
                     Navigation
                  </p>
                  <ul className="space-y-2 text-sm">
                     <li>
                        <Link
                           href="/quellen"
                           className="hover:text-white transition-colors"
                        >
                           Quellenverzeichnis
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/glossar"
                           className="hover:text-white transition-colors"
                        >
                           Glossar
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/impressum"
                           className="hover:text-white transition-colors"
                        >
                           Impressum
                        </Link>
                     </li>
                  </ul>
               </div>
               <div>
                  <p className="text-sm font-semibold text-white mb-3">
                     Schulprojekt
                  </p>
                  <p className="text-sm text-stone-400">
                     Schuljahr 2025/2026 · Fach Geographie
                  </p>
                  <p className="text-sm text-stone-400">
                     Dreierteam · Überthema: Energie
                  </p>
               </div>
            </div>
            <Separator className="my-8 bg-stone-700" />
            <p className="text-xs text-stone-500 text-center">
               Alle Inhalte dienen Bildungszwecken. Quellen sind im{' '}
               <Link href="/quellen" className="underline hover:text-stone-300">
                  Quellenverzeichnis
               </Link>{' '}
               aufgeführt.
            </p>
         </div>
      </footer>
   )
}
