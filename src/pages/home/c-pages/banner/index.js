import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

import { getBannerAction } from '../../store/action'

import { BannerWrapper } from './style'
SwiperCore.use([Pagination, Autoplay])

function Mine() {
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
  )
}

export default memo(Mine)
