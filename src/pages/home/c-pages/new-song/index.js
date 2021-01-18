import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { getAlbumAction, getNewSongAction } from '../../store/action'

import { Wrapper } from './style'

SwiperCore.use([Pagination, Autoplay])

function NewSong() {
  const [current, setCurrent] = useState(1)
  const [show, setShow] = useState(true)

  const dispatch = useDispatch()

  const { album, newSong, disc } = useSelector(
    state => ({
      album: state.getIn(['home', 'album']),
      newSong: state.getIn(['home', 'NewSong']),
      disc: state.getIn(['home', 'disc'])
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getAlbumAction())
  }, [dispatch])

  useEffect(() => {
    dispatch(getNewSongAction())
  }, [dispatch])

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

  const title = ['新歌', '新碟', '数字专辑']
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
        <Item res={resAlbum} current={current} index={0}></Item>
        <Item res={resNewSong} current={current} index={1}></Item>
        <Item res={resAlbum} current={current} index={2}></Item>
      </div>
    </Wrapper>
  )
}

function Item(props) {
  const { res, current, index } = props
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      style={{
        left: current === index ? '0' : '-1000000px',
        position: current === index ? 'relative' : 'absolute'
      }}>
      {res.map((item, indexs) => {
        return (
          <SwiperSlide key={indexs}>
            <div className='content'>
              {item.map(res => {
                return (
                  <div className='content-item' key={res.id}>
                    <div className='item-left'>
                      <img src={res.picUrl ?? res.coverImgUrl} alt='' />
                    </div>
                    <div className='item-right'>
                      <span>{res.name}</span>
                      <p>{res.company}</p>
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
}
export default memo(NewSong)
