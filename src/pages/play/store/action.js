import * as actionTypes from './constants'

import { getMusicUrl, getMusicInfo } from '@/api/home'

export const checkMiniPlay = () => ({
  type: actionTypes.CHANGE_PLAY_TYPE,
  playType: 'mini'
})

export const checkMaxPlay = () => ({
  type: actionTypes.CHANGE_PLAY_TYPE,
  playType: 'max'
})

// 改变当前播放歌曲的信息
export const changeSongInfo = res => ({
  type: actionTypes.CHANGE_SONG_INFO,
  song: res.songs[0]
})

// 添加到播放队列
export const addSongToList = res => ({
  type: actionTypes.ADD_MUSIC_TO_LIST,
  playList: res
})

// 获取歌曲url
export const getSongUrl = res => ({
  type: actionTypes.GET_MUSIC_URL,
  musicUrl: res.data[0]
})

export const getMusicUrlAction = id => {
  return dispatch => {
    getMusicUrl(id).then(res => {
      dispatch(getSongUrl(res))
    })
  }
}

export const getMusicInfoAction = id => {
  return dispatch => {
    getMusicInfo(id).then(res => {
      dispatch(changeSongInfo(res))
    })
  }
}
