import { combineReducers } from 'redux-immutable'

import { reducer as homeReducer } from '@/pages/home/store'
import { reducer as playReducer } from '@/pages/play/store'

const Reducer = combineReducers({
  home: homeReducer,
  play: playReducer
})
export default Reducer
