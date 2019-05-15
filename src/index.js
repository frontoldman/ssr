import React from 'react'
import ReactDom from 'react-dom'
import Root from './component/Root'

ReactDom.hydrate((
  <Root />
), document.getElementById('root'))