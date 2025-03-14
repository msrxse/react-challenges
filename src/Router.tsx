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
import PostProvider from './components/PostProvider'
import FetchCustomHook from './components/FetchCustomHook'
import CountdownTimer from './components/CountdownTimer'
import FormValidations2 from './components/FormValidations2'
import TaskTracker from './components/TaskTracker'
import ExpandableFAQ from './components/ExpandableFAQ/ExpandableFAQ'
import DataGrid from './components/DataGrid/DataGrid'
import ProductFilter from './components/ProductFilter/ProductFilter'
import ProductFilter2 from './components/ProductFilter2/ProductFilter2'
import ImageCarousel from './components/ImageCarousel/ImageCarousel'
import Debounce from './components/Debounce'
import ArrayReduce from './components/ArrayReduce'
import Classnames from './components/Classnames'
import Flatten from './components/Flatten'
import Throttle from './components/Throttle'
import TrafficLight from './components/TrafficLight'
import DigitalClock from './components/DigitalClock/DigitalClock'
import TravelPlan from './components/TravelPlan/TravelPlan'
import TickTackToe from './components/TickTackToe/TickTackToe'
import ImageCarousel2 from './components/ImageCarousel2/ImageCarousel2'
import HNJobBoard from './components/HNJobBoard/HNJobBoard'
import TodoListScaled from './components/TodoListScaled/TodoListScaled'
import Stopwatch from './components/Stopwatch'
import TransferList from './components/TransferList'

import Layout from './Layout'

const components = {
  // ---------COMPONENTS AND UI--------
  '/counter': Counter,
  '/toggle-switch': ToggleSwitch,
  '/searchbar': SearchBar,
  '/dropdown-menu': DropdownMenu,
  '/tabs': Tabs,
  '/modal': Modal,
  '/portal': Portal,
  '/star-rating': StarRating,
  '/countdown-timer': CountdownTimer,
  '/task-tracker': TaskTracker,
  '/carousel': Carousel,
  '/image-carousel': ImageCarousel,
  '/expandable-faq': ExpandableFAQ,
  // --------LISTS AND FILTERING-----------
  '/virtualized-list': VirtualizedList,
  '/data-grid': DataGrid,
  '/product-filter': ProductFilter,
  '/product-filter-2': ProductFilter2,
  '/todo-list': TodoList,
  // ------FORMS-------
  '/multi-step-form': MultiStepForm,
  '/form-validations': FormValidations,
  '/dynamic-form': DynamicForm,
  '/form-validations-2': FormValidations2,
  // -------HOOKS and FUNCS-------
  '/fetch-data': FetchData,
  '/theme-context': ThemeContext,
  '/post-provider': PostProvider,
  '/fetch-custom-ook': FetchCustomHook,
  '/debounce': Debounce,
  '/array-reduce': ArrayReduce,
  '/classnames': Classnames,
  '/flatten': Flatten,
  '/throttle': Throttle,
  '/traffic-light': TrafficLight,
  '/digital-clock': DigitalClock,
  '/travel-plan': TravelPlan,
  '/tick-tack-toe': TickTackToe,
  '/image-carousel-2': ImageCarousel2,
  '/hn_job_board': HNJobBoard,
  '/todo-list-scaled': TodoListScaled,
  '/stop-watch': Stopwatch,
  '/transfer_list': TransferList,
} as const

function Router() {
  const pathname = window.location.pathname as keyof typeof components
  const Component = components[pathname] || null
  const title = Component?.name || 'Header'

  return (
    <Layout components={components} title={title}>
      {Component ? <Component /> : <div>Component not found</div>}
    </Layout>
  )
}

export default Router
