import React, { memo, useRef, shallowEqual, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getMusicUrlAction, getMusicInfoAction } from './store/action'

import Mini from './c-pages/mini.js'
import Max from './c-pages/max.js'

export default memo(function Player(props) {
  const dispatch = useDispatch()
  const urlRef = useRef()

  let { playType, playList, songs, musicUrl } = useSelector(
    state => ({
      playType: state.getIn(['play', 'playType']),
      playList: state.getIn(['play', 'playList']),
      songs: state.getIn(['play', 'songs']),
      musicUrl: state.getIn(['play', 'musicUrl'])
    }),
    shallowEqual
  )

  useEffect(() => {
    console.log('kokokko')
    if (songs != '') {
      console.log('kokokoko')
      dispatch(getMusicInfoAction(songs.id))
    }
  }, [dispatch])

  useEffect(() => {
    console.log('okko')
    if (songs != '') {
      dispatch(getMusicUrlAction(songs.id))
      urlRef.current.src = musicUrl.url
      console.log('yes')
    }
  }, [songs])

  return (
    <>
      {playList != '' && (
        <div>
          {playType === 'mini' ? <Mini></Mini> : <Max></Max>}
          <audio src='' ref={urlRef} autoPlay></audio>
        </div>
      )}
    </>
  )
})
