import Head from "next/head";
import {readFile} from "node:fs/promises";

export async function getStaticProps() {
    console.log('FirstPostPage getStaticProps()');
    const data = await readFile('content/posts/first-post.json', 'utf8');
    console.log('data :' , data);
    const post = JSON.parse(data);
    return {
        props: { post },
    };
}

function FirstPostPage({ post }) {
    console.log('[PostPage] render :', post);
    return (
        <>
            <Head>
                <title>{post?.title} - My Blog</title>
            </Head>
            <main>
                <h1>{post.title}</h1>
                <p>
                    {post.body}
                </p>
            </main>
        </>
    );
}

export default FirstPostPage;
