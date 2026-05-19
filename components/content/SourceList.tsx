import sourcesData from '@/content/sources.json'

type SortMode = 'id' | 'author'

interface Props {
   sort?: SortMode
}

export default function SourceList({ sort = 'id' }: Props) {
   const sources = [...sourcesData.sources].sort((a, b) => {
      if (sort === 'author') return a.author.localeCompare(b.author, 'de')
      return a.id.localeCompare(b.id)
   })

   return (
      <ol className="space-y-6">
         {sources.map((source) => (
            <li key={source.id} id={source.id} className="scroll-mt-20">
               <div className="flex gap-3 items-start">
                  <span className="font-mono text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded border border-stone-200 flex-shrink-0 mt-0.5">
                     {source.id}
                  </span>
                  <div className="text-sm text-stone-800 leading-relaxed">
                     <span className="font-medium">{source.author}</span> (
                     {source.year}): {source.title}.{' '}
                     {source.url && (
                        <>
                           URL:{' '}
                           <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-teal-700 hover:text-teal-900 underline break-all"
                           >
                              {source.url}
                           </a>
                           .{' '}
                        </>
                     )}
                     Abgerufen am: {source.accessedAt}.
                     <span className="ml-2 text-xs text-stone-400 font-mono">
                        [{source.type}]
                     </span>
                  </div>
               </div>
            </li>
         ))}
      </ol>
   )
}
