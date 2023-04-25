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
      <div className="min-h-screen bg-zinc-700 font-comfortaa">
        {/* <Alert preview={preview} /> */}
        <Header/>
        <main className=""><div className="pt-24 text-white" >{children}</div></main>
      </div>
      <Footer />
    </>
  )
}

export default Layout