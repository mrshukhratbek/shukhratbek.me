import { Layout } from 'antd'
import { Container } from '@components/layouts/container'

const { Footer: AntdFooter } = Layout

export const Footer = () => {
  return (
    <AntdFooter>
      <Container>Footer</Container>
    </AntdFooter>
  )
}
