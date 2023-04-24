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
      <div className="min-h-screen bg-slate-500 font-comfortaa">
        {/* <Alert preview={preview} /> */}
        <Header/>
        <main className="pt-20"><div className="pt-5" >{children}</div></main>
      </div>
      <Footer />
    </>
  )
}

export default Layout