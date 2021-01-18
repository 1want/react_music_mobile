import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 14.6875rem;
  padding: 0.875rem;
  margin-top: 0.625rem;
  background: #fff;
  border-radius: 1.25rem;
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

  .content {
    display: flex;
    overflow-x: auto;
    margin-top: 0.625rem;
    .content-item {
      flex: 0 0 14.375rem 10.625rem;
      margin: 0 0.625rem;
      img {
        width: 14.375rem;
        height: 10rem;
        &:nth-child(1) {
          margin-left: -0.625rem;
        }
      }
      span {
        position: relative;
        top: -1.875rem;
        right: -11.25rem;
        background: #0000004f;
        color: #fff;
        font-size: 0.875rem;
        padding: 0.5rem;
        border-radius: 50%;
      }
      p {
        margin-top: -0.5rem;
        margin-left: -0.625rem;
        font-size: 0.875rem;
        font-family: Georgia, serif;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
`
