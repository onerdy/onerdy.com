import Container from '../components/container'
import Head from 'next/head'

export default function Index() {
  
  return (
    <>
        <Head>
          <title>{`onerdy.com | home`}</title>
        </Head>
        <Container>
          Home
        </Container>
    </>
  )
}