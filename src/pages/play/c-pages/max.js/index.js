import React, { memo, useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import Lyric from 'lyric-parser'

import {
  checkMiniPlay,
  changePlay,
  getMusicLyricAction
} from '../../store/action'

import { Wrapper, Header, Main, Footer } from './style'
import './enter.css'

function Max() {
  const dispatch = useDispatch()
  const [show, isShow] = useState(true)

  const { songInfo, playing, lyric } = useSelector(
    state => ({
      songInfo: state.getIn(['play', 'songs']),
      playing: state.getIn(['play', 'playing']),
      lyric: state.getIn(['play', 'lyric'])
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getMusicLyricAction(songInfo.id))
  }, [dispatch])

  useEffect(() => {
    let lyrics = new Lyric(lyric)
    // console.log(lyrics)
    // let time = lyrics.lines.time
    // let txt = lyrics.lines.txt
    // console.log(time, txt)
  }, [])

  const handler = obj => {
    console.log(obj)
  }

  function changePlayType() {
    dispatch(checkMiniPlay())
    isShow(!show)
  }

  function changePlayState(e) {
    e.stopPropagation()
    dispatch(changePlay(playing))
  }

  return (
    <CSSTransition in={show} timeout={500} classNames='play' appear>
      <Wrapper>
        <Header>
          <span
            className='iconfont icon-xiajiantou_huaban'
            onClick={() => changePlayType()}></span>
          <div className='songs-info'>
            <span>
              {songInfo.alia[0]}
              {songInfo.name}
            </span>
            <p>{songInfo.ar[0].name}</p>
          </div>
          <span className='iconfont icon-share_icon'></span>
        </Header>
        <Main>
          <div className='img-wrapper'>
            <img src={songInfo.al.picUrl || ''} alt='' />
          </div>
        </Main>
        <Footer>
          <span>时间线</span>
          <div className='btn'>
            <span className='iconfont icon-hanhan-01-01'></span>
            <span className='iconfont icon-shangyishoushangyige'></span>
            <span
              onClick={changePlayState}
              className={`iconfont icon-${
                playing ? 'bofang1' : 'zanting'
              }`}></span>
            <span className='iconfont icon-xiayigexiayishou'></span>
            <span className='iconfont icon-bofangliebiao'></span>
          </div>
        </Footer>
      </Wrapper>
    </CSSTransition>
  )
}

export default memo(Max)
