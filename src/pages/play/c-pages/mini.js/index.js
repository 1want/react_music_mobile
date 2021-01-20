import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { checkMaxPlay } from '../../store/action'

import { Wrapper } from './style'

export default memo(function Mini() {
  const songInfo = useSelector(
    state => state.getIn(['play', 'songs']),
    shallowEqual
  )

  const dispatch = useDispatch()

  function changePlayType() {
    dispatch(checkMaxPlay())
  }
  return (
    <Wrapper onClick={() => changePlayType()}>
      <img src={songInfo ? 'songInfo.al.picUrl' : ''} alt='' />
      <div className='songs-info'>{songInfo.name}</div>
      <div className='play-list'>
        <span className='iconfont icon-bofang'></span>
        <span className='iconfont icon-bofangliebiao'></span>
      </div>
    </Wrapper>
  )
})
