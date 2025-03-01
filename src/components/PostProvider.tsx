import React, { createContext, useContext, useReducer, Dispatch } from 'react'

interface Post {
  id: number
  title: string
  description: string
}
type PostsContextType = {
  posts: Post[]
  dispatch: Dispatch<Action>
}
type Action =
  | {
      type: 'ADD_POST'
      payload: Post
    }
  | {
      type: 'DELETE_POST'
      payload: number
    }

const PostsContext = createContext<PostsContextType | undefined>(undefined)

/**
 * Implement a Context API for Global State
 * Create a global state using React's Context API to manage the state of posts across the application.
 */
const PostProvider = ({ children }: { children: React.ReactNode }) => {
  function postReducer(state: Post[], action: Action) {
    switch (action.type) {
      case 'ADD_POST':
        return [...state, action.payload]
      case 'DELETE_POST':
        return state.filter((each) => each.id !== action.payload)
      default:
        return state
    }
  }
  const initialState: Post[] = [
    {
      id: 0,
      title: 'Post Title 1',
      description: 'Post description 1',
    },
  ]
  const [posts, dispatch] = useReducer(postReducer, initialState)
  return <PostsContext.Provider value={{ posts, dispatch }}>{children}</PostsContext.Provider>
}

// Custom hook to use the context safely
const usePosts = () => {
  const context = useContext(PostsContext)
  if (!context) {
    throw new Error('usePosts must be used within a PostProvider')
  }
  return context
}

const addPost = (dispatch: Dispatch<Action>, payload: Post) => {
  dispatch({ type: 'ADD_POST', payload })
}

const deletePost = (dispatch: Dispatch<Action>, payload: number) => {
  dispatch({ type: 'DELETE_POST', payload })
}

/**
 * USAGE
 * import {PostProvider, usePosts, addPost, deletePost}
 */

const App = () => {
  return (
    <PostProvider>
      <PostList />
    </PostProvider>
  )
}

const PostList = () => {
  const { posts, dispatch } = usePosts()
  const newPost = {
    id: 1,
    title: 'New Post Title',
    description: 'New post description',
  }

  if (!posts) {
    return null
  }

  return (
    <div>
      <button onClick={() => addPost(dispatch, newPost)}>Add Post</button>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {post.title} <button onClick={() => deletePost(dispatch, post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

App.displayName = 'PostProvider'
export default App
export { PostProvider, usePosts, addPost, deletePost }
