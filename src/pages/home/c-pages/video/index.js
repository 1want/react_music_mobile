import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getVideoAction } from '../../store/action'

import { Wrapper } from './style'

function Video() {
  const dispatch = useDispatch()

  const { video } = useSelector(
    state => ({
      video: state.getIn(['home', 'video'])
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getVideoAction())
  }, [dispatch])

  return (
    <Wrapper>
      <div className='navigation'>
        <span>精选视频</span>
        <span>更多 ></span>
      </div>
      <div className='content'>
        {video.map(item => {
          return (
            <div className='content-item' key={item.vid}>
              <img src={item.coverUrl} alt='' />
              <span>▶</span>
              <p>{item.title}</p>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default memo(Video)
