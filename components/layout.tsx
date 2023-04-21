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
      <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300">
        {/* <Alert preview={preview} /> */}
        <Header/>
        <main><div className="m-5">{children}</div></main>
      </div>
      <Footer />
    </>
  )
}

export default Layout