import * as actionTypes from './constants'
import { getHomeBanner, getHomeRecommend } from '@/api/home'

export const getBanner = res => ({
  type: actionTypes.CHANGE_BANNER,
  banner: res.banners
})

export const getRecommend = res => ({
  type: actionTypes.CHANGE_RECOMMEND,
  recommend: res.result.slice(0, 6)
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
