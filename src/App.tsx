import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import ToggleSwitch from './components/ToggleSwitch'
import TodoList from './components/TodoList'
import FetchData from './components/FetchData'
import SearchBar from './components/SearchBar'
import DropdownMenu from './components/DropdownMenu'

const VISIBLE = 'dropdown-menu'

function App() {
const [visible] = useState(VISIBLE)

  return (
    visible === "counter" && <Counter/> 
    || visible === "toggle" && <ToggleSwitch/>
    || visible === "todo-list" && <TodoList/>
    || visible === "fetch-data" && <FetchData/>
    || visible === "search-data" && <SearchBar/>
    || visible === "dropdown-menu" && <DropdownMenu/>
  )
}

export default App
