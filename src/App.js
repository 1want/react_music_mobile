import React, { memo } from 'react'
import { Provider } from 'react-redux'

import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Button } from 'antd-mobile'
import store from '@/store'
import routes from '@/router'

export default memo(function App() {
  return (
    // <Provider store={store}>
    // {/* <HashRouter>{renderRoutes(routes)}</HashRouter> */}
    // {/* </Provider> */}
    <div>
      <Button type='primary'></Button>
    </div>
  )
})
