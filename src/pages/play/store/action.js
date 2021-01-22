import * as actionTypes from './constants'

import { getMusicInfo, getMusicLyric } from '@/api/home'
import { playState } from '@/utils/changePlayState'

export const checkMiniPlay = () => ({
  type: actionTypes.CHANGE_PLAY_TYPE,
  playType: 'mini'
})

export const checkMaxPlay = () => ({
  type: actionTypes.CHANGE_PLAY_TYPE,
  playType: 'max'
})

export const changePlay = type => ({
  type: actionTypes.CHANGE_PLAY_STATE,
  playing: playState(type)
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

export const changeMusicLyric = res => ({
  type: actionTypes.CHANGE_MUSIC_LYRIC,
  lyric: res
})

export const getMusicInfoAction = id => {
  return dispatch => {
    getMusicInfo(id).then(res => {
      dispatch(changeSongInfo(res))
    })
  }
}

export const getMusicLyricAction = id => {
  return dispatch => {
    getMusicLyric(id).then(res => {
      dispatch(changeMusicLyric(res.lrc.lyric))
    })
  }
}
