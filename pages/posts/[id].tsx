import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css'
import { getAllPostsId, getPostDataById } from "../../lib/posts";

export default function Post({ postData }:
    {
        postData:
        { date: string, title: string, contentHtml: string }
    }
) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <main>
                <article>
                    <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                    <div className={utilStyles.lightText}>
                        <Date dateString={postData.date} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </article>
            </main>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostsId();
    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params }:
    {
        params:
        { id: string }
    }) {
    const postData = await getPostDataById(params.id);
    return {
        props: {
            postData
        }
    }
}