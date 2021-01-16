import { Map } from 'immutable'

import * as type from './constants'

const defaultState = Map({
  banner: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case type.CHANGE_BANNER:
      return state.set('banner', action.banner)
    default:
      return state
  }
}
