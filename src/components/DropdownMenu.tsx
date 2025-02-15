import { useState } from "react"

/**
 * Build a Dropdown Menu
 * Create a dropdown menu component that displays a list of items when clicked.
 */
const DropdownMenu = () => {
    const DATA = [
        {
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
    ]
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div >
            <button onClick={() => setIsOpen(!isOpen)}>Open Menu</button>
            <ul>
            {isOpen && 
                DATA.map(each => (
                    <li key={each.id}>
                        {each.title}
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default DropdownMenu