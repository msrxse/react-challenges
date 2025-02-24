import { createContext, useContext, useReducer, Dispatch } from 'react'

interface Product {
  id: number
  categories: string
  priceRanges: string
  brands: string
  colors: string
  ratings: number
}

interface State {
  products: Product[]
  filteredProducts: Product[]
}
type Actions =
  | {
      type: 'INIT'
      payload: Product[]
    }
  | {
      type: 'FILTER'
      payload: string
    }

interface ProviderProps {
  children: React.ReactNode
}
const initialState = {
  products: [],
  filteredProducts: [],
}
const ProductFilterContext = createContext<{ state: State; dispatch: Dispatch<Actions> }>({
  state: initialState,
  dispatch: () => null,
})
const filteredProducts = (products: Product[], searchQuery: string) => {
  return products.filter((each) =>
    each.categories.toLowerCase().includes(searchQuery.toLowerCase()),
  )
}

const reducerFn = (state: State, action: Actions) => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      }
    case 'FILTER':
      return {
        ...state,
        filteredProducts: filteredProducts(state.products, action.payload),
      }
    default:
      return state
  }
  return state
}

function ProductProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(reducerFn, initialState)
  const value = { state, dispatch }

  return <ProductFilterContext.Provider value={value}>{children}</ProductFilterContext.Provider>
}

function useProducts() {
  const context = useContext(ProductFilterContext)
  return context
}
const init = (dispatch: Dispatch<Actions>, payload: Product[]) =>
  dispatch({ type: 'INIT', payload })
const filterByCategory = (dispatch: Dispatch<Actions>, payload: string) =>
  dispatch({ type: 'FILTER', payload })

export { ProductProvider, useProducts, init, filterByCategory }
export type { Product }
