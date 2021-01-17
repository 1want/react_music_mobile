import React, { memo } from 'react'
import Banner from './c-pages/banner'

import { Wrapper } from './style'

export default memo(function Home(props) {
  return (
    <Wrapper>
      <Banner></Banner>
    </Wrapper>
  )
})
