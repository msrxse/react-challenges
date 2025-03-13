/**
 * Build a stopwatch widget which can measure how much time has passed.
 * It shows the current timer and has two buttons underneath: "Start/Stop" and "Reset".
 */
import { useEffect, useState, useRef } from 'react'

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60

function Stopwatch() {
  const startTimeRef = useRef<number>(0)
  const [time, setTime] = useState<number>(0)
  const [isOn, setIsOn] = useState<boolean>(false)

  useEffect(() => {
    let intervalID: number
    if (isOn) {
      // to calculate the time difference between current time and start time instead of just a counter
      intervalID = setInterval(() => setTime(Date.now() - startTimeRef.current), 1)
    }
    return () => clearInterval(intervalID)
  }, [time, isOn])

  const hours = Math.floor(time / HOUR)
  const minutes = Math.floor((time / MINUTE) % 60)
  const seconds = Math.floor((time / SECOND) % 60)
  const milliseconds = time % SECOND

  return (
    <div>
      <h1></h1>
      {/* monospace so numbers don't jump */}
      <div style={{ fontFamily: 'monospace' }}>
        {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}:{milliseconds.toString().padStart(2, '0')}
      </div>
      <button
        onClick={() => {
          startTimeRef.current = Date.now()
          setIsOn(!isOn)
        }}
      >
        {isOn ? 'Stop' : 'Start'}
      </button>
      <button
        onClick={() => {
          setIsOn(false)
          setTime(0)
        }}
      >
        Reset
      </button>
    </div>
  )
}

export default Stopwatch
