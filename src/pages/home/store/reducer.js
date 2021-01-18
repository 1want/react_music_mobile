import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  banner: [],
  recommend: [],
  popular: [],
  video: [],
  album: [],
  NewSong: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set('banner', action.banner)
    case actionTypes.CHANGE_RECOMMEND:
      return state.set('recommend', action.recommend)
    case actionTypes.CHANGE_POPULAR:
      return state.set('popular', action.popular)
    case actionTypes.CHANGE_VIDEO:
      return state.set('video', action.video)
    case actionTypes.CHANGE_ALBUM:
      return state.set('album', action.album)
    case actionTypes.CHANGE_NEW_SONG:
      return state.set('NewSong', action.NewSong)
    default:
      return state
  }
}
