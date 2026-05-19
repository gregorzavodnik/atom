import type { Metadata } from 'next'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SourceList from '@/components/content/SourceList'

export const metadata: Metadata = {
   title: 'Quellenverzeichnis – Atomenergie',
   description:
      'Alle verwendeten Quellen des Geographie-Projekts zur Atomenergie.',
}

export default function QuellenPage() {
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
               Quellen
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900 mb-4">
               Quellenverzeichnis
            </h1>
            <p className="text-stone-600 mb-10 max-w-prose leading-relaxed">
               Alle Quellen in Deutscher Zitierweise mit Fußnoten. Klicke auf
               eine Quellen-ID im Text, um direkt zum jeweiligen Eintrag zu
               gelangen.
            </p>

            <Tabs defaultValue="id">
               <TabsList className="mb-8">
                  <TabsTrigger value="id">Nach ID (Q01, Q02 …)</TabsTrigger>
                  <TabsTrigger value="author">
                     Alphabetisch nach Autor
                  </TabsTrigger>
               </TabsList>
               <TabsContent value="id">
                  <SourceList sort="id" />
               </TabsContent>
               <TabsContent value="author">
                  <SourceList sort="author" />
               </TabsContent>
            </Tabs>
         </div>
      </main>
   )
}
