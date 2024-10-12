'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h1 className="text-6xl font-bold text-blue-500 mb-4">
                        Error
                    </h1>
                    <p className="text-xl text-gray-700 mb-6">
                        Something went wrong!
                    </p>
                    <Link href="/" className="px-6 py-2 mb-6 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
                        Go back home
                    </Link>
                    <br></br>
                    <button className="px-6 py-2 mt-6 text-white bg-green-950 rounded hover:bg-green-600 transition"
                        onClick={
                            () => reset()
                        }
                    >
                        Try again
                    </button>
                </div>
            </div>
        </div>
    )
}