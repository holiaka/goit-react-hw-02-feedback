import { Component } from 'react';
// import { styled } from 'styled-component';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = evt => {
    const { name } = evt.target;
    let value = this.state[name];
    value += 1;    
    this.setState(preState => preState[name] = value);
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Please leave feedback</h2>
        <div onClick={this.onClick}>
          <button name='good'>Good</button>
          <button name='neutral'>Neutral</button>
          <button name='bad'>Bad</button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </div>
    );
  }
}
