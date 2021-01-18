import styled from 'styled-components'

export const TopMenu = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  align-items: center;
  top: 0;
  height: 60px;
  z-index: 10;
  background: #f0f0f0;
  .top-img {
    width: 1.3rem;
    height: 1.3rem;
    padding: 0 1rem;
  }
  input {
    flex: 1;
    height: 2.0625rem;
    border-radius: 0.9375rem;
    background: #fff;
    text-indent: 0.8rem;
  }
  .icon-luyin {
    width: 3.6rem;
    height: 3.125rem;
    line-height: 3.125rem;
    text-align: center;
    font-size: 1.3rem;
  }
`
