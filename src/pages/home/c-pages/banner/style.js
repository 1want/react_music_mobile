import styled from 'styled-components'

export const BannerWrapper = styled.div`
  overflow: hidden;
  border-radius: 13px;
  width: 100%;

  .swiper-slide {
    height: 140px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 13px;
    }
  }
`

export const TopMenu = styled.div`
  height: 100px;
  display: flex;
  border-bottom: 1px solid #efe9e966;
  .top-menu {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    span {
      font-size: 24px;
      color: red;
      background: #f0e7e9;
      padding: 10px;
      border-radius: 50%;
    }
    p {
      margin-top: 10px;
      font-size: 10px;
    }
  }
`
