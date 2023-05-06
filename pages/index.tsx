import Container from '../components/container'
import Head from 'next/head'

export default function Index() {
  
  return (
    <>
        <Head>
          <title>{`onerdy.com | home`}</title>
        </Head>
        <Container>
          <div className="flex justify-between max-w-3xl bg-black bg-opacity-60 rounded-3xl p-6 m-4">
              <img
                src="/assets/blog/authors/rodney.webp"
                className="w-20 h-20 rounded-full"
                alt="Logo"
              />
            <div className="flex pl-4 sm:text-lg">
              <p className="">
                Welcome to onerdy.com, the personal website for Rodney Mort!  I am a curious human, IT pro, and software development dabbler.<br/>
                <br/>
                Where does the name "O'Nerdy" come from?  Read more <a href="/posts/where-does-the-name-onerdy-come-from">here</a>.
              </p>
            </div>            
          </div>
        </Container>
    </>
  )
}