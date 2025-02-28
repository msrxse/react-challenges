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
import DynamicForm from './components/FormDynamic'
import { PostProvider } from './components/PostProvider'
import FetchCustomHook from './components/FetchCustomHook'
import CountdownTimer from './components/CountdownTimer'
import FormValidations2 from './components/FormValidations2'
import TaskTracker from './components/TaskTracker'
import ExpandableFAQ from './components/ExpandableFAQ/ExpandableFAQ'
import DataGrid from './components/DataGrid/DataGrid'
import ProductFilter from './components/ProductFilter/ProductFilter'
import ProductFilter2 from './components/ProductFilter2/ProductFilter2'
import ImageCarousel from './components/ImageCarousel/ImageCarousel'

import Layout from './Layout'
import React from 'react'

const components = {
  '/counter': Counter,
  '/toggle-switch': ToggleSwitch,
  '/todo-list': TodoList,
  '/fetch-data': FetchData,
  '/searchbar': SearchBar,
  '/dropdown-menu': DropdownMenu,
  '/tabs': Tabs,
  '/modal': Modal,
  '/portal': Portal,
  '/carousel': Carousel,
  '/theme-context': ThemeContext,
  '/star-rating': StarRating,
  '/multi-step-form': MultiStepForm,
  '/virtualized-list': VirtualizedList,
  '/form-validations': FormValidations,
  '/dynamic-form': DynamicForm,
  '/post-provider': PostProvider,
  '/fetchCustomHook': FetchCustomHook,
  '/countdown-timer': CountdownTimer,
  '/form-validations-2': FormValidations2,
  '/task-tracker': TaskTracker,
  '/expandable-faq': ExpandableFAQ,
  '/data-grid': DataGrid,
  '/product-filter': ProductFilter,
  '/product-filter-2': ProductFilter2,
  '/image-carousel': ImageCarousel,
}

function Router() {
  const { pathname } = window.location

  return (
    <Layout>
      {components[pathname] ? (
        React.createElement(components[pathname], {})
      ) : (
        <div>Component not found</div>
      )}
    </Layout>
  )
}

export default Router
