import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 2.8125rem;
  position: fixed;
  background: #fff;
  bottom: 3.75rem;
  right: 0;
  left: 0;
  border-top: 0.0625rem solid #eee;
  display: flex;
  align-items: center;
  padding: 0.3125rem 0.5rem;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .songs-info {
    flex: 1;
    padding: 0 0.375rem;
    font-size: 0.8125rem;
    padding: 0 0.875rem;
    span {
      font-size: 0.625rem;
      color: #959292;
    }
  }
  .play-list {
    width: 5.625rem;
    display: flex;
    align-items: center;
    span {
      font-size: 1.55rem;
      color: #5b5858;
      &:nth-child(1) {
        font-size: 2rem;
        margin-right: 1.25rem;
      }
    }
  }
`
