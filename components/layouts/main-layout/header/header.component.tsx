import Link from 'next/link'
import { Layout, Row } from 'antd'
import { Container } from '@components/layouts'

const { Header: AntdHeader } = Layout

export const Header = () => {
  return (
    <AntdHeader>
      <Container>
        <Row>
          <Link href="/">
            <a>Shukhratbek</a>
          </Link>

          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
        </Row>
      </Container>
    </AntdHeader>
  )
}
