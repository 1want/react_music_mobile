import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 11.25rem;
  padding: 0.875rem;
  background: #fff;
  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  .navigation {
    display: flex;
    justify-content: space-between;
    span:nth-child(1) {
      font-size: 1.125rem;
      font-family: cursive;
      font-weight: 900;
    }
    span:nth-child(2) {
      font-size: 0.75rem;
      border-radius: 0.625rem;
      padding: 0.25rem 0.375rem;
      background: #fff;
      border: 0.0625rem solid #9999997a;
    }
  }
  .recommend-item {
    margin: 0 0.625rem;
    margin-top: 0.625rem;
    flex: 0 0 6.25rem 6.25rem;
    img {
      border-radius: 0.875rem;
      width: 6.25rem;
      height: 6.25rem;
      &:nth-child(1) {
        margin-left: -0.625rem;
      }
    }
    span {
      position: relative;
      top: -6.125rem;
      right: -1.875rem;
      background: #0000004f;
      color: #fff;
      font-size: 0.75rem;
      padding: 0.125rem 0.25rem;
      border-radius: 0.625rem;
      i {
        font-size: 0.75rem;
      }
    }
    p {
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      width: 6.25rem;
      font-size: 0.8125rem;
      margin-left: -0.625rem;
    }
  }
`
