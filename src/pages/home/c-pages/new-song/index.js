import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { getAlbumAction, getNewSongAction } from '../../store/action'
import {
  changeSongInfo,
  addSongToList,
  getMusicInfoAction
} from '@/pages/play/store/action'
import { Wrapper } from './style'

SwiperCore.use([Pagination, Autoplay])

function NewSong() {
  const [current, setCurrent] = useState(1)

  const dispatch = useDispatch()

  const { album, newSong, playList } = useSelector(
    state => ({
      album: state.getIn(['home', 'album']),
      newSong: state.getIn(['home', 'NewSong']),
      playList: state.getIn(['play', 'playList'])
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getAlbumAction(7))
  }, [true])

  useEffect(() => {
    dispatch(getNewSongAction())
  }, [true])

  const resAlbum = []
  const resNewSong = []

  for (let i = 0; i < album.length; i += 3) {
    resAlbum.push(album.slice(i, i + 3))
  }
  for (let i = 0; i < newSong.length; i += 3) {
    resNewSong.push(newSong.slice(i, i + 3))
  }

  function change(index) {
    setCurrent(index)
  }

  const title = ['新歌', '新碟']
  return (
    <Wrapper>
      <div className='navigation'>
        <div className='left'>
          {title.map((item, index) => (
            <span
              onClick={() => change(index)}
              key={item}
              className={current === index ? 'active' : ''}>
              {item}
            </span>
          ))}
        </div>
        <div className='right'>更多 ></div>
      </div>
      <div>
        <Item
          res={resAlbum}
          current={current}
          index={0}
          playList={playList}></Item>
        <Item res={resNewSong} current={current} index={1}></Item>
      </div>
    </Wrapper>
  )
}

function Item(props) {
  const { res, current, index, playList } = props
  const dispatch = useDispatch()
  function playMusic(res) {
    dispatch(getMusicInfoAction(res.id))
    dispatch(addSongToList(res))
  }
  return (
    current === index && (
      <Swiper slidesPerView={1} spaceBetween={-20}>
        {res.map((item, indexs) => {
          return (
            <SwiperSlide key={indexs}>
              <div className='content'>
                {item.map(res => {
                  return (
                    <div
                      className='content-item'
                      key={res.id}
                      onClick={() => playMusic(res)}>
                      <div className='item-left'>
                        <img src={res.album.picUrl} alt='' />
                      </div>
                      <div className='item-right'>
                        <span>{res.name}</span>
                        <p>{res.album.name}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    )
  )
}
export default memo(NewSong)
