import React, { Component } from 'react'

export default class HandlerEx extends Component {
    state = {
        text: "Hello World!",
    }
    changeText = (text) => {
        text==="Hello World!"? this.setState({text: "Goodbye World!"}) : this.setState({text: "Hello World!"})
    }
    render() {
    const {text} = this.state;
    return (
      <div>
        <h1>실습 1</h1>
        <h2>{text}</h2>
        <button onClick={() => {this.changeText(text)}}>클릭!</button>
      </div>
    )
  }
}
