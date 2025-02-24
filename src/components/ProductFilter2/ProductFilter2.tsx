import { ChangeEvent, useEffect, useState } from 'react'
import { ProductProvider, useProducts, init, filterByCategory } from './ProductFilterContext'
import './styles.css'

const generateProducts = (size = 10) => {
  const categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Sports', 'Books']
  const priceRanges = ['$0 - $50', '$50 - $100', '$100 - $500', '$500 - $1000', '$1000+']
  const brands = ['BrandA', 'BrandB', 'BrandC', 'BrandD', 'BrandE']
  const colors = ['Red', 'Blue', 'Green', 'Black', 'White']
  const ratings = [1, 2, 3, 4, 5]

  const products = []
  for (let i = 0; i <= size; i++) {
    products.push({
      id: i,
      categories: categories[Math.floor(Math.random() * categories.length)],
      priceRanges: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      brands: brands[Math.floor(Math.random() * brands.length)],
      colors: colors[Math.floor(Math.random() * colors.length)],
      ratings: ratings[Math.floor(Math.random() * ratings.length)],
    })
  }
  return products
}
/**
 * Product Filter
 * Develop a product filtering system enabling users to search products from using input search
 *
 * Use context + reducer to handle state
 */
const ProductFilter2 = () => {
  const { state, dispatch } = useProducts()
  const [inputSearch, setInputSearch] = useState('')

  useEffect(() => {
    init(dispatch, generateProducts(99))
  }, [dispatch])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setInputSearch(value)
    filterByCategory(dispatch, value)
  }

  return (
    <div>
      <div>
        <input placeholder="Search Products" value={inputSearch} onChange={handleChange} />
      </div>
      <table>
        <thead>
          <tr>
            <td>Categories</td>
            <td>PriceRanges</td>
            <td>Brands</td>
            <td>Colors</td>
            <td>Ratings</td>
          </tr>
        </thead>
        <tbody>
          {state.filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.categories}</td>
              <td>{product.priceRanges}</td>
              <td>{product.brands}</td>
              <td>{product.colors}</td>
              <td>{product.ratings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  return (
    <ProductProvider>
      <ProductFilter2 />
    </ProductProvider>
  )
}

export default App
