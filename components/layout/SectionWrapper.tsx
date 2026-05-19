import { cn } from '@/lib/utils'

interface Props {
   id: string
   children: React.ReactNode
   className?: string
   kicker?: string
}

export default function SectionWrapper({
   id,
   children,
   className,
   kicker,
}: Props) {
   return (
      <section
         id={id}
         className={cn(
            'py-20 md:py-28 border-t border-stone-200 scroll-mt-16',
            className
         )}
      >
         <div className="max-w-5xl mx-auto px-6 md:px-12">
            {kicker && (
               <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-3">
                  {kicker}
               </p>
            )}
            {children}
         </div>
      </section>
   )
}
