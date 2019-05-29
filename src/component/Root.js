import React from 'react'
import User from './User'

export default class Root extends React.Component {
  static getInitData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({name: new Date().getMinutes()})
      }, 3000)
    })
  }

  

  constructor(props) {
    super(props)
    console.log(process.env.IS_SERVER)
    this.state = {
      name: (props.initData && props.initData.name) || 'hahah'
    }
  }

  componentWillMount() {
  }


  render() {
    const { name } = this.state

    return <div>
      hi { name }
      <button onClick={this.getList}>点击切换vue</button>
      <User/>
      </div>
  }
}