'use client'

import { useState } from 'react'
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

interface Term {
   term: string
   definition: string
   relatedTerms: string[]
}

function termAnchor(term: string) {
   return `term-${term.toLowerCase().replace(/\s+/g, '-')}`
}

export default function GlossarClient({ terms }: { terms: Term[] }) {
   const [query, setQuery] = useState('')

   const filtered = terms.filter(
      (t) =>
         t.term.toLowerCase().includes(query.toLowerCase()) ||
         t.definition.toLowerCase().includes(query.toLowerCase())
   )

   return (
      <div>
         <input
            type="search"
            placeholder="Begriff suchen …"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full mb-8 px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-700 text-sm"
            aria-label="Glossar durchsuchen"
         />

         {filtered.length === 0 && (
            <p className="text-stone-500 text-sm">
               Kein Begriff gefunden für &bdquo;{query}&ldquo;.
            </p>
         )}

         <Accordion type="multiple" className="space-y-2">
            {filtered.map((entry) => (
               <AccordionItem
                  key={entry.term}
                  value={entry.term}
                  id={termAnchor(entry.term)}
                  className="border border-stone-200 rounded-lg bg-white px-4 scroll-mt-20"
               >
                  <AccordionTrigger className="text-stone-900 font-medium text-left hover:no-underline py-4">
                     {entry.term}
                  </AccordionTrigger>
                  <AccordionContent className="text-stone-600 text-sm leading-relaxed pb-4">
                     <p>{entry.definition}</p>
                     {entry.relatedTerms.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2 items-center">
                           <span className="text-xs text-stone-400">
                              Verwandte Begriffe:
                           </span>
                           {entry.relatedTerms.map((rt) => (
                              <a
                                 key={rt}
                                 href={`#${termAnchor(rt)}`}
                                 onClick={(e) => {
                                    e.preventDefault()
                                    const el = document.getElementById(
                                       termAnchor(rt)
                                    )
                                    el?.scrollIntoView({
                                       behavior: 'smooth',
                                       block: 'start',
                                    })
                                 }}
                              >
                                 <Badge
                                    variant="secondary"
                                    className="cursor-pointer hover:bg-teal-100 hover:text-teal-800 transition-colors text-xs"
                                 >
                                    {rt}
                                 </Badge>
                              </a>
                           ))}
                        </div>
                     )}
                  </AccordionContent>
               </AccordionItem>
            ))}
         </Accordion>
      </div>
   )
}
