import { Dispatch, createContext, useContext, useReducer } from 'react'

export interface Task {
  id: number
  text: string
  done: boolean
}

type Action =
  | { type: 'add'; payload: Task }
  | { type: 'edit'; payload: Task }
  | { type: 'delete'; payload: number }

const initialTasks: Task[] = [
  { id: 0, text: 'First todo', done: true },
  { id: 1, text: 'Second todo', done: false },
  { id: 2, text: 'Third todo', done: false },
]
export type DispatchAction = Dispatch<Action>

const TasksContext = createContext<Task[] | undefined>(undefined)
const TasksDispatchContext = createContext<DispatchAction | undefined>(undefined)

function TasksProvider({ children }: { children: React.ReactNode }) {
  const reducerFunction = (state: Task[], action: Action) => {
    switch (action.type) {
      case 'add':
        return [...state, action.payload]
      case 'edit':
        return state.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload
          }
          return task
        })
      case 'delete':
        return state.filter((task) => task.id !== action.payload)
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducerFunction, initialTasks)

  return (
    <TasksContext.Provider value={state}>
      <TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

function useTasks() {
  const context = useContext(TasksContext)
  // Check the value is not undefined and
  // has been initialised by the provider
  if (context == undefined) {
    throw new Error(
      'The "useContext" hook must be used within the corresponding context "Provider"',
    )
  }
  return context
}

function useTasksDispatch() {
  const context = useContext(TasksDispatchContext)
  // Check the value is not undefined and
  // has been initialised by the provider
  if (context == undefined) {
    throw new Error(
      'The "useContext" hook must be used within the corresponding context "Provider"',
    )
  }
  return context
}

function handleAddTask(dispatch: DispatchAction, task: Task) {
  dispatch({
    type: 'add',
    payload: task,
  })
}
function handleEditTask(dispatch: DispatchAction, task: Task) {
  dispatch({
    type: 'edit',
    payload: task,
  })
}
function handleDeleteTask(dispatch: DispatchAction, id: Task['id']) {
  dispatch({
    type: 'delete',
    payload: id,
  })
}

export {
  useTasks,
  useTasksDispatch,
  TasksDispatchContext,
  TasksProvider,
  handleAddTask,
  handleEditTask,
  handleDeleteTask,
}
