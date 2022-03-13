import { useEffect, useState } from "react";

import axios from "axios"

export const Grocery = () => {

    const [text, setText] = useState("");
    const [groceries, setGroceries] = useState([])

    const [page, setPage] = useState(1);

    
    useEffect(() => {
  

        getData()
        
    }, [page])
    
    // const totalPages = Math.ceil(todos.length / 3);

    // console.log(todos)

    const getData = () => {
        axios.get(`http://localhost:3001/groceries?_limit=5&_page=${page}`).then(res => {
            setGroceries(res.data)
        })
    }

    return <div>
        <input type = "text" onChange={ e => setText(e.target.value)} />
        <button onClick={() => {
            fetch("http://localhost:3001/groceries", {
                method: "POST",
                body: JSON.stringify({title: text, status: false}),
                headers: {
                    "content-type": "application/json"
                }
            }).then(() => {
                getData()
            });
        }}>Add Grocery</button>

        {groceries.map((g) => (
             <div key = {g.id}> {g.title} </div>
        ))}

        <button onClick={() => {
            if(page > 1) {
                setPage(page - 1)
            }
        }}>Prev</button>
        <button onClick={() => {
            if(groceries.length > 2 ){
                setPage(page + 1)
            }
            
        }}>Next</button>

    </div>
}