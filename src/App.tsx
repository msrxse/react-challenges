import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import ToggleSwitch from './components/ToggleSwitch'
import TodoList from './components/TodoList'
import FetchData from './components/FetchData'
import SearchBar from './components/SearchBar'

const VISIBLE = 'search-data'

function App() {
const [visible] = useState(VISIBLE)

  return (
    visible === "counter" && <Counter/> 
    || visible === "toggle" && <ToggleSwitch/>
    || visible === "todo-list" && <TodoList/>
    || visible === "fetch-data" && <FetchData/>
    || visible === "search-data" && <SearchBar/>
  )
}

export default App
