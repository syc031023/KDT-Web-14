import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        number: 0,

    }
  render() {
    // state는 this.state로 접근 가능
    const {number} = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={() => {
            // this.setState(): state값을 바꾸는 함수
            this.setState({number: number + 1});
        }}>+1</button>
      </div>
    )
  }
}
