import { GA_MEASUREMENT_ID } from './constants'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}
