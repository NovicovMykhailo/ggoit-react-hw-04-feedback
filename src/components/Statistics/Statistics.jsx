import React, { Component } from 'react';
import css from './Statistics.module.css';
const shortid = require('shortid');

export class Statistics extends Component {

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <ul className={css.list}>
        <h2>Statistics: </h2>
        <li key={shortid.generate()}>
          good: <span>{good}</span>
        </li>
        <li key={shortid.generate()}>
          neutral: <span>{neutral}</span>
        </li>
        <li key={shortid.generate()}>
          bad: <span>{bad}</span>
        </li>
        <li key={shortid.generate()}>
          total: <span>{total}</span>
        </li>
        <li key={shortid.generate()}>
          positive feedback:
          <span>{positivePercentage} %</span>
        </li>
      </ul>
    );
  }
}
