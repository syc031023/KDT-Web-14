import React, { Component } from 'react'
import LifeCycleClassChild from './LifeCycleClassChild';

export default class LifeCycleClass extends Component {
    state = {
        number: 0,
        visible: true,
    }

    changeNumber = () => this.setState({number: this.state.number + 1});
    changeVisible = () => this.setState({visible: !this.state.visible});
  render() {
    return (
        <>
        <div>LifeCycleClass</div>
        <button onClick={this.changeNumber}>plus</button>
        <button onClick={this.changeVisible}>on/off</button>
        {this.state.visible && <LifeCycleClassChild number={this.state.number} />}
        </>
    )
  }
}
