import { useRef } from 'react'
import './styles.css'
/**
 *  Image Carousel
 *
 * Implement a carousel component that automatically cycles through images and
 * provides navigation controls for users to browse through the images manually
 */
const ImageCarousel = () => {
  const itemsRef = useRef<Map<string, HTMLLIElement | null>>(null)
  const cats = ['Neo', 'Millie', 'Millie Neo', 'Neo Banana', 'Neo 2', 'Bella', 'Poppy'] as const
  const toLowerCaseAndAddDashes = (cat: (typeof cats)[number]) =>
    cat.toLowerCase().replace(' ', '_')

  const getMap = (): Map<string, HTMLLIElement | null> => {
    if (!itemsRef.current) {
      // Init Map() when at first
      itemsRef.current = new Map()
    }
    return itemsRef.current
  }
  const scrollToCat = (cat: string) => {
    const nodesMap = getMap()
    const node = nodesMap.get(cat)
    node?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  return (
    <div className="mainDiv">
      <nav>
        {cats.map((cat) => (
          <button key={cat} onClick={() => scrollToCat(cat)}>
            {cat}
          </button>
        ))}
      </nav>
      <div>
        <ul className="imagesDiv">
          {cats.map((cat) => (
            <li
              key={cat}
              ref={(node) => {
                const map = getMap()
                map.set(cat, node)

                return () => {
                  map.delete(cat)
                }
              }}
            >
              <img src={`https://placecats.com/${toLowerCaseAndAddDashes(cat)}/300/200`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default ImageCarousel
