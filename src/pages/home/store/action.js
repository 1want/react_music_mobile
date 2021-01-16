import * as type from './constants'
import { getHomeBanner } from '@/api/home'
export const getBanner = res => ({
  type: type.CHANGE_BANNER,
  banner: res.banners
})

export const getBannerAction = dispatch => {
  getHomeBanner().then(res => {
    dispatch(getBanner(res))
  })
}
