import { combineReducers } from 'redux-immutable'

import { reducer as homeReducer } from '@/pages/home/store'

const Reducer = combineReducers({
  home: homeReducer
})
export default Reducer
