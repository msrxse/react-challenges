import { useEffect, useState } from 'react'
import './styles.css'

interface Post {
  by: string
  id: number
  score: number
  time: number
  title: string
  type: 'job'
  url: string
}
type PostsIndexed = {
  [id: number]: Post
}

// Convert Unix timestamp to JavaScript Date
function formatDate(time: number) {
  const date = new Date(time * 1000) // Multiply by 1000 to convert from seconds to milliseconds

  // Format the date
  return date.toLocaleString() // Adjusts to the user's local time zone
}

function ListItems({ post }: { post: Post }) {
  return (
    <li className="nh-job-board-cards">
      <p>{post.title}</p>
      <div>
        <p>By {post.by}</p>
        <p>{formatDate(post.time)}</p>
      </div>
    </li>
  )
}

function HNJobBoard() {
  const [loading, setLoading] = useState(false)
  const [paginationLoading, setPaginationLoading] = useState(false)
  const [jobBoardIds, setJobBoardIds] = useState<number[]>([])
  const [postDetails, setPostDetails] = useState<PostsIndexed>({})
  const [error, setError] = useState<Error>()

  const fetchPostDetails = (detailIds: number[]) => {
    setPaginationLoading(true)
    if (detailIds.length === 0) return
    detailIds.forEach((id) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((data) =>
          setPostDetails((posts) => ({
            ...posts,
            [id]: data,
          })),
        )
        .catch((error) => setError(error))
        .finally(() => setPaginationLoading(false))
    })
  }

  const nextPageIds = (arr: number[], page = 1) => {
    const limit = 6 * page
    arr.splice(0, limit)
    return [arr.slice(0, limit), arr.slice(limit)]
  }

  /**
   * Fetch jobBoardIds
   *
   * Then fetches first page (6) post details per ID
   * ensuring those ids are removed from jobBoardIds array
   * subsequent pagination will keep doing the same
   */
  useEffect(() => {
    setLoading(true)

    const URL = 'https://hacker-news.firebaseio.com/v0/jobstories.json'
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(URL)
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok')
    //     }
    //     const data = await response.json()
    //     setData(data)
    //     setLoading(false)
    //   } catch (error) {
    //     setError(error)
    //     setLoading(false)
    //   }
    // }
    const fetchData = () => {
      fetch(URL)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((data) => {
          const [firstPageOfIds, nextPages] = nextPageIds(data)
          fetchPostDetails(firstPageOfIds)
          setJobBoardIds(nextPages)
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }

    fetchData()
  }, [])

  const handlePaginationClick = () => {
    if (jobBoardIds.length === 0) {
      return
    }
    const [firstPageOfIds, nextPages] = nextPageIds(jobBoardIds)
    fetchPostDetails(firstPageOfIds)
    setJobBoardIds(nextPages)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!jobBoardIds) return <p>No jobs found</p>
  console.log(loading)

  return (
    <div className="nh-job-board-main-div">
      <h3>HNJobBoard</h3>
      <ul className="nh-job-board-main-list">
        {Object.values(postDetails).map((post) => {
          return <ListItems key={post.id} post={post} />
        })}
      </ul>
      <div className="nh-job-board-footer">
        <button
          className={`nh-job-board-button ${paginationLoading ? 'nh-job-board-button-loading' : ''}
          ${jobBoardIds.length === 0 ? 'nh-job-board-button-loading' : ''}`}
          disabled={paginationLoading}
          onClick={handlePaginationClick}
        >
          Load more jobs
        </button>
      </div>
    </div>
  )
}

export default HNJobBoard
