/**
 * Persistent Task Tracker
 * Build a task tracker application that stores tasks locally, allowing users to access, delete and set complete tasks
 */

import { ChangeEvent, useEffect, useState } from 'react'

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

const fetchMockData = (): Promise<Task[]> => {
  return new Promise((resolve, reject) => {
    const shouldFail = false
    setTimeout(() => {
      if (!shouldFail) {
        resolve(DATA)
      } else {
        reject(new Error('Failed to fetch mock data'))
      }
    }, 1000)
  })
}

const TaskTracker = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    // with Promises
    // fetchMockData()
    //   .then((data) => {
    //     setTasks(data)
    //   })
    //   .catch((e) => {
    //     setError(e.message)
    //   })
    //   .finally(() => setLoading(false))

    // with async await
    const fetchData = async () => {
      try {
        const result = await fetchMockData()
        setTasks(result)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('An unknown error occurred')
        }
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

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

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>
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
