import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from './header'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen overflow-auto font-comfortaa bg-[url('/img/bg.svg')] bg-[length:1920px_1200px] bg-fixed bg-gray-800 flex flex-col items-center">
        {/* <Alert preview={preview} /> */}
        <Header/>
        <main><div className="pt-32 text-white" >{children}</div></main>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout