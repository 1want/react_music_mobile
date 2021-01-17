import styled from 'styled-components'

export const All = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100%;
  background: red;
`

export const BottomMenu = styled.div`
  .top {
    height: 60px;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
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
