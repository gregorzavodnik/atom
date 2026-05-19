import Footnote from './Footnote'

interface Props {
   caption: string
   sourceId?: string
   children: React.ReactNode
}

export default function Figure({ caption, sourceId, children }: Props) {
   return (
      <figure className="my-8">
         {children}
         <figcaption className="mt-3 text-sm text-stone-500 text-center leading-snug">
            {caption}
            {sourceId && (
               <>
                  {' '}
                  <Footnote sourceId={sourceId} />
               </>
            )}
         </figcaption>
      </figure>
   )
}
