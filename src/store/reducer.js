import { combineReducers } from 'redux'
// import { combineReducers } from 'redux-immutable'

import { reducer as homeReducer } from '@/pages/home/store'
// import { reducer as MineReducer } from '@/pages/mine/store'

const Reducer = combineReducers({
  home: homeReducer
  // mine: MineReducer
})
export default Reducer
