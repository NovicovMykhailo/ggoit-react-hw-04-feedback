import React, { Component } from 'react';
import css from './Buttons.module.css';
const shortid = require('shortid');

class Buttons extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {};

    static propTypes = {};
    countTotalFeedback() { };
    countPositiveFeedbackPercentage() { };

  onButtonClick = e => {
    console.log(e);
  };

    render() {
      return (
          <div className={css.Container}>
              {this.props.buttons.map(b => {
                  return (
                    <button
                      key={shortid.generate()}
                      className={css.button}
                      type="button"
                      name={Object.keys(b)}
                      onClick={this.onButtonClick}
                    >
                      {Object.keys(b)}
                    </button>
                  );
                 
              })}
              
      </div>
    );
  }
}

export default Buttons;