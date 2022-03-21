import Head from 'next/head'
import Link from 'next/link'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Typetool</title>
        <meta name="description" content="Typetool is an app for typographers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Typetool</h1>
        <p>Tool for modern typographers</p>
        <Link href="/tool">
          <a>Start</a>
        </Link>
      </main>
    </div>
  )
}
