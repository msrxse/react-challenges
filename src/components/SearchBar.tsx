import { useState } from "react"

/**
 * Create a Search Bar
 * Create a search bar component that filters a list of items as the user types.
 */
const SearchBar = () => {
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
    const [query, setQuery] = useState('')
    const filteredData = DATA.filter(each => each.title.includes(query))

    return (
        <div style={{border: '1px solid lightgray', padding:'5px'}}>
            <input type='text' value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..."/>
            <ul>
                {filteredData.map((each) => (
                    <ul key={each.id}>{each.title}</ul>
                ))}
            </ul>
        </div>
    )
}

export default SearchBar