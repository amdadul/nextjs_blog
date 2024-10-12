import getPost from '@/app/api/getPost';
import Comments from '@/app/components/comments';
import LeaveComment from '@/app/components/LeaveComment';
import Head from 'next/head';
import { Suspense } from 'react';

export default async function page({ params }) {
    const blog = await getPost(params.id);

    const comments = [];

    return (
        <>
            <Head>
                <title>{blog.title} - My Blog</title>
            </Head>
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">{blog.title}</h1>
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
                        <p className="text-lg text-gray-700 whitespace-pre-line">{blog.body}</p>
                    </div>

                    <Suspense callback="Loading comments..">
                        <Comments id={params.id}></Comments>
                    </Suspense>

                    <LeaveComment></LeaveComment>
                </div>
            </section>
        </>
    )
}