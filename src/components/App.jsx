import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';


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
    this.setState(preState => (preState[name] = value));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((a, b) => a + b, 0);

  countPositiveFeedbackPercentage = () => {
    if (!this.countTotalFeedback()) {
      return '-';
    } else {
      return `${Math.round(
        (this.state.good / this.countTotalFeedback()) * 100
      )}%`;
    }
  };

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
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onClick}></FeedbackOptions>
        </Section>
        <Section title={'Statistics'}>
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}></Statistics>
        </Section>
        {/* <h2>Please leave feedback</h2>
        <div onClick={this.onClick}>
          <button name="good">Good</button>
          <button name="neutral">Neutral</button>
          <button name="bad">Bad</button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}</p>
        </div> */}
      </div>
    );
  }
}
