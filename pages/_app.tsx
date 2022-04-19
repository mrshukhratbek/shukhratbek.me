import type { AppProps } from 'next/app'
import "../styles/fonts.css"
import { GlobalStyles } from '@styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
