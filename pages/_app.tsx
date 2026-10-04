import { AppProps } from 'next/app'
import '../styles/index.css'
import Layout from '../components/layout'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { GA_MEASUREMENT_ID } from '../lib/constants'
import * as gtag from '../lib/gtag'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return

    gtag.init()

    const handleRouteChange = (url: string) => gtag.pageview(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
