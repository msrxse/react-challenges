import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import ToggleSwitch from './components/ToggleSwitch'
import TodoList from './components/TodoList'
import FetchData from './components/FetchData'

const VISIBLE = 'fetch-data'

function App() {
const [visible] = useState(VISIBLE)

  return (
    visible === "counter" && <Counter/> 
    || visible === "toggle" && <ToggleSwitch/>
    || visible === "todo-list" && <TodoList/>
    || visible === "fetch-data" && <FetchData/>
  )
}

export default App
