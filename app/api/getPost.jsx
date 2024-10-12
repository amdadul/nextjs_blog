
export default async function getPost(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next : {
            revalidate: 30,
        }
    });

    return result.json();
}