import React, { memo, useRef, shallowEqual, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getMusicInfoAction } from './store/action'
import { getPlayUrl } from '@/utils/getPlayUrl'

import Mini from './c-pages/mini.js'
import Max from './c-pages/max.js'

export default memo(function Player(props) {
  const dispatch = useDispatch()
  const urlRef = useRef()

  let { playType, playList, songs, playing } = useSelector(
    state => ({
      playType: state.getIn(['play', 'playType']),
      playList: state.getIn(['play', 'playList']),
      songs: state.getIn(['play', 'songs']),
      playing: state.getIn(['play', 'playing'])
    }),
    shallowEqual
  )

  useEffect(() => {
    if (songs != '') {
      dispatch(getMusicInfoAction(songs.id))
    }
  }, [dispatch])

  useEffect(() => {
    if (songs != '') {
      urlRef.current.src = getPlayUrl(songs.id)
    }
  }, [songs])

  useEffect(() => {
    if (songs != '') {
      if (playing === true) {
        console.log('pause')
        urlRef.current.pause()
      } else {
        console.log('play')
        urlRef.current.play()
      }
    }
  }, [playing])

  return (
    <>
      {playList != '' && (
        <div>
          {playType === 'mini' ? <Mini></Mini> : <Max></Max>}
          <audio src='' ref={urlRef} autoPlay loop></audio>
        </div>
      )}
    </>
  )
})
