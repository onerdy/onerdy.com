import { GA_MEASUREMENT_ID } from './constants'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export const init = () => {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    })
  }
}

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}
