import { Col, Layout, Row } from 'antd'
import { Container } from '@components/layouts/container'

const { Footer: AntdFooter } = Layout

export const Footer = () => {
  return (
    <AntdFooter>
      <Container>
        <Row>
          <Col>
            <p>© 2022 shukhratbek.me</p>
          </Col>
          <Col>
            <ul>
              <li>
                <a href="https://twitter.com/mrshukhratbek" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/mrshukhratbek" target="_blank">
                  GitHub
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </AntdFooter>
  )
}
