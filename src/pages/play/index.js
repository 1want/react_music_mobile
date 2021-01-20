import React, { memo, useRef, shallowEqual } from 'react'
import { useSelector } from 'react-redux'
import Mini from './c-pages/mini.js'
import Max from './c-pages/max.js'

export default memo(function Player(props) {
  let { playType, playList } = useSelector(
    state => ({
      playType: state.getIn(['play', 'playType']),
      playList: state.getIn(['play', 'playList'])
    }),
    shallowEqual
  )
  const urlDom = useRef()
  return (
    <>
      {playList.length > 0 && (
        <div>
          {playType === 'mini' ? <Mini></Mini> : <Max></Max>}
          <audio src='' ref={urlDom}></audio>
        </div>
      )}
    </>
  )
})
