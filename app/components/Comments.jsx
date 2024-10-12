import getComments from "../api/getComments";

export default async function Comments({ id }) {
    const comments = await getComments(id) || [];

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Comments</h2>

            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">

                {comments.map((comment) => (
                    <div key={comment.id} className="mb-4 border-b pb-4">
                        <h3 className="font-bold text-lg text-gray-800">{comment.name}</h3>
                        <p className="text-gray-600">{comment.body}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}