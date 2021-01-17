import React, { memo, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { dicoverMenu } from '@/api/local-data'

import { BottomMenu } from './style'

export default memo(function Footer() {
  const [current, setCurrent] = useState(0)
  return (
    <div>
      <BottomMenu>
        <div className='top'>
          {dicoverMenu.map(item => {
            return (
              <NavLink className='item' to={item.link} key={item.title}>
                <span
                  onClick={() => setCurrent(item.index)}
                  className={`iconfont  icon-${item.i}
                  ${current === item.index ? 'active' : ''}
                  `}></span>
                <p
                  className={`title 
                 ${current === item.index ? 'active' : ''}
                 `}>
                  {item.title}
                </p>
              </NavLink>
            )
          })}
        </div>
      </BottomMenu>
    </div>
  )
  // change(index) {
  //   setCurrent(index)
  // }
})
