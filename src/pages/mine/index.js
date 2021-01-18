// App.js(父组件)
import React, { useState } from 'react'
// import Child from './Child.js'

export default function App() {
  return (
    <div className='App'>
      <Child list={[123, 321]} />
    </div>
  )
}

// Child.js(子组件)

function Child(props) {
  const { list } = props
  return <span>{list}</span>
}
