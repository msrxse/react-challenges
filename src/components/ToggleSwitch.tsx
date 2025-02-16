import { useState } from 'react'

/**
 * Implement a Toggle Switch
 * Create a toggle switch component between "On" and "Off" states.
 */
const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? 'ON' : 'OFF'}</button>
    </div>
  )
}
export default ToggleSwitch
