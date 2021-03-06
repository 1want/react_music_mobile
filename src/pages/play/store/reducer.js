import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  // 当前播放的歌曲信息
  songs: [],
  playing: false,
  playList: [],
  mode: 'sequence',
  playType: 'mini',
  lyric: []
})

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MUSIC_TO_LIST:
      return state.set('playList', action.playList)
    case actionTypes.CHANGE_PLAY_TYPE:
      return state.set('playType', action.playType)
    case actionTypes.CHANGE_SONG_INFO:
      return state.set('songs', action.song)
    case actionTypes.CHANGE_PLAY_STATE:
      return state.set('playing', action.playing)
    case actionTypes.CHANGE_MUSIC_LYRIC:
      return state.set('lyric', action.lyric)
    default:
      return state
  }
}

export default reducers
