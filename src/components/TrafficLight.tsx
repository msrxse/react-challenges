/**
 * Build a traffic light where the lights switch from green to yellow to red after predetermined 
 * intervals and loop indefinitely. Each light should be lit for the following durations:

    Red light: 4000ms
    Yellow light: 500ms
    Green light: 3000ms
 */

import { useEffect, useState } from 'react'

type Color = 'red' | 'yellow' | 'green'
interface Config {
  color: Color
  duration: number
  next: Color
}

const config: Record<Color, Config> = {
  red: { color: 'red', duration: 4000, next: 'green' },
  yellow: { color: 'yellow', duration: 500, next: 'red' },
  green: { color: 'green', duration: 3000, next: 'yellow' },
}

function TrafficLight() {
  const [currentColor, setCurrentColor] = useState<Config>(config.green)

  useEffect(() => {
    const timerID = setTimeout(
      () => setCurrentColor(config[currentColor.next]),
      currentColor.duration,
    )

    return () => clearTimeout(timerID)
  }, [currentColor.duration, currentColor.next])

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}
    >
      <div
        aria-live="polite"
        aria-label={`Current light: ${currentColor}`}
        style={{
          width: '80px',
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'stretch',
        }}
      >
        {Object.values(config).map((each) => (
          <div
            key={each.color}
            aria-hidden="true"
            style={{
              height: '100%',
              backgroundColor: `${each.color === currentColor.color ? each.color : 'gray'}`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {each.color}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrafficLight
