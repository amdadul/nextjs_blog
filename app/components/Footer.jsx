import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 py-6">
                <div className="container mx-auto text-center">
                    <p className="text-gray-400">© 2024 MyBlog. All rights reserved.</p>
                    <div className="mt-4">
                        <a href="#" className="text-gray-400 hover:text-white mx-2">Facebook</a>
                        <a href="#" className="text-gray-400 hover:text-white mx-2">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer