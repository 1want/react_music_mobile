import React, { memo } from 'react'
import { connect } from 'react-redux'

import { getBannerAction } from '../../store/action'

function mine(props) {
  const { banner } = props
  return (
    <div>
      {banner.length}
      <button onClick={() => props.add()}>addddddddd</button>
    </div>
  )
}

const mapStateToProps = state => ({
  banner: state.home.get('banner')
})

const mapDispatchToProps = dispatch => ({
  add() {
    dispatch(getBannerAction)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(mine))
