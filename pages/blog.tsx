import Container from '../components/container'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import AllPosts from '../components/all-posts'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {

  return (
    <>
        <Head>
          <title>{`onerdy.com | blog`}</title>
        </Head>
        <Container>
          <AllPosts posts={allPosts} />
        </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}