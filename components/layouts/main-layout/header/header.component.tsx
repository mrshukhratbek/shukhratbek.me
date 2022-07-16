import Link from 'next/link'
import { Layout, Row, Space } from 'antd'
import { Container } from '@components/layouts'

const { Header: AntdHeader } = Layout

export const Header = () => {
  return (
    <AntdHeader
      style={{
        backgroundColor: '#fff',
        borderBottom: '1px solid #ddd',
        paddingLeft: '0',
        paddingRight: '0',
      }}
    >
      <Container>
        <Row justify="space-between">
          <Link href="/">
            <a>Shukhratbek</a>
          </Link>

          <nav>
            <Space size="large">
              <Link href="/blog">
                <a>Blog</a>
              </Link>

              <Link href="/about">
                <a>About</a>
              </Link>
            </Space>
          </nav>
        </Row>
      </Container>
    </AntdHeader>
  )
}
