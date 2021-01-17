import request from './axios'

export const getHomeBanner = () =>
  request({
    url: '/banner'
  })

export const getHomeRecommend = () =>
  request({
    url: '/personalized'
  })

export const getHomePopular = (limit = 9) =>
  request({
    method: 'post',
    url: '/top/playlist/highquality?before=1503639064232',
    params: {
      limit
    }
  })
