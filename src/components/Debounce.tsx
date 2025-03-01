/**
 *  Implement a debounce function which accepts a callback function and a wait duration.
 *  Calling debounce() returns a function which has debounced invocations of the
 *  callback function
 */
import { useState } from 'react'

const debounce = (func: Function, wait = 0) => {
  let timeoutID: ReturnType<typeof setTimeout> | null = null

  // args: Captures arguments passed to the returned function (rest parameters)
  // (In this example, args is the onClick event object since it is the event who triggered this function)
  return function (this: any, ...args: any[]) {
    // Keep a reference to `this` so that func.apply() can access it
    const context = this
    clearTimeout(timeoutID ?? undefined) // Clear any existing timeout

    timeoutID = setTimeout(() => {
      timeoutID = null // Reset timeoutID (optional)
      func.apply(context, args) // Call `func` with preserved `this` and passed args
    }, wait)
  }
}

function Debounce() {
  const [count, setCount] = useState(0)
  const debouncedIncrement = debounce(() => setCount(count + 1), 1000)

  return (
    <div>
      <p>This button increment action is debounced for 1 second</p>
      <button onClick={debouncedIncrement}>Increment</button>
      count:{count}
    </div>
  )
}

export default Debounce
