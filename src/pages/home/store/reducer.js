import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  banner: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set('banner', action.banner)
    default:
      return state
  }
}
