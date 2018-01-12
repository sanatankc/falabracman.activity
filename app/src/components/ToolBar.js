import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from './ToolBarButton'


class Toolbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStartEverClicked: false
    }
  }
  render() {
    return (
      <div id="main-toolbar" className="react-toolbar toolbar">
        <button className="toolbutton" id="activity-button" title="My Activity"></button>
        <button className="toolbutton pull-right" id="stop-button" title="Stop"></button>
      </div>
    )
  }
}

export default Toolbar
