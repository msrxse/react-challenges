/**
 * Implement a throttle function which accepts a callback function and a wait duration.
 * Calling throttle() returns a function which throttled invocations of the callback function
 */

function throttle(callback: Function, wait: number) {
  let lastCallTime = 0 // Tracks the last time the function was called

  return function (...args) {
    const now = Date.now()

    if (now - lastCallTime >= wait) {
      lastCallTime = now // Update last call time
      callback.apply(this, args) // Update last call time
    }
  }
}

function Throttle() {
  let count = 0

  function increment() {
    count++
    console.log(`Count = ${count}`)
  }

  const throttledIncrement = throttle(increment, 100)

  console.log('(executed immediately)')
  throttledIncrement() // i = 1 (executed immediately)

  console.log('(ignored, too soon)')
  setTimeout(throttledIncrement, 50) // i = 1 (ignored, too soon)

  console.log('(executed)')
  setTimeout(throttledIncrement, 101) // i = 2 (executed)

  console.log('(executed)')
  setTimeout(throttledIncrement, 200) // i = 3 (executed)

  return (
    <div>
      <p>
        Throttling is a technique used to control how many times we allow a function to be executed
        over time. When a JavaScript function is said to be throttled with a wait time of X
        milliseconds, it can only be invoked at most once every X milliseconds. The callback is
        invoked immediately and cannot be invoked again for the rest of the wait duration.
      </p>
    </div>
  )
}

export default Throttle
