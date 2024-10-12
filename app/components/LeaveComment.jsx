"use client"
import {React,useState} from 'react'

const LeaveComment = () => {

    const [commentData, setCommentData] = useState({ name: "", comment: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Normally, you would post the comment to a server here
        const newComment = {
          id: comments.length + 1,
          ...commentData
        };
        setComments([...comments, newComment]);
        setCommentData({ name: "", comment: "" });
      };

    return (
        <div><h2 className="text-2xl font-bold text-gray-800 mb-4">Leave a Comment</h2>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={commentData.name}
                            onChange={(e) => setCommentData({ ...commentData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="comment">
                            Comment
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows="4"
                            value={commentData.comment}
                            onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Submit Comment
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LeaveComment