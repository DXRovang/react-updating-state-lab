// Code DigitalClicker Component Here
import React, { Component } from "react"

export default class DigitalClicker extends Component{

  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      // debugger
      return {
        timesClicked: previousState.timesClicked + 1
      }
    })
  }

  render(){
    return(
      <button onClick={this.handleClick.bind(this)}>{this.state.timesClicked}</button>
    )
  }
}