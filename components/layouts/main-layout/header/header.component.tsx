import { Container } from '@components/layouts'
import { Layout } from 'antd'

const { Header: AntdHeader } = Layout

export const Header = () => {
  return (
    <AntdHeader>
      <Container>Header </Container>
    </AntdHeader>
  )
}
