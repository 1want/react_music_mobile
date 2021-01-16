import styled from 'styled-components'

export const All = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100%;
  background: red;
`

export const TopMenu = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  position: fixed;
  top: 0;
  .top-img {
    width: 1.7rem;
    height: 1.7rem;
  }
  input {
    flex: 1;
  }
  .icon-luyin {
    width: 1.7rem;
    height: 1.7rem;
    font-size: 1.5rem;
  }
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
      .title {
        margin-top: 0.3rem;
        font-size: 0.5rem;
      }
    }
  }
`
