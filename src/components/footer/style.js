import styled from 'styled-components'

export const BottomMenu = styled.div`
  z-index: 10;
  background: #fff;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  .top {
    height: 60px;
    display: flex;
    align-items: center;
    .item {
      flex: 1;
      text-align: center;
      font-size: 1.1rem;
      color: #999;
      .iconfont {
        font-size: 1.8rem;
      }
      .active {
        color: #ea2b2b;
      }
      .title {
        margin-top: 0.3rem;
        font-size: 0.5rem;
      }
    }
  }
`
