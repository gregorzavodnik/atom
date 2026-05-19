'use client'

import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
} from '@/components/ui/tooltip'

interface Props {
   sourceId: string
   shortRef: string
}

export default function FootnoteTooltip({ sourceId, shortRef }: Props) {
   return (
      <Tooltip>
         <TooltipTrigger asChild>
            <a
               href={`/quellen#${sourceId}`}
               className="font-mono text-xs text-teal-700 hover:text-teal-900 transition-colors"
               aria-label={`Quelle ${sourceId}`}
            >
               <sup>[{sourceId}]</sup>
            </a>
         </TooltipTrigger>
         <TooltipContent className="max-w-xs text-xs">
            {shortRef}
         </TooltipContent>
      </Tooltip>
   )
}
