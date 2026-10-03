import { Icon } from './Icon'

type AccordionItem = { question: string; answer: string }

export function Accordion({ items, label }: { items: AccordionItem[]; label: string }) {
  return (
    <div className="accordion" aria-label={label}>
      {items.map((item) => (
        <details key={item.question}>
          <summary>
            <span>{item.question}</span>
            <Icon name="chevronDown" />
          </summary>
          <div className="accordion-answer"><p>{item.answer}</p></div>
        </details>
      ))}
    </div>
  )
}
