import React, { createContext, useContext, useReducer } from 'react'

const PostsContext = createContext({})

type Action =
  | {
      type: 'ADD_POST'
      payload: string
    }
  | {
      type: 'DELETE_POST'
      payload: number
    }

type Dispatch = (action: Action) => void
/**
 * Implement a Context API for Global State
 * Create a global state using React's Context API to manage the state of posts across the application.
 */
const PostProvider = ({ children }: { children: React.ReactNode }) => {
  function postReducer(state: string[], action: Action) {
    switch (action.type) {
      case 'ADD_POST':
        return [...state, action.payload]
      case 'DELETE_POST':
        return state.filter((each, index) => index === action.payload)
      default:
        return state
    }
  }
  const [posts, dispatch] = useReducer(postReducer, [])
  return <PostsContext.Provider value={{ posts, dispatch }}>{children}</PostsContext.Provider>
}

const usePosts = () => {
  return useContext(PostsContext)
}

const addPost = (dispatch: Dispatch, payload: string) => {
  dispatch({ type: 'ADD_POST', payload })
}

const deletePost = (dispatch: Dispatch, payload: number) => {
  dispatch({ type: 'DELETE_POST', payload })
}

export { PostProvider, usePosts, addPost, deletePost }

/**
 * USAGE
 *
 * import {PostProvider, usePosts, addPost, deletePost}
 *
 * const App = () => {
 *  <PostProvider>
 *    const {posts, dispatch} = usePosts()
 *
 *    return (
        <div>
          <button onClick={() => addPost(dispatch, newPost)}>Add Post</button>
          <ul>
            {posts.map((post, index) => (
              <li key={index}>
                {post} <button onClick={() => deletePost(dispatch, index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
 *
 *  </PostProvider>
 *
 * }
 */
