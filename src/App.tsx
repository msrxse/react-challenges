import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import ToggleSwitch from './components/ToggleSwitch'
import TodoList from './components/TodoList'
import FetchData from './components/FetchData'
import SearchBar from './components/SearchBar'
import DropdownMenu from './components/DropdownMenu'
import Tabs from './components/Tabs'
import Modal from './components/Modal'
import Portal from './components/Portal'
import Carousel from './components/Carousel'
import ThemeContext from './components/ThemeContext'
import StarRating from './components/StarRating'
import MultiStepForm from './components/MultiStepForm'
import VirtualizedList from './components/VirtualizedList'
import FormValidations from './components/FormValidations'

const VISIBLE = 'form-validations'

function App() {
  const [visible] = useState(VISIBLE)

  return (
    (visible === 'counter' && <Counter />) ||
    (visible === 'form-validations' && <FormValidations />) ||
    (visible === 'virtualized-list' && <VirtualizedList />) ||
    (visible === 'multi-step-form' && <MultiStepForm />) ||
    (visible === 'star-rating' && <StarRating />) ||
    (visible === 'toggle' && <ToggleSwitch />) ||
    (visible === 'todo-list' && <TodoList />) ||
    (visible === 'fetch-data' && <FetchData />) ||
    (visible === 'search-data' && <SearchBar />) ||
    (visible === 'dropdown-menu' && <DropdownMenu />) ||
    (visible === 'tabs' && <Tabs />) ||
    (visible === 'modal' && <Modal />) ||
    (visible === 'portal' && <Portal />) ||
    (visible === 'carousel' && <Carousel />) ||
    (visible === 'theme-context' && <ThemeContext />)
  )
}

export default App
