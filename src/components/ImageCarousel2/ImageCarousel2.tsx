/**
 *
 */
import { useState } from 'react'
import './styles.css'

const images = [
  {
    src: 'https://picsum.photos/id/600/600/400',
    alt: 'Forest',
  },
  {
    src: 'https://picsum.photos/id/100/600/400',
    alt: 'Beach',
  },
  {
    src: 'https://picsum.photos/id/200/600/400',
    alt: 'Yak',
  },
  {
    src: 'https://picsum.photos/id/300/600/400',
    alt: 'Hay',
  },
  {
    src: 'https://picsum.photos/id/400/600/400',
    alt: 'Plants',
  },
  {
    src: 'https://picsum.photos/id/500/600/400',
    alt: 'Building',
  },
]

function ImageCarousel2() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const next = (selectedIdx + 1) % images.length
  const previous = (selectedIdx - 1 + images.length) % images.length

  return (
    <div className="image-carousel-2-main">
      <h1>ImageCarousel2</h1>
      <div className="image-carousel-2-inner-div">
        <div>
          <button
            className="image-carousel-2-button-previous"
            onClick={() => setSelectedIdx(previous)}
          >
            Previous
          </button>
          <img src={images[selectedIdx].src} alt={images[selectedIdx].alt} />
          <button className="image-carousel-2-button-next" onClick={() => setSelectedIdx(next)}>
            Next
          </button>
          <div className="image-carousel-2-button-toolbar">
            {images.map((images, index) => (
              <span
                className={selectedIdx === index ? 'image-carousel-2-button-active' : ''}
                onClick={() => setSelectedIdx(index)}
              >
                {' '}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel2
