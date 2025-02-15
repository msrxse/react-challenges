import { useState } from "react"

/**
 * Implement a Tabs Component
 * Create a tabs component where each tab displays different content when selected.
 */
const Tabs = () => {
    const DATA = [
        {
            "id": 1,
            "title": "delectus",
        },
        {
            "id": 2,
            "title": "quis",
        },
        {
            "id": 3,
            "title": "fugiat",
        },
        {
            "id": 4,
            "title": "porro",
        },
        {
            "id": 5,
            "title": "laboriosam",
        },
    ]
    const [visible, setVisible] = useState(-1)

    return (
        <div>
            <ul style={{listStyle:"none"}}>
                {DATA.map((each, index) => (
                        <li key={each.id} style={{display: 'inline'}}>
                            <button className={visible === each.id ? 'active': '' } onClick={() => setVisible(index)}>{each.title}</button>
                        </li>
                ))}
                <div>
                    {DATA[visible]?.title}
                </div>
            </ul>
        </div>
    )
}

export default Tabs