import React, { memo, useEffect, useRef } from 'react'
import Banner from './c-pages/banner'
import Recommend from './c-pages/recommend'
import Popular from './c-pages/popular'
import Video from './c-pages/video'
import NewSong from './c-pages/new-song'

import BScroll from 'better-scroll'

export default memo(function Home() {
  const domRef = useRef()
  useEffect(() => {
    const scroll = new BScroll(domRef.current, {
      probeType: true,
      click: false,
      startY: true,
      scrollY: true,
      freeScroll: true,
      scrollX: true,
      eventPassthrough: true,
      bounce: true
    })
  }, [])

  return (
    <div
      ref={domRef}
      style={{ height: 'calc(100vh - 120px)', overflow: 'hidden' }}>
      <div style={{ paddingBottom: '140px' }}>
        <Banner></Banner>
        <Recommend></Recommend>
        <Popular></Popular>
        <Video></Video>
        <NewSong></NewSong>
      </div>
    </div>
  )
})
