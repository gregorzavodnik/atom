import glossaryData from '@/content/glossary.json'
import GlossaryTooltip from './GlossaryTooltip'

interface Props {
   term: string
}

export default function GlossaryTerm({ term }: Props) {
   const entry = glossaryData.terms.find((t) => t.term === term)
   const definition = entry?.definition ?? 'Definition folgt im Glossar.'
   return <GlossaryTooltip term={term} definition={definition} />
}
