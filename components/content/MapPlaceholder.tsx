import { Map } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
   title: string
   className?: string
}

export default function MapPlaceholder({ title, className }: Props) {
   return (
      <div
         className={cn(
            'flex flex-col items-center justify-center gap-3 aspect-video w-full rounded-xl border-2 border-dashed border-stone-300 bg-stone-50 text-stone-400',
            className
         )}
      >
         <Map className="h-10 w-10" />
         <div className="text-center px-4">
            <p className="font-medium text-sm text-stone-600">{title}</p>
            <p className="text-xs mt-1">
               Karte folgt – wird über Datawrapper eingebunden
            </p>
         </div>
      </div>
   )
}
