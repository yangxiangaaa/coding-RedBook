import React from 'react'
import { Empty } from 'antd-mobile'
import { LoadWrapper } from './style'

export default function Loading() {
  return (
    <LoadWrapper>
       <Empty
          style={{ padding: '64px 0' }}
          imageStyle={{ width: 128 }}
          description='暂无数据'
        />
    </LoadWrapper>
  )
}
