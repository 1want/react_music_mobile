import React, { memo } from 'react'
import Banner from './c-pages/banner'
import Recommend from './c-pages/recommend'

import { Wrapper } from './style'

export default memo(function Home() {
  return (
    <Wrapper>
      <Banner></Banner>
      <Recommend></Recommend>
    </Wrapper>
  )
})
