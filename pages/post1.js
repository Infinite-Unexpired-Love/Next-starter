import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>FirstPost</title>
            </Head>
            <main>
                <h1>first post</h1>
                <h2>
                    <Link href='/'>Back to home</Link>
                </h2>
            </main>
        </Layout>
    )
}