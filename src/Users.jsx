import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Users = () => {

    const [Users, setUsers] = useState([])
    function getUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json().then(data => setUsers(data)))
    }

    useEffect(() => { getUsers() })


    return (
        <div className='row my-2'>
            <h2 className='text-center text-light'>Users</h2>
            {
                Users.map((item, index) => <div className='container'>
                    <div className="card bg-dark text-light">
                        <div className="card-header">
                            {item.id}
                            {item.name}
                        </div>
                        <div className="card-body">
                            {item.email}
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users