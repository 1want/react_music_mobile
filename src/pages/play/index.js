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
    if (songs != '') {
      dispatch(getMusicInfoAction(songs.id))
    }
  }, [dispatch])

  useEffect(() => {
    if (songs != '') {
      dispatch(getMusicUrlAction(songs.id))
    }
  }, [songs])

  return (
    <>
      {playList != '' && (
        <div>
          {playType === 'mini' ? <Mini></Mini> : <Max></Max>}
          <audio src={musicUrl.url} ref={urlRef} autoPlay></audio>
        </div>
      )}
    </>
  )
})
