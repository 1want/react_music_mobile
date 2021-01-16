import { combineReducers } from 'redux-immutable'

import { reducer as homeReducer } from '@/pages/home/c-pages/recommend/store'
// import { reducer as MineReducer } from '@/pages/mine/store'

const cReducer = combineReducers({
  recommend: homeReducer
  // mine: MineReducer
})
export default cReducer
