import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  // 当前播放的歌曲信息
  songs: [],
  playList: [1],
  mode: 'sequence',
  playType: 'mini'
})

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_MUSIC_URL:
      return state.set('songs', action.songs)
    case actionTypes.CHANGE_PLAY_TYPE:
      return state.set('playType', action.playType)
    default:
      return state
  }
}

export default reducers
