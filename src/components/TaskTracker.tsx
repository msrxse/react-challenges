/**
 * Persistent Task Tracker
 * Build a task tracker application that stores tasks locally, allowing users to access, delete and set complete tasks
 */

import { ChangeEvent, useState } from 'react'

const DATA = [
  {
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: true,
  },
  {
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
  {
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  },
]
interface Task {
  id: number
  title: string
  completed: boolean
}
const TaskTracker = () => {
  const [tasks, setTasks] = useState<Task[]>(DATA)
  const [newTask, setNewTask] = useState('')

  const handleComplete = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const { checked } = e.target
    const newTasks = tasks.map((each) => {
      if (each.id === id) {
        return {
          ...each,
          completed: checked,
        }
      }
      return each
    })

    setTasks(newTasks)
  }
  const handleDelete = (id: number) => {
    const newTasks = tasks.filter((each) => each.id !== id)
    setTasks(newTasks)
  }
  const handleAddTask = () => {
    if (!newTask) {
      return undefined
    }
    const newTasks = [...tasks]
    console.log(newTasks)
    const id = newTasks[newTasks.length - 1].id + 1

    newTasks.push({
      id,
      title: newTask,
      completed: false,
    })

    setTasks(newTasks)
    setNewTask('')
  }

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(e) => handleComplete(e, task.id)}
            />
            {task.title}
            <button onClick={() => handleDelete(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={handleAddTask}>Add task</button>
      </div>
    </div>
  )
}
export default TaskTracker
