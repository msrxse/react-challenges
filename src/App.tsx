import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import ToggleSwitch from './components/ToggleSwitch'

const VISIBLE = 'toggle'

function App() {
const [visible] = useState(VISIBLE)

  return (
    visible === "counter" && <Counter/> 
    || visible === "toggle" && <ToggleSwitch/>
  )
}

export default App
