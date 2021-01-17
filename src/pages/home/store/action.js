import * as actionTypes from './constants'
import { getHomeBanner, getHomeRecommend, getHomePopular } from '@/api/home'

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
