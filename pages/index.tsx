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
                src="/assets/authors/rodney.webp"
                className="w-20 h-20 rounded-full"
                alt="Logo"
              />
            <div className="flex pl-4 sm:text-lg">
              <p className="">                
                Hello and welcome to onerdy.com!<br/>
                <br/>
                I am Rodney Mort: curious human, IT pro, and software development dabbler. Thanks for stopping by my website.<br/>
                <br/>
                I look forward to sharing my experiences with hobby projects and anything else that seems worthwhile.<br/>
                <br/>
                Where does the name "onerdy" come from?  Find out <a href="/posts/where-does-the-name-onerdy-come-from">here</a>.
              </p>
            </div>            
          </div>
        </Container>
    </>
  )
}