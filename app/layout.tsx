import type { Metadata } from 'next'
import { Fraunces, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { TooltipProvider } from '@/components/ui/tooltip'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fraunces = Fraunces({
   subsets: ['latin'],
   variable: '--font-serif',
   weight: ['400', '500', '700'],
})

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin'],
})

export const metadata: Metadata = {
   title: 'Atomenergie – Geographie-Projekt',
   description:
      'Schülerprojekt zur Atomenergie: Entstehung, Abbau, Nutzung, Risiken und Bewertung.',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html
         lang="de"
         className={cn(
            'h-full scroll-smooth antialiased',
            inter.variable,
            fraunces.variable,
            geistMono.variable
         )}
      >
         <body className="min-h-full flex flex-col bg-stone-50 font-sans text-stone-900">
            <TooltipProvider>
               <Header />
               <div className="flex-1">{children}</div>
               <Footer />
            </TooltipProvider>
         </body>
      </html>
   )
}
