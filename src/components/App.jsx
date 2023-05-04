
import React, { Component } from 'react';
import css from './App.module.css';
import Buttons from './Buttons/Buttons';
import { Statistics } from './Statistics/Statistics';
import Title from './Title/Title';

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
  

  render() {
    const { good, neutral, bad } = this.state
    return (
      <div className={css.app}>
        <Title title={'Please Leave your feedback'} />
        <Buttons buttons={[{ good: 0 }, { neural: 0 }, { bad: 0 }]} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(this.state)}
          positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
        />
      </div>
    );
  }
};
