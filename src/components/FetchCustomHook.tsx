import { useEffect, useState } from 'react'

type Data = { data: string[]; status: number }

const fetchDataMock = (url: string): Promise<Data> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://api.example.com/data') {
        resolve({ data: ['one', 'two', 'three'], status: 200 })
      } else {
        reject({ message: 'Failed to fetch data', status: 500 })
      }
    }, 2000)
  })
}

/**
 * Create a Custom Hook
 * Create a custom hook that fetches and caches data from an API.
 */
const useFetch = (url: string) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<string[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    fetchDataMock(url)
      .then(({ data }) => {
        setData(data)
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [url])

  return { loading, data, error }
}

const App = () => {
  const { loading, data, error } = useFetch('https://api.example.com/data')

  if (loading) {
    return <p>'Loading...'</p>
  }
  if (error) {
    return <p>Error: {error}</p>
  }
  return (
    <ul>
      {data.map((each, index) => (
        <li key={index}>{each}</li>
      ))}
    </ul>
  )
}

App.displayName = 'FetchCustomHook'
export default App
