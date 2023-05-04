import React, { Component } from 'react';
import css from './App.module.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  sum = 0;

  countTotalFeedback(data) {
    Object.entries(data).map(item => (this.sum += item[1]));
    return this.sum;
  }

  countPositiveFeedbackPercentage(data) {
    return data.good !== 0 ? Math.round((data.good / this.sum) * 100) : 0;
  }
  onLeaveFeedback(e) {
    console.log(e.target);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.app}>
        <Section title="Please Leave your feedback" children>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
          />
        </Section>
      </div>
    );
  }
}
