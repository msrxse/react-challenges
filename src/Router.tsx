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
import Layout from './Layout'

function Router() {
  let content = null
  const page = window.location.pathname

  if (page === '/product-filter-two') {
    content = <ProductFilter2 />
  } else if (page === '/product-filter') {
    content = <ProductFilter />
  } else if (page === '/counter') {
    content = <Counter />
  } else if (page === '/data-grid') {
    content = <DataGrid />
  } else if (page === '/expandable_faq') {
    content = <ExpandableFAQ />
  } else if (page === '/task-tracker') {
    content = <TaskTracker />
  } else if (page === '/form-validations-2') {
    content = <FormValidations2 />
  } else if (page === '/countdown-timer') {
    content = <CountdownTimer />
  } else if (page === '/fetch-custom-hook') {
    content = <FetchCustomHook />
  } else if (page === '/post-provider') {
    content = (
      <PostProvider>
        <p>PostProvider</p>
      </PostProvider>
    )
  } else if (page === '/dynamic-form') {
    content = <DynamicForm />
  } else if (page === '/form-validations') {
    content = <FormValidations />
  } else if (page === '/virtualized-list') {
    content = <VirtualizedList />
  } else if (page === '/multi-step-form') {
    content = <MultiStepForm />
  } else if (page === '/star-rating') {
    content = <StarRating />
  } else if (page === '/toggle') {
    content = <ToggleSwitch />
  } else if (page === '/todo-list') {
    content = <TodoList />
  } else if (page === '/fetch-data') {
    content = <FetchData />
  } else if (page === '/search-data') {
    content = <SearchBar />
  } else if (page === '/dropdown-menu') {
    content = <DropdownMenu />
  } else if (page === '/tabs') {
    content = <Tabs />
  } else if (page === '/modal') {
    content = <Modal />
  } else if (page === '/portal') {
    content = <Portal />
  } else if (page === '/carousel') {
    content = <Carousel />
  } else if (page === '/theme-context') {
    content = <ThemeContext />
  }

  return <Layout>{content}</Layout>
}

export default Router
