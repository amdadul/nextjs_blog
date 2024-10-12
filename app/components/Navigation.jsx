import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div>
        <header className="bg-white shadow">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <Link href="/" className="text-2xl font-bold text-gray-800">MyBlog</Link>
      <nav className="space-x-6 hidden md:flex">
        <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
        <Link href="/blogs" className="text-gray-600 hover:text-gray-900">Blogs</Link>
        <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
      </nav>
      <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 hidden md:block"></input>
      <button className="md:hidden text-gray-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </header>
    </div>
  )
}

export default Navigation