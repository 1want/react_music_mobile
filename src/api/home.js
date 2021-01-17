import request from './axios'

export const getHomeBanner = () =>
  request({
    url: '/banner'
  })

export const getHomeRecommend = () =>
  request({
    url: '/personalized'
  })
