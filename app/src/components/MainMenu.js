import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(179,200,201,1) 0%, rgba(179,200,201,1) 53%, rgba(111,210,156,1) 96%, rgba(111,210,156,1) 100%);
`
const ControlsContainer = styled.div`
  font-family: 'DS Moster';
  display: flex;
  justify-content: center;
  font-size: 36px;
`
const Option = styled.div`
  color: ${props => props.isSelected ? 'red' : 'black'};
  cursor: pointer;
`
const GameBanner = styled.div`
  display: flex;
  height: 340px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  img {

  }
`
const HideInPhoneImg = styled.img`
  @media only screen and (max-width: 754px) {
    display: none;
  }
`

class MainMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      optionSelected: 0
    }
    this.options = ['play', 'options', 'quit']
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  handleKeyDown(e) {
    if (e.key === 'ArrowUp') {
      this.handleUpArrow()
    }
    if (e.key == 'ArrowDown') {
      this.handleDownArrow()
    }
  }

  handleUpArrow() {
    let optionSelected
    this.setState(prev => {
      if (prev.optionSelected === 0) {
        optionSelected = this.options.length - 1
      } else {
        optionSelected = prev.optionSelected - 1
      }
      return { optionSelected }
    })
  }

  handleDownArrow() {
    let optionSelected
    this.setState(prev => {
      if (prev.optionSelected === this.options.length - 1) {
        optionSelected = 0
      } else {
        optionSelected = prev.optionSelected + 1
      }
      return { optionSelected }
    })
  }

  onOptionClick(index) {
    this.setState({optionSelected: index})
  }

  render() {
    return(
      <Container>
        <GameBanner>
          <div>
            <HideInPhoneImg src='images/falabracman.png' />
            <img src='images/menu_sprite.png' height={150} />
          </div>
        </GameBanner>
        <ControlsContainer inner Ref={controlsContainer => { this.controlsContainer = controlsContainer }}>
          <div>
            {this.options.map((option, index) =>
              <Option
                isSelected={this.state.optionSelected === index}
                key={index}
                onClick={this.onOptionClick.bind(this, index)}
              >{option}</Option>
            )}
          </div>
        </ControlsContainer>
      </Container>
    )
  }
}

export default MainMenu
