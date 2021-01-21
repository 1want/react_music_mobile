import React, { memo, useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { checkMiniPlay } from '../../store/action'

import { Wrapper, Header, Main, Footer } from './style'
import './enter.css'

function Max() {
  const textDom = useRef()
  const BoxDom = useRef()
  const dispatch = useDispatch()
  const songInfo = useSelector(
    state => state.getIn(['play', 'songs']),
    shallowEqual
  )

  const [show, isShow] = useState(true)

  function changePlayType() {
    dispatch(checkMiniPlay())
    isShow(!show)
  }

  function toScrollLeft() {
    //
  }

  return (
    <CSSTransition in={show} timeout={500} classNames='play' appear>
      <Wrapper>
        <Header>
          <span
            className='iconfont icon-xiajiantou_huaban'
            onClick={() => changePlayType()}></span>
          <div className='songs-info' ref={BoxDom}>
            <span ref={textDom}>
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
            <span className='iconfont icon-bofang1'></span>
            <span className='iconfont icon-xiayigexiayishou'></span>
            <span className='iconfont icon-bofangliebiao'></span>
          </div>
        </Footer>
      </Wrapper>
    </CSSTransition>
  )
}

export default memo(Max)
