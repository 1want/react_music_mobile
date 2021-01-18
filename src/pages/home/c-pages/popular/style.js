import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 200px;
  padding: 0.875rem;
  margin-top: 10px;
  background: #fff;
  border-radius: 12px;
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
    flex-direction: column;
    .content-item {
      display: flex;
      align-items: center;
      margin: 5px 0;
      .item-left {
        img {
          height: 50px;
          width: 50px;
          border-radius: 8px;
        }
      }
      .item-right {
        margin-left: 10px;
        line-height: 150%;
        width: 70%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        span {
          font-size: 15px;
          font-family: cursive;
        }
        p {
          font-size: 12px;
          color: #afa9a9;
        }
      }
    }
  }
`
