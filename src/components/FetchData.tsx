import { useEffect, useState } from "react"

interface Todos {
    completed:boolean;
    id:number;
    title:string;
    userId:number;
}
/**
 * Fetch Data from an API
 * Create a component fetching data from an API and displaying it in a list.
 */
const FetchData = () => {
    const [data, setData] = useState<Todos[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
            .catch(e => console.log(e)
        )
    },[])

    if(loading){
        return <p>'loading...'</p>
    }

    return (
        <ul>
            {data.map((each) => (
                <li key={each.id}>{each.title}</li>
            ))}
        </ul>
    )
    
}
export default FetchData