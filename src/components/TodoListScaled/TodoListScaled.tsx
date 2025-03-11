import TaskList from './TaskList'
import { TasksProvider } from './TasksContext'

function TodoListScaled() {
  return (
    <TasksProvider>
      <div>
        <h1>Scaled TodoList</h1>
        <ul style={{ listStyleType: 'none' }}>
          <TaskList />
        </ul>
      </div>
    </TasksProvider>
  )
}

export default TodoListScaled
