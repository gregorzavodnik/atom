'use client'

import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
} from '@/components/ui/tooltip'

interface Props {
   term: string
   definition: string
}

export default function GlossaryTooltip({ term, definition }: Props) {
   return (
      <Tooltip>
         <TooltipTrigger asChild>
            <a
               href={`/glossar#term-${term.toLowerCase().replace(/\s+/g, '-')}`}
               className="underline decoration-dotted underline-offset-2 text-stone-800 hover:text-teal-800 transition-colors cursor-help"
               aria-label={`Begriff: ${term}`}
            >
               {term}
            </a>
         </TooltipTrigger>
         <TooltipContent className="max-w-xs text-xs">
            {definition}
         </TooltipContent>
      </Tooltip>
   )
}
