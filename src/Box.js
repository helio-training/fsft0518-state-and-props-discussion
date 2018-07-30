import React, { Fragment, Component } from 'react'

export default class extends Component {

  state = {
    color: this.props.color || 'red'
  }

  // constructor(props){
  //   super(props)
  //   this.state = {}
  // }

  render() {
    return (
      <div style={{
        background: this.state.color,
        width: '200px',
        height: '200px'
      }}>
        The Box Component

        <button type="button" onClick={e => this.setState({ color: 'blue'})}>Go Cougars</button>
        <button type="button" onClick={e => this.setState({ color: this.props.color})}>Reset</button>

      </div>
    )
  }
}
