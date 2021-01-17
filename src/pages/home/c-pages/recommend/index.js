import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getRecommendAction } from '../../store/action'

import { Wrapper } from './style'

function Recommend() {
  const dispatch = useDispatch()

  const { recommend } = useSelector(
    state => ({
      recommend: state.getIn(['home', 'recommend'])
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getRecommendAction())
  }, [dispatch])

  return (
    <Wrapper>
      <div className='navigation'>
        <span>推荐歌单</span>
        <span>更多 ></span>
      </div>
      <div style={{ display: 'flex', overflow: 'auto', height: '160px' }}>
        {recommend.map(item => {
          return (
            <div className='recommend-item' key={item.id}>
              <img src={item.picUrl} alt='' />
              <span>
                <i className='iconfont icon-bofang_huaban'></i>
                {/* {item.playCount} */}
                1000万
              </span>
              <p>{item.name}</p>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default memo(Recommend)
