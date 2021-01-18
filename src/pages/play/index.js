import React, { memo } from 'react'
import Mini from './c-pages/mini.js'
import Max from './c-pages/max.js'

export default memo(function Player() {
  return (
    <div>
      {/* <Mini></Mini> */}
      <Max></Max>
    </div>
  )
})
