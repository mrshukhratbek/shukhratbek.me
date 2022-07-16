import { Skeleton as AntdSkeleton, Space } from 'antd'

export const Skeleton = ({ count = 5 }) => {
  const countSkeleton = new Array(count).fill(0)

  return (
    <Space direction="vertical" size={'large'} style={{ width: '100%' }}>
      {countSkeleton.map((_, i) => (
        <AntdSkeleton key={i} active />
      ))}
    </Space>
  )
}
