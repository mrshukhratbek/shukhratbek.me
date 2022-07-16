import '../styles/fonts.css'
import 'antd/dist/antd.css'

import type { AppProps } from 'next/app'

import React from 'react'
import { Provider } from 'react-redux'
import { GlobalStyles } from '@styles'
import { MainLayout } from '@components'

import { store } from 'store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </>
  )
}

export default MyApp
