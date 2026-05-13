import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'

export const metadata: Metadata = {
   title: 'Atomenergie – Geographie-Projekt Klasse 11',
   description:
      'Schulprojekt über Atomenergie: Entstehung, Abbau, Nutzung sowie Chancen und Risiken der Kernenergie.',
}

export default function Home() {
   return (
      <main>
         <Hero />
      </main>
   )
}
