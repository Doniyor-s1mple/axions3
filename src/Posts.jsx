import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Posts = () => {


    const [PostsData, setPosts] = useState([])
    function getPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }

    useEffect(() => {
        getPosts()
    })


    return (
        <div className='row text-light my-3'>
            <h2 className='text-center text-light'>Posts</h2>
            {
                PostsData.map((item, index) => <div className='col-4'>
                    <div className="card my-2 bg-dark text-light">
                        <div className="card-header">
                            {item.id}. {item.title}
                        </div>
                    </div>
                </div>)
            }


        </div>
    )
}

export default Posts