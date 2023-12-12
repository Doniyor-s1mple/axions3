import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Todos = () => {

    const [Todos, setTodos] = useState([])
    function getTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json()).then(data => setTodos(data))
    }

    useEffect(() => {
        getTodos()
    })
    return (
        <div className='row my-2'>
            <h2 className='text-center text-light'>Todos</h2>
            {
                Todos.map((item, index) => <div className='container'>
                        <div className="card bg-dark text-light">
                            <div className="card-body">
                                {item.id}
                                <input type="checkbox" checked={item.completed} className='mx-2' />
                                {item.title}
                            </div>
                        </div>
                </div>)
            }
        </div>
    )
}

export default Todos