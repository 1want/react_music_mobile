import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  banner: [],
  recommend: [],
  popular: [],
  video: []
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
    default:
      return state
  }
}
