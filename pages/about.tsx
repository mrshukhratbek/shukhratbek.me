import type { NextPage } from 'next'
import { HeadContent, Skeleton } from '@components'
import { Typography } from 'antd'

const { Title } = Typography

const About: NextPage = () => {
  return (
    <div>
      <HeadContent title="About" />
      <Title>About</Title>
      <Skeleton />
    </div>
  )
}

export default About
