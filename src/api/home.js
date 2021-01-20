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

export const getHomeVideo = () =>
  request({
    url: '/related/allvideo?id=89ADDE33C0AAE8EC14B99F6750DB954D'
  })

export const getHomeAlbum = (limit = 6) =>
  request({
    url: '/top/album',
    params: {
      limit
    }
  })

export const getHomeNewSong = (cat = '欧美', limit = 6) =>
  request({
    url: '/top/playlist/highquality',
    params: {
      cat,
      limit
    }
  })

export const getMusic = id =>
  request({
    url: '/song/url',
    params: {
      id
    }
  })
