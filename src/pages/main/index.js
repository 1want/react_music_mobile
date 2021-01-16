import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from '@/router'

import TopHeader from '@/components/top-header'
import Footer from '@/components/footer'

export default memo(function index() {
  return (
    <HashRouter>
      <TopHeader></TopHeader>
      {renderRoutes(routes)}
      <Footer></Footer>
    </HashRouter>
  )
})
