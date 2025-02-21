/**
 * Expandable FAQ Widget
 * Design an FAQ widget with expandable/collapsible sections for easy navigation and readability
 *
 * Create a list of frequently asked questions where users can click on a question
 * to reveal its answer and collapse it again to reduce clutter
 */

import { useEffect, useState } from 'react'
import './styles.css'

interface Faqs {
  id: number
  question: string
  answer: string
}

const DATA: Faqs[] = [
  {
    id: 1,
    question: 'Delectus aut autem?',
    answer:
      'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 2,
    question: 'Quis ut nam facilis et officia qui?',
    answer:
      'Quis aute iure . excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 3,
    question: 'Fugiat veniam minus?',
    answer:
      'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 4,
    question: 'Et porro tempora?',
    answer:
      'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia id est laborum',
  },
  {
    id: 5,
    question: 'Laboriosam mollitia et enim quasi adipisci quia provident illum?',
    answer: 'Quis aute iure reprehenderit in id est laborum',
  },
]

const fetchData = (): Promise<Faqs[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(DATA), 1000)
  })
}
interface AccordionProps {
  id: number
  title: string
  content: string
}

const Accordion = ({ id, title, content }: AccordionProps) => {
  return (
    <div className="accordion">
      <input
        type="checkbox"
        name={`accordion-title-${id}`}
        className="accordion-checkbox"
        id={`accordion-title-${id}`}
      />
      <label htmlFor={`accordion-title-${id}`} className="accordion-title-label">
        {title}
      </label>

      <div className="accordion-content">{content}</div>
    </div>
  )
}
const ExpandableFAQ = () => {
  const [data, setData] = useState<Faqs[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData().then((data) => {
      setLoading(false)
      setData(data)
    })
  }, [])

  if (loading) {
    return (
      <div className="mainlist">
        <p>Loading...</p>
      </div>
    )
  }
  return (
    <div style={{ width: '400px' }}>
      {data.map((faq) => (
        <Accordion key={faq.id} id={faq.id} title={faq.question} content={faq.answer} />
      ))}
    </div>
  )
}
export default ExpandableFAQ
