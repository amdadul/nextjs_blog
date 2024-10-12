
export default async function getComments(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next : {
            revalidate: 30,
        }
    });

    return result.json();
}