import type { Metadata } from 'next'
import Link from 'next/link'
import glossaryData from '@/content/glossary.json'
import GlossarClient from './GlossarClient'

export const metadata: Metadata = {
   title: 'Glossar – Atomenergie',
   description: 'Fachbegriffe aus der Kernenergie alphabetisch erklärt.',
}

export default function GlossarPage() {
   const terms = [...glossaryData.terms].sort((a, b) =>
      a.term.localeCompare(b.term, 'de')
   )

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
               Glossar
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900 mb-4">
               Fachbegriffe
            </h1>
            <p className="text-stone-600 mb-10 max-w-prose leading-relaxed">
               Alphabetisch sortierte Erklärungen der wichtigsten Fachbegriffe
               aus der Kernenergie. Unterstrichene Begriffe im Text verweisen
               auf diesen Eintrag.
            </p>

            <GlossarClient terms={terms} />
         </div>
      </main>
   )
}
