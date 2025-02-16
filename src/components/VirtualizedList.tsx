import { useRef, useState } from 'react'

const items = Array.from({ length: 1000 }).map((_, i) => `Item n. ${i}`)
/**
 * Implement a Virtualized List
 * Create a virtualized list component that efficiently renders a large list of items, only rendering items that are visible within the viewport.
 */
const VirtualizedList = ({ itemHeight = 40, height = 400 }) => {
  const viewportRef = useRef<null | HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = useState(0)

  const handleScroll = () => {
    setScrollTop(viewportRef.current?.scrollTop || 0)
  }

  const totalHeight = items.length * itemHeight
  const startIndex = Math.floor(scrollTop / itemHeight)
  const endIndex = Math.min(items.length - 1, startIndex + Math.ceil(height / itemHeight))
  const visibleItems = items.slice(startIndex, endIndex + 1).map((item, index) => (
    <div key={index} style={{ height: itemHeight }}>
      {item}
    </div>
  ))

  return (
    <div
      ref={viewportRef}
      onScroll={handleScroll}
      style={{
        height,
        overflowY: 'auto',
        position: 'relative',
        border: '1px solid red',
        width: '500px',
      }}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ position: 'absolute', top: startIndex * itemHeight, width: '100%' }}>
          {visibleItems}
        </div>
      </div>
    </div>
  )
}

export default VirtualizedList
