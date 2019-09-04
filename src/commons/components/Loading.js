import React from 'react'

import './Loading.scss'

export default () => {
  return (
    <div id="loading-container">
      <span>Loading</span>
      <span className="point">.</span>
      <span className="point">.</span>
      <span className="point">.</span>
    </div>
  )
}
