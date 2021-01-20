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
      click: false,
      startY: true,
      scrollY: true,
      freeScroll: true,
      eventPassthrough: 'horizontal',
      bounce: {
        top: false,
        bottom: true,
        left: false,
        right: false
      }
    })
  }, [])

  return (
    <div ref={domRef} style={{ height: '100vh', overflow: 'hidden' }}>
      <div style={{ paddingBottom: '240px' }}>
        <Banner></Banner>
        <Recommend></Recommend>
        <Popular></Popular>
        <Video></Video>
        <NewSong></NewSong>
      </div>
    </div>
  )
})
