import type { NextPage } from 'next'
import { HeadContent } from '@components'
import { Typography } from 'antd'

const { Title } = Typography

const Home: NextPage = () => {
  return (
    <div>
      <HeadContent title="Home" />
      <Title>Home</Title>
    </div>
  )
}

export default Home
