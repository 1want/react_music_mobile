import * as actionTypes from './constants'
import {
  getHomeBanner,
  getHomeRecommend,
  getHomePopular,
  getHomeVideo,
  getHomeAlbum,
  getHomeNewSong
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
  album: res.albums
})

export const getNewSong = res => ({
  type: actionTypes.CHANGE_NEW_SONG,
  NewSong: res.playlists
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

export const getAlbumAction = () => {
  return dispatch => {
    getHomeAlbum().then(res => {
      dispatch(getAlbum(res))
    })
  }
}

export const getNewSongAction = () => {
  return dispatch => {
    getHomeNewSong().then(res => {
      dispatch(getNewSong(res))
    })
  }
}
