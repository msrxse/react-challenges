import { useEffect, useState } from 'react'
import Dropdown from './Dropdown'

import './styles.css'
/**
 * Develop a product filtering system
 *
 * Implement filter options such as category, price range, brand, and other attributes,
 * allowing users to narrow down product listings according to their preferences
 */
interface Product {
  id: number
  categories: string
  priceRanges: string
  brands: string
  colors: string
  ratings: number
}

const categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Sports', 'Books']
const priceRanges = ['$0 - $50', '$50 - $100', '$100 - $500', '$500 - $1000', '$1000+']
const brands = ['BrandA', 'BrandB', 'BrandC', 'BrandD', 'BrandE']
const colors = ['Red', 'Blue', 'Green', 'Black', 'White']
const ratings = [1, 2, 3, 4, 5]
const generateProducts = (size = 10) => {
  const products = []
  for (let i = 0; i <= size; i++) {
    products.push({
      id: Math.random(),
      categories: categories[Math.floor(Math.random() * categories.length)],
      priceRanges: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      brands: brands[Math.floor(Math.random() * brands.length)],
      colors: colors[Math.floor(Math.random() * colors.length)],
      ratings: ratings[Math.floor(Math.random() * ratings.length)],
    })
  }
  return products
}
const fetchProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(generateProducts(100)), 500)
  })
}

/**
 * ProductFilter
 */
const ProductFilter = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data)
        setFilteredProducts(data)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const handleSelectionCb = (selectionObj: { [x: string]: string | number }) => {
    const [key, value] = Object.entries(selectionObj)[0]

    let fProducts: Product[] = []

    if (typeof value === 'string') {
      fProducts = products.filter((each) => {
        const intermediate = each[key as keyof Product]
        if (typeof intermediate === 'string') {
          return intermediate.includes(value)
        }
      })
    }

    // In case of clicking ratings
    if (typeof value === 'number') {
      fProducts = products.filter((each) => each[key as keyof Product] === value)
    }

    return setFilteredProducts(fProducts)
  }

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="mainDiv">
      <div className="toolbar">
        <Dropdown placeholder="categories" items={categories} onSelectionCb={handleSelectionCb} />
        <Dropdown placeholder="priceRanges" items={priceRanges} onSelectionCb={handleSelectionCb} />
        <Dropdown placeholder="brands" items={brands} onSelectionCb={handleSelectionCb} />
        <Dropdown placeholder="colors" items={colors} onSelectionCb={handleSelectionCb} />
        <Dropdown placeholder="ratings" items={ratings} onSelectionCb={handleSelectionCb} />
      </div>
      <table>
        <thead>
          <tr className="header">
            <td>Categories</td>
            <td>PriceRanges</td>
            <td>Brands</td>
            <td>Colors</td>
            <td>Ratings</td>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((each) => (
            <tr key={each.id} className="rows">
              <td>{each.categories}</td>
              <td>{each.priceRanges}</td>
              <td>{each.brands}</td>
              <td>{each.colors}</td>
              <td>{each.ratings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default ProductFilter
