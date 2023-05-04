import React, { Component } from 'react';
import css from './Statistics.module.css';
const shortid = require('shortid');

// const shortid = require('shortid');

export class Statistics extends Component {
  stats = {
    totalValues: 0,
  };

  countTotalFeedback(data) {
    let sum = 0;
    Object.entries(data).map(item =>
      sum+=item[1]
    )
    this.setState({ totalValues: { sum } }) 
  }

  // countPositiveFeedbackPercentage() {}

  render() {
    const { stats } = this.props;
    // this.countTotalFeedback(stats);
    console.log(this.stats.totalValues);

    return (
      <ul className={css.list}>
        <h2>Statistics: </h2>
        {Object.entries(stats).map(item => (
          <li key={shortid.generate()}>
            {item[0]}: <span>{item[1]}</span>
          </li>
        ))}
        <li>
          total: <span>{}</span>
        </li>
        <li>
          positive feedback:
          <span>{} %</span>
        </li>
      </ul>
    );
  }
}
