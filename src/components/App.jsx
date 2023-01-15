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
    if (evt.target.tagName !== "BUTTON") {
      return;
    }
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
          justifyContent: 'start',
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
      </div>
    );
  }
}
