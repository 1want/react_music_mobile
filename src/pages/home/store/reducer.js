import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  banner: [],
  recommend: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set('banner', action.banner)
    case actionTypes.CHANGE_RECOMMEND:
      return state.set('recommend', action.recommend)
    default:
      return state
  }
}
