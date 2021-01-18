import React, { memo } from 'react'

import { TopMenu } from './style'
import tsIcon from '@/assets/img/more.png'

export default memo(function Home() {
  return (
    <TopMenu>
      <img src={tsIcon} alt='' className='top-img' />
      <input type='text' placeholder='123' />
      <i className='iconfont icon-luyin'></i>
    </TopMenu>
  )
})
