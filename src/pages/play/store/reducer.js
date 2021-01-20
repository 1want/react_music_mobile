import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  // 当前播放的歌曲信息
  songs: [],
  playing: false,
  playList: [],
  mode: 'sequence',
  playType: 'mini',
  musicUrl: ''
})

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MUSIC_TO_LIST:
      return state.set('playList', action.playList)
    case actionTypes.CHANGE_PLAY_TYPE:
      return state.set('playType', action.playType)
    case actionTypes.CHANGE_SONG_INFO:
      return state.set('songs', action.song)
    case actionTypes.GET_MUSIC_URL:
      return state.set('musicUrl', action.musicUrl)
    default:
      return state
  }
}

export default reducers
