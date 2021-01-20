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

export const getHomeAlbum = (type = 96) =>
  request({
    url: '/top/song',
    params: {
      type
    }
  })

// 获取歌曲播放url
export const getMusicUrl = id =>
  request({
    url: '/song/url',
    params: {
      id
    }
  })

// 获取歌曲信息
export const getMusicInfo = ids =>
  request({
    url: '/song/detail',
    params: {
      ids
    }
  })
