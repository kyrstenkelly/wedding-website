import React, { Component } from 'react';
import Countdown from './countdown/countdown';
import './intro.scss';

class Intro extends Component {
  render() {
    const {date} = this.props;

    return (
      <div className='intro'>
        <div className='intro--content'>
          <Countdown date={date} />

          <div className='date'>
            {date.format('MMM D, YYYY')}
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
