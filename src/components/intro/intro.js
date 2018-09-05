import React, { Component } from 'react';
import Countdown from '../countdown/countdown';
import './intro.scss';

class Intro extends Component {
  render() {
    const {date} = this.props;

    return (
      <div className="intro">
        <div className='overlay'></div>

        <div className='content'>
          <div className='names'>
            <div className='name-1'>
              Kyrsten<br/> Kelly
            </div>
            <div className='and'>
              &#x2b;
            </div>
            <div className='name-2'>
              James<br/>  Custer
            </div>
          </div>

          <div className='message'>
            Are tying the knot
          </div>

          <div className='date'>
            {date.format('MMM D, YYYY')}
          </div>

          <Countdown date={date} />
        </div>
      </div>
    );
  }
}

export default Intro;
