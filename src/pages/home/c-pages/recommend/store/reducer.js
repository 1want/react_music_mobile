import * as type from './constants'

const defaultState = {
  banner: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case type.CHANGE_BANNER:
      return { ...state, banner: action.banners }
    default:
      return state
  }
}
