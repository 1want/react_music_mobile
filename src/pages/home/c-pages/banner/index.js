import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { getBannerAction } from '../../store/action'

import { topMenu } from '@/api/local-data'

import { BannerWrapper, TopMenu } from './style'

SwiperCore.use([Pagination, Autoplay])

function Banner() {
  const dispatch = useDispatch()

  const { banner } = useSelector(
    state => ({
      banner: state.getIn(['home', 'banner'])
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getBannerAction())
  }, [dispatch])

  return (
    <div
      style={{
        padding: '0 14px',
        background: '#fff'
      }}>
      <div
        style={{
          background: '#e6e0e0d4',
          height: '40px',
          position: 'absolute',
          width: '100vw',
          marginLeft: '-14px'
        }}></div>
      <BannerWrapper>
        <Swiper slidesPerView={1} spaceBetween={10} autoplay loop pagination>
          {banner.map(item => {
            return (
              <SwiperSlide key={item.encodeId}>
                <img src={item.imageUrl} alt='' />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </BannerWrapper>
      <TopMenu>
        {topMenu.map(item => {
          return (
            <div key={item.title} className='top-menu'>
              <span className={['iconfont ' + item.i]}></span>
              <p>{item.title}</p>
            </div>
          )
        })}
      </TopMenu>
    </div>
  )
}

export default memo(Banner)
