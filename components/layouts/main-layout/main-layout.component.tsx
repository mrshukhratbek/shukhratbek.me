import { Layout } from 'antd'
import { ReactNode } from 'react'
import { Container } from '../container'
import { Header } from './header'
import { Footer } from './footer'
import styles from './main-layout.module.scss'

const { Content } = Layout

interface Props {
  children?: ReactNode
}

export const MainLayout = ({ children }: Props) => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Content className={styles.content}>
        <Container>{children}</Container>
      </Content>
      <Footer />
    </Layout>
  )
}
