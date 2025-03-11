import { useState } from 'react'
import type { Task } from './TasksContext'
import { handleEditTask, useTasksDispatch } from './TasksContext'

function AddTask({ task }: { task: Task }) {
  const [editMode, setEditMode] = useState<Task['id']>(-1)
  const [editInput, setEditInput] = useState('')
  const dispatch = useTasksDispatch()

  if (editMode === task.id) {
    return (
      <>
        <input value={editInput} onChange={(e) => setEditInput(e.target.value)} />
        <button
          onClick={() => {
            setEditMode(-1)
            setEditInput('')
            handleEditTask(dispatch, {
              ...task,
              text: editInput,
            })
          }}
        >
          Save
        </button>
      </>
    )
  } else {
    return (
      <>
        {task.text}
        <button
          onClick={() => {
            setEditInput(task.text)
            setEditMode(task.id)
          }}
        >
          Edit
        </button>
      </>
    )
  }
}

export default AddTask
