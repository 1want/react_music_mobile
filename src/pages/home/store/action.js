import * as actionTypes from './constants'
import {
  getHomeBanner,
  getHomeRecommend,
  getHomePopular,
  getHomeVideo,
  getHomeAlbum
} from '@/api/home'

export const getBanner = res => ({
  type: actionTypes.CHANGE_BANNER,
  banner: res.banners
})

export const getRecommend = res => ({
  type: actionTypes.CHANGE_RECOMMEND,
  recommend: res.result.slice(0, 6)
})

export const getPopular = res => ({
  type: actionTypes.CHANGE_POPULAR,
  popular: res.playlists
})

export const getVideo = res => ({
  type: actionTypes.CHANGE_VIDEO,
  video: res.data
})

export const getAlbum = res => ({
  type: actionTypes.CHANGE_ALBUM,
  album: res
})

export const getNewSong = res => ({
  type: actionTypes.CHANGE_NEW_SONG,
  NewSong: res
})

export const getBannerAction = () => {
  return dispatch => {
    getHomeBanner().then(res => {
      dispatch(getBanner(res))
    })
  }
}

export const getRecommendAction = () => {
  return dispatch => {
    getHomeRecommend().then(res => {
      dispatch(getRecommend(res))
    })
  }
}

export const getPopularAction = () => {
  return dispatch => {
    getHomePopular().then(res => {
      dispatch(getPopular(res))
    })
  }
}

export const getVideoAction = () => {
  return dispatch => {
    getHomeVideo().then(res => {
      dispatch(getVideo(res))
    })
  }
}

export const getAlbumAction = type => {
  return dispatch => {
    getHomeAlbum(type).then(res => {
      dispatch(getAlbum(res.data.slice(0, 6)))
    })
  }
}

export const getNewSongAction = () => {
  return dispatch => {
    getHomeAlbum().then(res => {
      dispatch(getNewSong(res.data.slice(0, 6)))
    })
  }
}
