import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { checkMaxPlay, changePlay } from '../../store/action'

import { Wrapper } from './style'

export default memo(function Mini() {
  const { songInfo, playing } = useSelector(
    state => ({
      songInfo: state.getIn(['play', 'songs']),
      playing: state.getIn(['play', 'playing'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  function changePlayType() {
    dispatch(checkMaxPlay())
  }

  function changePlayState(e) {
    e.stopPropagation()
    dispatch(changePlay(playing))
  }
  return (
    <Wrapper onClick={changePlayType}>
      <img src={songInfo.al ? songInfo.al.picUrl : ''} alt='' />
      <div className='songs-info'>
        {songInfo.name} <span> – {songInfo.ar ? songInfo.ar[0].name : ''}</span>
      </div>
      <div className='play-list'>
        <span
          className={`iconfont icon-${playing ? 'bofang' : 'bofang2'}`}
          onClick={changePlayState}></span>
        <span className='iconfont icon-bofangliebiao'></span>
      </div>
    </Wrapper>
  )
})
