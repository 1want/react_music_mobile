import * as actionTypes from './constants'

import { getMusic } from '@/api/home'

export const getMusicUrl = res => ({
  type: actionTypes.GET_MUSIC_URL,
  songs: res.data[0]
})

export const checkMiniPlay = () => ({
  type: actionTypes.CHANGE_PLAY_TYPE,
  playType: 'mini'
})

export const checkMaxPlay = () => ({
  type: actionTypes.CHANGE_PLAY_TYPE,
  playType: 'max'
})
export const getMusicUrlAction = id => {
  return dispatch => {
    getMusic(id).then(res => {
      dispatch(getMusicUrl(res))
    })
  }
}
