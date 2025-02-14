import { useState } from "react"

/**
 * Build a To-Do List
 * Create a to-do list component where users can add, remove, and mark todo as complete
 */
const TodoList = () => {
    interface Text {
        label:string;
        completed:boolean;
    }

    const [text, setText] = useState<string>('')
    const [todos, setTodos] = useState<Text[]>([])

    const handleAddTodo = () => {
        if(!text){
            return undefined
        }
        setTodos([...todos, {label:text, completed:false}])
        setText('')
    }
    const handleDelete = (index:number) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)

        return setTodos(newTodos)
    }
    const handleComplete = (index:number) => {
        const newTodos = [...todos]
        newTodos[index].completed = !newTodos[index].completed

        return setTodos(newTodos)
    }

    return (
        <div>
            <input 
                onChange={(e)=>setText(e.target.value)} 
                value={text}
            />
            <button onClick={handleAddTodo}>Add text</button>
            <ul>
                {todos.map((each, index) => (
                    <li key={each.label} style={{textDecoration: each.completed ? 'line-through': 'none'}}>
                        {each.label}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        <button onClick={() => handleComplete(index)}>Set Completed</button>
                    </li>
                ))}
                </ul>
        </div>
    )
}

export default TodoList