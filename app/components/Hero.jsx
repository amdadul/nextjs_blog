import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div>
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Welcome to My Blog</h1>
                    <p className="mt-4 text-gray-600">Sharing insights, ideas, and stories.</p>
                    <Link href="/blogs" className="mt-6 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">Explore Latest Posts</Link>
                </div>
            </section>
        </div>
    )
}

export default Hero