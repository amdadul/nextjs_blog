import Link from 'next/link'
import React from 'react'

const Blog = ({data}) => {
    return (
        <div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="https://via.placeholder.com/400x250" alt="Blog Post" className="w-full h-48 object-cover"></img>
                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800">{data.title}</h2>
                    <p className="mt-4 text-gray-600">{data.body}</p>
                    <Link href={`/blog/${data.id}`} className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default Blog