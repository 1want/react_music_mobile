import React, { memo, useEffect, useRef } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from '@/router'
import BScroll from 'better-scroll'

import TopHeader from '@/components/top-header'
import Footer from '@/components/footer'
import Player from '@/pages/play'

export default memo(function Main() {
  const domRef = useRef()
  useEffect(() => {
    const scroll = new BScroll(domRef.current, {
      probeType: true,
      click: false,
      startY: true,
      scrollY: true,
      freeScroll: true,
      scrollX: true,
      scrollbar: true,
      eventPassthrough: true,
      bounce: true
    })
    console.log('okko')
  }, [])

  return (
    <HashRouter>
      <TopHeader></TopHeader>
      <div style={{ height: '100%' }} ref={domRef}>
        <div className='content' style={{}}>
          {renderRoutes(routes)}
        </div>
      </div>
      <Footer></Footer>
      {/* <Player></Player> */}
    </HashRouter>
  )
})
