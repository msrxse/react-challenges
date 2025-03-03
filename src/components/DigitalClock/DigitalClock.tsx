/**
 * Create a widget that renders the current time in HH:MM:SS format using a
 * 7-segment digital display. You are free to choose to use 12-hour or a 24-hour display.
 */

import { useEffect, useState } from 'react'
import './styles.css'

const SevenSegmentDigit = ({ digit }: { digit: number }) => {
  const segmentMap = {
    0: [true, true, true, false, true, true, true],
    1: [false, false, true, false, false, true, false],
    2: [true, false, true, true, true, false, true],
    3: [true, false, true, true, false, true, true],
    4: [false, true, true, true, false, true, false],
    5: [true, true, false, true, false, true, true],
    6: [true, true, false, true, true, true, true],
    7: [true, false, true, false, false, true, false],
    8: [true, true, true, true, true, true, true],
    9: [true, true, true, true, false, true, true],
  }
  const segments = segmentMap[digit as keyof typeof segmentMap]
  return (
    <div className="digital-clock-digit">
      <div
        className={`digital-clock-segment digital-clock-horizontal digital-clock-top ${
          segments[0] ? 'digital-clock-on' : 'digital-clock-off'
        }`}
      />
      <div
        className={`digital-clock-segment digital-clock-vertical digital-clock-top-left ${
          segments[1] ? 'digital-clock-on' : 'digital-clock-off'
        }`}
      />
      <div
        className={`digital-clock-segment digital-clock-vertical digital-clock-top-right ${
          segments[2] ? 'digital-clock-on' : 'digital-clock-off'
        }`}
      />
      <div
        className={`digital-clock-segment digital-clock-horizontal digital-clock-middle ${
          segments[3] ? 'digital-clock-on' : 'digital-clock-off'
        }`}
      />
      <div
        className={`digital-clock-segment digital-clock-vertical digital-clock-bottom-left ${
          segments[4] ? 'digital-clock-on' : 'digital-clock-off'
        }`}
      />
      <div
        className={`digital-clock-segment digital-clock-vertical digital-clock-bottom-right ${
          segments[5] ? 'digital-clock-on' : 'digital-clock-off'
        }`}
      />
      <div
        className={`digital-clock-segment digital-clock-horizontal digital-clock-bottom ${
          segments[6] ? 'digital-clock-on' : 'digital-clock-off'
        }`}
      />
    </div>
  )
}
function DigitalClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(intervalID)
  }, [])

  const formatTime = (num: number) => num.toString().padStart(2, '0')

  return (
    <div className="digital-clock">
      {[...formatTime(time.getHours())].map((each, index) => (
        <SevenSegmentDigit key={index} digit={parseInt(each)} />
      ))}
      <div className="digital-clock-colon">:</div>
      {[...formatTime(time.getMinutes())].map((each, index) => (
        <SevenSegmentDigit key={index} digit={parseInt(each)} />
      ))}
      <div className="digital-clock-colon">:</div>
      {[...formatTime(time.getSeconds())].map((each, index) => (
        <SevenSegmentDigit key={index} digit={parseInt(each)} />
      ))}
    </div>
  )
}

export default DigitalClock
