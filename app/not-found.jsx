import Link from 'next/link'
import React from 'react'

export function generateMetadata(){
    return {
        title: "404 - Page Not Found",
        description: "Requested page was not found in this site!",
      }
}

const notFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

    <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">404</h1>
    
    <div className="bg-blue-600 px-2 text-sm rounded rotate-12 absolute">
      Page Not Found
    </div>

    <div className="mt-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Oops! The page you're looking for doesn't exist.</h2>
      <p className="mt-2 text-gray-500">It might have been moved or deleted.</p>

      <Link href="/" className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Back to Home
      </Link>
    </div>
  </div>
  )
}

export default notFound
