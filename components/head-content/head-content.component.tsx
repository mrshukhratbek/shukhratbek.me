import Head from 'next/head'
import Shukhratbek from '@imgs/shukhratbek.jpg'

export const HeadContent = ({ title = '' }) => {
  return (
    <Head>
      <title>Shuhratbek`s Blog {title && `- ${title}`}</title>
      <meta name="author" content="Shukhratbek Kobulov" />
      <meta property="og:site_name" content="Shukhratbek`s Blog" />

      <meta
        name="description"
        content="I am Shukhratbek Kobulov, a 20-year-old Software Engineer from Tashkent, Uzbekistan."
      />
      <meta name="og:image" content={`${Shukhratbek.src}`}></meta>

      <meta name="robots" content="noindex,nofollow"></meta>
    </Head>
  )
}
