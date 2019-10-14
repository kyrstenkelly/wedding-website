import React from 'react';
import Countdown from './countdown/countdown';
import constants from 'constants/home';
import './intro.scss';

const Intro = () => {
  return (
    <div className='intro'>
      <div className='intro--content'>
        <Countdown date={constants.WEDDING_DATE} />

        <div className='date'>
          {constants.WEDDING_DATE_FORMATTED}
        </div>
      </div>
    </div>
  );
}

export default Intro;
