import React, { memo, useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { getMusicUrlAction, checkMiniPlay } from '../../store/action'

import { Wrapper, Header, Main, Footer } from './style'
import './enter.css'

function Max() {
  const urlDom = useRef()
  const dispatch = useDispatch()
  const [show, isShow] = useState(true)

  useEffect(() => {
    dispatch(getMusicUrlAction(33894312))
  }, [dispatch])

  function changePlayType() {
    dispatch(checkMiniPlay())
    isShow(!show)
  }
  return (
    <CSSTransition in={show} timeout={500} classNames='play' appear>
      <Wrapper>
        <Header>
          <span
            className='iconfont icon-xiajiantou_huaban'
            onClick={() => changePlayType()}></span>
          <div className='songs-info'>
            <span>歌曲</span>
            <p> 歌手</p>
          </div>
          <span>分享</span>
        </Header>
        <Main>
          <div className='img-wrapper'>
            <img src='' alt='' />
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
