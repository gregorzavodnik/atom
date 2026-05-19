import sourcesData from '@/content/sources.json'
import FootnoteTooltip from './FootnoteTooltip'

interface Props {
   sourceId: string
}

export default function Footnote({ sourceId }: Props) {
   const source = sourcesData.sources.find((s) => s.id === sourceId)
   const shortRef = source
      ? `${source.author} (${source.year}): ${source.title}`
      : sourceId
   return <FootnoteTooltip sourceId={sourceId} shortRef={shortRef} />
}
