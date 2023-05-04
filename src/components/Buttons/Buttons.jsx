import React, { Component } from 'react';
import css from './Buttons.module.css';
const shortid = require('shortid');

class Buttons extends Component {
  static defaultProps = {};

  static propTypes = {};

  onButtonClick = e => {
    console.log(e)
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
