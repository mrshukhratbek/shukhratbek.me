import type { AppProps } from 'next/app'
import '../styles/fonts.css'
import { GlobalStyles } from '@styles'
import { MainLayout } from '@components'
import React from 'react'
import 'antd/dist/antd.css'

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
