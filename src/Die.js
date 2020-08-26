import React, { Component } from 'react';
import './Die.css';

export class Die extends Component {
  render() {
    return (
      <div className="Die">
        <i
          className={`Die fas fa-dice-${this.props.dieEyes} ${
            this.props.rolling && 'shaker'
          }`}
        ></i>
      </div>
    );
  }
}

export default Die;
