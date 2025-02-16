import { useState } from 'react'

/**
 * Implement a Star Rating Component
 * Create a star rating component where users can rate something from 1 to 5 stars.
 */
const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0)

  return (
    <div>
      {[...Array(totalStars)].map((star, index) => {
        return (
          <span
            key={index}
            style={{
              color: rating >= index + 1 ? 'red' : 'gray',
              fontSize: '30px',
              cursor: 'pointer',
            }}
            onClick={() => setRating(index + 1)}
          >
            *
          </span>
        )
      })}
    </div>
  )
}

export default StarRating
