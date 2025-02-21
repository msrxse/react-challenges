/**
 * Expandable FAQ Widget
 * Design an FAQ widget with expandable/collapsible sections for easy navigation and readability
 *
 * Create a list of frequently asked questions where users can click on a question
 * to reveal its answer and collapse it again to reduce clutter
 */

import { useState } from 'react'
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

const ExpandableFAQ = () => {
  const [active, setActive] = useState<Faqs['id']>()
  const handleClick = (id: number) => {
    setActive(id)
  }

  return (
    <div style={{ width: '400px' }}>
      <ul
        style={{
          listStyleType: 'none',
          backgroundColor: 'hsla(240, 1.70%, 53.30%, 0.44)',
          padding: '8px',
          borderRadius: '4px',
        }}
      >
        {DATA.map((faq) => (
          <li
            key={faq.id}
            style={{
              cursor: 'pointer',
              borderRadius: '4px',
              padding: '4px',
              marginBottom: '8px',
              backgroundColor: active === faq.id ? 'black' : 'gray',
            }}
            onClick={() => handleClick(faq.id)}
          >
            {faq.question}

            {active === faq.id && (
              <div style={{ backgroundColor: 'hsla(240, 1.90%, 31.60%, 0.44)', padding: '4px' }}>
                {faq.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ExpandableFAQ
