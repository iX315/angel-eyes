import React from 'react'
import './app.css'
import Eye from './eyes/Eye'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.modes = ["", "closed", "open", "happy", "angry", "love"]
    this.state = {currentMode: 0}
  }

  clickEvent = () => {
    let sum = this.state.currentMode + 1
    let changeMode = sum > this.modes.length - 1 ? 0 : sum
    this.setState({
      currentMode: changeMode
    })
  }

  render() {
    return (
      <div onClick={this.clickEvent} className="flex-center">
        <Eye mode={this.modes[this.state.currentMode]} position="left" />
        <Eye mode={this.modes[this.state.currentMode]} position="right" />
      </div>
    )
  }
}

export default App
