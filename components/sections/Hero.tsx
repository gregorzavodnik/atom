import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
   return (
      <section
         id="hero"
         className="min-h-screen bg-stone-50 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-6 md:px-12 lg:px-20 py-16 lg:py-24"
      >
         <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
               Geographie-Projekt · Klasse 11
            </p>
            <div className="mt-3 h-px w-12 bg-stone-300" />

            <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none text-stone-900">
               Atomenergie
            </h1>

            <div className="mt-6 space-y-4 max-w-prose text-stone-700 leading-relaxed">
               <p>
                  Diese Webseite erklärt Ihnen, wie Atomenergie entsteht, wo
                  Uran abgebaut wird, wofür es genutzt wird und welche Chancen
                  und Risiken mit ihr verbunden sind.
               </p>
               <p>
                  Auch im Jahr 2026 erweist sich Atomenergie als eines der
                  umstrittensten Themen der globalen Energiewende – CO₂-arm,
                  aber mit ungelöster Endlagerfrage und geopolitischen
                  Abhängigkeiten.
               </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
               <Button
                  asChild
                  size="lg"
                  className="bg-teal-800 hover:bg-teal-700 text-white border-transparent"
               >
                  <Link href="#entstehung">Projekt ansehen</Link>
               </Button>
               <Button asChild variant="outline" size="lg">
                  <Link href="/quellen">Quellenverzeichnis</Link>
               </Button>
            </div>
         </div>

         <div className="order-1 lg:order-2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Image
               src="/images/kraftwerk.jpg"
               alt="Kühlturm eines Kernkraftwerks"
               fill
               sizes="(max-width: 1024px) 100vw, 50vw"
               className="object-cover"
               priority
            />
         </div>
      </section>
   )
}
