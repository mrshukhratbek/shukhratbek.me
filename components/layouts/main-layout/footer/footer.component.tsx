import { Col, Layout, Row, Space } from 'antd'
import { Container } from '@components/layouts/container'

const { Footer: AntdFooter } = Layout

export const Footer = () => {
  return (
    <AntdFooter
      style={{
        backgroundColor: '#fff',
        borderTop: '1px solid #ddd',
        paddingLeft: '0',
        paddingRight: '0',
      }}
    >
      <Container>
        <Row justify="space-between">
          <Col>
            <p style={{ margin: '0' }}>© 2022 shukhratbek.me</p>
          </Col>
          <Col>
            <Space size="large">
              <a
                href="https://twitter.com/mrshukhratbek"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/mrshukhratbek/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mrshukhratbek"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Space>
          </Col>
        </Row>
      </Container>
    </AntdFooter>
  )
}
