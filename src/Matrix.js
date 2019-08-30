import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {
//Need a function to get color from the color selector and updates the state here
  constructor(props) {
    super(props)
    this.state = {
      color: '#FFF'
    }
  }

  getSelectedColor = () => (this.state.color)

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getSelectedColor = {this.getSelectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  makeColor = (color) => {
    const newColor = color
    this.setState({
      color: newColor
    })
  }

  render() {
    return (
      <div id="app">
        <ColorSelector makeColor = {this.makeColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
