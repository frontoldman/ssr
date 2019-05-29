import React from 'react'
import ReactDom from 'react-dom'
import Root from './component/Root'

ReactDom.hydrate((
  <Root initData={window.__init_data.rootData}/>
), document.getElementById('root'))