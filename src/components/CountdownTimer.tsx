import { useEffect, useState } from 'react'

/**
 * Create a Countdown Timer
 * Create a countdown timer component that counts down from a given time.
 */
const CountdownTimer = ({ initialSeconds = 10 }) => {
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    const intervalID = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalID)
          return prevSeconds
        }
        return prevSeconds - 1
      })
    }, 1000)
    return () => clearInterval(intervalID)
  }, [])

  return (
    <div>
      <p>Countdown Timer</p>
      <p>{seconds} seconds remaining</p>
    </div>
  )
}

export default CountdownTimer
