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
                Hello and welcome to onerdy.com!<br/>
                <br/>
                I am Rodney Mort, IT pro and software development dabbler.  Thank you for stopping by my website.<br/>
                <br/>
                In years past, my professional experience has included systems engineering, tech support management, and project management.  More recently, my work has focused on data analytics, Microsoft Power Platform, SharePoint 365, and ERP application support and maintenance.<br/>
                <br/>
                When I'm not busy being a family man, I enjoy playing guitar, chess, video games, golf, fitness, and improving my software development skills.<br/>
                <br/>
                Where does the name "onerdy" come from?  Read more <a href="/posts/where-does-the-name-onerdy-come-from">here</a>.
              </p>
            </div>            
          </div>
        </Container>
    </>
  )
}