import * as actionTypes from './constants'
import { getHomeBanner } from '@/api/home'
export const getBanner = res => ({
  type: actionTypes.CHANGE_BANNER,
  banner: res.banners
})

export const getBannerAction = () => {
  return dispatch => {
    getHomeBanner().then(res => {
      dispatch(getBanner(res))
    })
  }
}
