import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Entstehung from '@/components/sections/Entstehung'
import Abbau from '@/components/sections/Abbau'
import Nutzung from '@/components/sections/Nutzung'
import Deutschland from '@/components/sections/Deutschland'
import ChancenRisiken from '@/components/sections/ChancenRisiken'
import Konflikte from '@/components/sections/Konflikte'
import Bewertung from '@/components/sections/Bewertung'
import Fazit from '@/components/sections/Fazit'

export const metadata: Metadata = {
   title: 'Atomenergie – Geographie-Projekt',
   description:
      'Schülerprojekt zur Atomenergie: Entstehung, Abbau, Nutzung, Risiken und Bewertung.',
}

export default function Home() {
   return (
      <main>
         <Hero />
         <Entstehung />
         <Abbau />
         <Nutzung />
         <Deutschland />
         <ChancenRisiken />
         <Konflikte />
         <Bewertung />
         <Fazit />
      </main>
   )
}
