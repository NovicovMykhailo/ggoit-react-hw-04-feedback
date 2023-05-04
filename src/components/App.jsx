
import React, { Component } from 'react';
import css from './App.module.css';
import Buttons from './Buttons/Buttons';
import { Statistics } from './Statistics/Statistics';
import Title from './Title/Title';

export class App extends Component {
  state = {
    good: 4,
    neutral: 12,
    bad: 6,
  };
  

  render() {
    return (
      <div className={css.app}>
        <Title title={'Please Leave your feedback'} />
        <Buttons buttons={[{ good: 0 }, { neural: 0 }, { bad: 0 }]} />
        <Statistics stats={this.state} />
      </div>
    );
  }
};
