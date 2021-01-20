import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 45px;
  position: fixed;
  background: #fff;
  bottom: 60px;
  right: 0;
  left: 0;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  padding: 5px 8px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }
  .songs-info {
    flex: 1;
    padding: 0 6px;
  }
  .play-list {
    width: 90px;
    span {
      font-size: 28px;
      color: #5b5858;
      &:nth-child(1) {
        font-size: 32px;
        margin-right: 20px;
      }
    }
  }
`
