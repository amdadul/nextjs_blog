
export default async function getAllPosts(limit) {
    let limitText = "";
    if (limit != "no") {
        limitText = `?_limit=${limit}`
    }
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts${limitText}`, {
        next : {
            revalidate: 30,
        }
    });

    return result.json();
}