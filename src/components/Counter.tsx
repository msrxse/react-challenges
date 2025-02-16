import { useState } from 'react'

/**
 * Create a counter component
 * Create a simple counter component that increases or decreases the count when clicking buttons.
 */
const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <div>
        <p>Count is {count}</p>
      </div>
    </div>
  )
}

export default Counter
