import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from '@/router'

import TopHeader from '@/components/top-header'
import Footer from '@/components/footer'
import Player from '@/pages/play'

export default memo(function Main() {
  return (
    <HashRouter>
      <TopHeader></TopHeader>
      <div style={{ padding: '60px 0' }}>{renderRoutes(routes)}</div>
      <Footer></Footer>
      <Player></Player>
    </HashRouter>
  )
})
