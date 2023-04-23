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
        <main><div className="p-10">{children}</div></main>
      </div>
      <Footer />
    </>
  )
}

export default Layout