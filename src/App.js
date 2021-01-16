import React, { memo } from 'react'
import { Provider } from 'react-redux'

import Main from '@/pages/main'

import store from '@/store'

export default memo(function App() {
  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  )
})
