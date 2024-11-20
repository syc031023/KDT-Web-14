import React, { Component } from 'react'

export default class ClassBind extends Component {
    state = {
        name: "코딩온",
    };
    printConsole = () => {
        console.log("this", this);
        console.log("name", this.state.name)
    }

    printConsole2() {
        console.log("this", this);
    }

    // 인자 전달하는 경우
    printConsole3 = (msg) => {
        console.log(msg); 
    }
    
    printConsole4 = (e, msg) => {
        console.log(e);
        console.log(msg);
    }
  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        <button onClick={this.printConsole}>printConsole(인자x)</button>
        <button onClick={this.printConsole2.bind(this)}>printConsole2(인자x)</button>
        <br />
        <button onClick={() => {this.printConsole3("안녕")}}>printConsole3(인자O)</button>
        <button onClick={(e) =>{this.printConsole4(e, "안녕")}}>printConsole4(인자O)</button>
      </div>
    )
  }
}
