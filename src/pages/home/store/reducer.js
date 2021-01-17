import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  banner: [],
  recommend: [],
  popular: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set('banner', action.banner)
    case actionTypes.CHANGE_RECOMMEND:
      return state.set('recommend', action.recommend)
    case actionTypes.CHANGE_POPULAR:
      return state.set('popular', action.popular)
    default:
      return state
  }
}
