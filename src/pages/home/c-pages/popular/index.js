import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { getPopularAction } from '../../store/action'

import { Wrapper } from './style'

SwiperCore.use([Pagination, Autoplay])

function Recommend() {
  const dispatch = useDispatch()

  const { popular } = useSelector(
    state => ({
      popular: state.getIn(['home', 'popular'])
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getPopularAction())
  }, [dispatch])

  const res = []
  for (let i = 0; i < popular.length; i += 3) {
    res.push(popular.slice(i, i + 3))
  }

  return (
    <Wrapper>
      <div className='navigation'>
        <span>流行精选</span>
        <span>播放</span>
      </div>
      <div>
        <Swiper slidesPerView={1} spaceBetween={10} autoplay loop pagination>
          {res.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {item.map(res => {
                    return (
                      <img
                        key={res.coverImgUrl}
                        src={res.coverImgUrl}
                        alt=''
                        style={{ height: '100px', width: '100px' }}
                      />
                    )
                  })}
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </Wrapper>
  )
}

export default memo(Recommend)
