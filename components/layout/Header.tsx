'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
   { href: '#entstehung', label: 'Entstehung' },
   { href: '#abbau', label: 'Abbau' },
   { href: '#nutzung', label: 'Nutzung' },
   { href: '#deutschland', label: 'Deutschland' },
   { href: '#chancen-risiken', label: 'Chancen & Risiken' },
   { href: '#konflikte', label: 'Konflikte' },
   { href: '#bewertung', label: 'Bewertung' },
   { href: '#fazit', label: 'Fazit' },
]

export default function Header() {
   const [activeSection, setActiveSection] = useState<string>('')
   const [mobileOpen, setMobileOpen] = useState(false)

   useEffect(() => {
      const sectionIds = navLinks.map((l) => l.href.slice(1))
      const observers: IntersectionObserver[] = []

      sectionIds.forEach((id) => {
         const el = document.getElementById(id)
         if (!el) return
         const obs = new IntersectionObserver(
            ([entry]) => {
               if (entry.isIntersecting) setActiveSection(id)
            },
            { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
         )
         obs.observe(el)
         observers.push(obs)
      })

      return () => observers.forEach((o) => o.disconnect())
   }, [])

   return (
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
         <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between gap-6">
            <Link
               href="/#hero"
               className="font-serif text-lg text-stone-900 hover:text-teal-800 transition-colors flex-shrink-0"
            >
               Atomenergie
            </Link>

            <nav className="hidden lg:flex items-center gap-1 overflow-x-auto">
               {navLinks.map((link) => (
                  <a
                     key={link.href}
                     href={`/${link.href}`}
                     className={cn(
                        'px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors',
                        activeSection === link.href.slice(1)
                           ? 'bg-teal-800 text-white'
                           : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                     )}
                  >
                     {link.label}
                  </a>
               ))}
            </nav>

            <div className="flex items-center gap-3 flex-shrink-0">
               <Link
                  href="/quellen"
                  className="hidden md:block text-xs text-stone-600 hover:text-teal-800 transition-colors"
               >
                  Quellen
               </Link>
               <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                  <SheetTrigger asChild>
                     <Button variant="ghost" size="icon" className="lg:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Menü öffnen</span>
                     </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-72">
                     <div className="flex flex-col gap-1 mt-8">
                        <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 px-3">
                           Sektionen
                        </p>
                        {navLinks.map((link) => (
                           <a
                              key={link.href}
                              href={`/${link.href}`}
                              onClick={() => setMobileOpen(false)}
                              className={cn(
                                 'px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                                 activeSection === link.href.slice(1)
                                    ? 'bg-teal-800 text-white'
                                    : 'text-stone-700 hover:bg-stone-100'
                              )}
                           >
                              {link.label}
                           </a>
                        ))}
                        <div className="mt-4 pt-4 border-t border-stone-200 flex flex-col gap-1">
                           <Link
                              href="/quellen"
                              onClick={() => setMobileOpen(false)}
                              className="px-3 py-2.5 rounded-lg text-sm text-stone-700 hover:bg-stone-100"
                           >
                              Quellenverzeichnis
                           </Link>
                           <Link
                              href="/impressum"
                              onClick={() => setMobileOpen(false)}
                              className="px-3 py-2.5 rounded-lg text-sm text-stone-700 hover:bg-stone-100"
                           >
                              Impressum
                           </Link>
                        </div>
                     </div>
                  </SheetContent>
               </Sheet>
            </div>
         </div>
      </header>
   )
}
