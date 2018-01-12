import React, { Component } from 'react'
import ToolBar from './components/ToolBar'
import MainMenu from './components/MainMenu'

class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return ([
      <ToolBar key={'0-tool'} />,
      <div id='canvas' key={'1-canvas'}>
        <MainMenu />
      </div>
    ])
  }
}

export default App
