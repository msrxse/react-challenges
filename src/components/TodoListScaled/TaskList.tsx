import { useState } from 'react'
import AddTask from './AddTask'
import {
  useTasks,
  useTasksDispatch,
  handleAddTask,
  handleEditTask,
  handleDeleteTask,
} from './TasksContext'

function TaskList() {
  const tasks = useTasks()
  const dispatch = useTasksDispatch()
  const [input, setInput] = useState('')
  const state = useTasks()

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />{' '}
      <button
        onClick={() =>
          handleAddTask(dispatch, {
            id: state?.length || 0,
            text: input,
            done: false,
          })
        }
      >
        Add
      </button>
      {(tasks || []).map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) =>
              handleEditTask(dispatch, {
                ...task,
                done: e.target.checked,
              })
            }
          />

          <AddTask task={task} />

          <button onClick={() => handleDeleteTask(dispatch, task.id)}>Delete</button>
        </li>
      ))}
    </div>
  )
}

export default TaskList
