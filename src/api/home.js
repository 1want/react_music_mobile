import request from './axios'

export const getHomeBanner = () =>
  request({
    url: '/banner'
  })
