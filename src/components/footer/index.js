import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { dicoverMenu } from '@/api/local-data'

import { BottomMenu } from './style'

export default memo(function index() {
  return (
    <div>
      <BottomMenu>
        <div className='top'>
          {dicoverMenu.map(item => {
            return (
              <NavLink className='item' to={item.link} key={item.title}>
                <span className={'iconfont' + ' icon-' + item.i}></span>
                <p className='title'>{item.title}</p>
              </NavLink>
            )
          })}
        </div>
      </BottomMenu>
    </div>
  )
})
