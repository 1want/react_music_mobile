import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #c1c1c1;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  .iconfont {
    font-size: 30px;
    color: #fff;
    width: 60px;
  }
  .songs-info {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    span {
      text-align: center;
      width: 70%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      margin-top: 5px;
    }
  }
  .icon-share_icon {
    font-size: 24px;
    text-align: center;
  }
`

export const Main = styled.div`
  /* height: 300px; */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .img-wrapper {
    height: 260px;
    width: 260px;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    img {
      overflow: hidden;
      height: 200px;
      width: 200px;
      border-radius: 50%;
    }
  }
`

export const Footer = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .btn {
    display: flex;
    margin-top: 30px;
    align-items: center;
    span {
      flex: 1;
      text-align: center;
      font-size: 25px;
      color: #fff;
    }
    span:nth-child(3) {
      font-size: 48px;
    }
  }
`
