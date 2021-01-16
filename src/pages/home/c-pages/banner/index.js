import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getBannerAction } from '../../store/action'

function Mine() {
  const dispatch = useDispatch()

  const { banner } = useSelector(state => ({
    banner: state.getIn(['home', 'banner'])
  }))
  useEffect(() => {
    dispatch(getBannerAction())
  }, [dispatch])

  return <div>{banner.length}...</div>
}

export default memo(Mine)
