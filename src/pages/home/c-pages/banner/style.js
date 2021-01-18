import styled from 'styled-components'

export const BannerWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding-top: 10px;
  .swiper-slide {
    height: 8.75rem;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`

export const TopMenu = styled.div`
  height: 6.25rem;
  display: flex;
  border-bottom: 0.0625rem solid #e6e0e04f;
  .top-menu {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    span {
      font-size: 1.5rem;
      color: red;
      background: #f0efef;
      padding: 0.6875rem;
      border-radius: 50%;
    }
    p {
      margin-top: 0.625rem;
      font-size: 0.625rem;
    }
  }
`
