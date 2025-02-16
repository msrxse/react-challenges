import { useState } from 'react'

/**
 * Build a Carousel Component
 * Create a carousel component that cycles through a set of images.
 */
const Carousel = () => {
  const images = [
    'https://fakeimg.pl/350x200/?text=1',
    'https://fakeimg.pl/350x200/?text=2',
    'https://fakeimg.pl/350x200/?text=3',
    'https://fakeimg.pl/350x200/?text=4',
    'https://fakeimg.pl/350x200/?text=5',
    'https://fakeimg.pl/350x200/?text=6',
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const gotoNext = () => {
    // Move forward, wrap around when exceeding the last index
    return setCurrentIndex((currentIndex + 1) % images.length)
  }
  const gotoBack = () => {
    // Move backward, wrap around when below 0
    return setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  return (
    <div>
      <button onClick={gotoBack}>Back</button>
      <img src={images[currentIndex]} />
      <button onClick={gotoNext}>Next</button>
    </div>
  )
}

export default Carousel
