import React from 'react'
import './app.css'
import Eye from './eyes/Eye'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {mode: 0}
  }

  clickEvent = () => {
    let sum = this.state.mode + 1
    let mode = sum > 4 ? 0 : sum
    this.setState({mode})
  }

  render() {
    return (
      <div onClick={this.clickEvent} className="flex-center">
        <Eye mode={this.state.mode} position="left" />
        <Eye mode={this.state.mode} position="right" />
      </div>
    )
  }
}

export default App
