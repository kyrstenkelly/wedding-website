import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BackgroundImage from 'shared/components/background-image/background-image';
import Countdown from './components/countdown/countdown';
import Header from './components/header/header';
// import Stars from './components/stars/stars';
import constants from '../../constants/home';
import background from 'images/rsvp.jpg';
import backgroundCompressed from 'images/rsvp-compressed.jpg';
import './home.scss';

export class Home extends Component {
  render() {
    return (
      <div className='home'>
        <BackgroundImage 
          className='hero'
          url={background}
          placeholderUrl={backgroundCompressed}
        >
          {/* <div className='stars-container'>
            <div className='stars-left'>
              <Stars />
            </div>

            <div className='stars-right'>
              <Stars />
            </div>
          </div> */}

          <Header links={constants.PAGES} />

          <div className='hero__content'>
            <Countdown date={constants.WEDDING_DATE} />

            <div className='date'>
              {constants.WEDDING_DATE_FORMATTED}
            </div>
          </div>
        </BackgroundImage>
      </div>
    );
  }
}

export default withRouter(Home);
