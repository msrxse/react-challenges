/**
 * Data Grid
 * Implement a content viewer with pagination
 *
 * Divide a large dataset into pages and provide navigation controls to
 * allow users to navigate through the content easily
 */
import { useEffect, useState } from 'react'
import './styles.css'

const DATA = [
  ['Date', 'Type', 'Description', 'Amount', 'Balance'],

  ['01-Jan-16', 'Deposit', 'Cash Deposit', '$1,000,000.00', '$1,000,000.00'],
  ['02-Jan-16', 'Debit', 'Down Town Grocery', '$250.00', '$999,750.00'],
  ['03-Jan-16', 'Deposit', 'Hot Coffee', '$9.00', '$999,741.00'],
  ['04-Jan-16', 'Debit', 'The Filling Station', '$88.00', '$999,653.00'],
  ['05-Jan-16', 'Debit', 'Tinkers Hardware', '$3,421.00', '$996,232.00'],
  ['06-Jan-16', 'Debit', 'Cuteys Salon', '$700.00', '$995,532.00'],

  ['05-Jan-16', 'Debit', 'Bread', '$9.00', '$999,741.00'],
  ['05-Jan-16', 'Debit', 'Hardware', '$3,421.00', '$96,232.00'],
  ['01-Jan-16', 'Deposit', 'Cash Deposit', '$1,000.00', '$1,000,000.00'],
  ['06-Jan-16', 'Debit', 'Salon', '$700.00', '$95,532.00'],
  ['02-Jan-16', 'Debit', 'Down Town Grocery', '$250.00', '$99,750.00'],
  ['04-Jan-16', 'Debit', 'The Filling', '$88.00', '$99,653.00'],

  ['12-Jan-23', 'Deposit', 'Groceries', '$20.00', '$99,750.00'],
  ['03-Jan-20', 'Debit', 'Cuteys Salon', '$88.00', '$3,421.00'],
]

type GridData = string[][]
interface Response {
  data: GridData
  limit: number
  offset: number
  total: number
}

const fetchData = ({ limit = 6, offset = 0 }): Promise<Response> => {
  const pagedData = DATA.slice(offset, offset + limit + 1)
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: pagedData, limit, offset, total: 14 }), 300)
  })
}

const DataGrid = () => {
  const [data, setData] = useState<GridData>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(-1)
  const [pagination, setPagination] = useState({ limit: 0, offset: 0, total: 0 })

  const fetchService = ({ limit, offset }: { limit: number; offset: number }) =>
    fetchData({ limit, offset }).then(({ data, limit, offset, total }) => {
      setPagination({ limit, offset, total })
      setLoading(false)
      setCurrentPage(Math.round(offset / limit))
      setData(data)
    })

  useEffect(() => {
    fetchService({ limit: 6, offset: 0 })
  }, [])

  const getNumberOfPages = () => {
    return Math.ceil(pagination.total / pagination.limit)
  }

  const handleNext = () => {
    const offset = Math.min(getNumberOfPages() - 1, currentPage + 1) * pagination.limit
    fetchService({ limit: pagination.limit, offset })
  }

  const handlePrevious = () => {
    const offset = Math.max(0, currentPage - 1) * pagination.limit
    fetchService({ limit: pagination.limit, offset })
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page)
    fetchService({ limit: pagination.limit, offset: page * pagination.limit })
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (data.length === 0) {
    return <p>No data available</p>
  }
  const getCurrentPage = () => {
    return Math.round(pagination.offset / pagination.limit)
  }

  return (
    <div className="table-wrap">
      <div className="toolbar">
        <button onClick={handleNext}>Next</button>
        {[...Array(getNumberOfPages())].map((each, i) => (
          <button
            key={i}
            className={`${getCurrentPage() === i ? 'active' : ''}`}
            onClick={() => handlePageClick(i)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={handlePrevious}>Previous</button>
      </div>
      <table className="main-table">
        <tbody>
          <tr className="headers">
            {data[0]?.map((headers, i) => (
              <th key={`row-${i}`}>{headers}</th>
            ))}
          </tr>
          {data?.slice(1).map((row, i) => (
            <tr key={`row-${i}`}>
              {row.map((cell, j) => (
                <td tabIndex={-1} key={`row-${i}-col-${j}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default DataGrid
