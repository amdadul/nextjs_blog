import React from 'react'
import getAllPosts from '../api/getAllPosts'
import Blog from './Blog';

export default async function Blogs ({limit}){
    const blogs = await getAllPosts(limit) || [];
    
    return (
        <div>
            <section className="py-12 bg-white">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                {blogs.map(item => (<Blog key={item.id} data={item}></Blog>))}

                </div>
            </section>
        </div>
    )
}

