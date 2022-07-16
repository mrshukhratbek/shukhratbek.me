import type { NextPage } from 'next'
import { Typography } from 'antd'
import { HeadContent, Skeleton } from '@components'

const { Title } = Typography

const Blog: NextPage = () => {
  return (
    <>
      <HeadContent title="Blog" />
      <Title>Blog</Title>
      <Skeleton />
    </>
  )
}

export default Blog
