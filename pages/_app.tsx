import type { AppProps } from 'next/app'
import "../styles/fonts.css"
import { GlobalStyles } from '@styles'
import { MainLayout } from '@components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

export default MyApp
