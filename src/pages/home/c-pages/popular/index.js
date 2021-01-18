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
        <span>◀ 播放</span>
      </div>
      <div>
        <Swiper slidesPerView={1} spaceBetween={-20}>
          {res.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='content'>
                  {item.map(res => {
                    return (
                      <div className='content-item' key={res.coverImgUrl}>
                        <div className='item-left'>
                          <img src={res.coverImgUrl} alt='' />
                        </div>
                        <div className='item-right'>
                          <span>{res.name}</span>
                          <p>{res.copywriter}</p>
                        </div>
                      </div>
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
