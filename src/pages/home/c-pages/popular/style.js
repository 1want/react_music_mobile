import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 11.25rem;
  padding: 0.875rem;
  margin-top: 10px;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
`
