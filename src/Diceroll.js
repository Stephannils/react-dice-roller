import React, { Component } from 'react';
import Die from './Die';
import './Diceroll.css';

export class Diceroll extends Component {
  static defaultProps = {
    side: ['one', 'two', 'three', 'four', 'five', 'six'],
  };

  state = {
    die1: 'one',
    die2: 'one',
    active: false,
    text: 'Roll me!',
  };

  roll = (e) => {
    this.setState({
      die1: this.props.side[Math.floor(Math.random() * this.props.side.length)],
      die2: this.props.side[Math.floor(Math.random() * this.props.side.length)],
      active: true,
      text: 'Rolling...',
    });
    setTimeout(() => {
      this.setState({ active: false, text: 'Roll me!' });
    }, 1000);
  };

  render() {
    return (
      <div className="Diceroll">
        <div className="wrapper">
          <Die dieEyes={this.state.die1} rolling={this.state.active} />
          <Die dieEyes={this.state.die2} rolling={this.state.active} />
        </div>
        <button onClick={this.roll} disabled={this.state.active}>
          {this.state.text}
        </button>
      </div>
    );
  }
}

export default Diceroll;
