import moment from 'moment';
import React, { Component } from 'react';

import EventDetails from './components/event-details/event-details';
import Footer from 'shared/components/footer/footer';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Stars from './components/stars/stars';
// import authService from 'services/auth-service';
import data from '../../constants/data';
import './home.scss';

class Home extends Component {
  render() {
    const formattedDate = moment(data.weddingDate);
    const links = data.content;

    // TODO: Calculate height + width of star areas based on window size
    const starsHeight = 1000;
    const starsWidth = 250;
    const numStars = 40;

    // if (authService.isAuthenticated()) {
    //   links.push({
    //     title: 'Admin',
    //     key: 'admin'
    //   })
    // }

    return (
      <div className='home'>
        <div className='content'>
          <div className='background-photo'>
            <div className='overlay'></div>

            <div className='stars-container'>
              <div className='stars-left'>
                <Stars height={starsHeight} width={starsWidth} numStars={numStars} />
              </div>

              <div className='stars-right'>
                <Stars height={starsHeight} width={starsWidth} numStars={numStars} />
              </div>
            </div>

            <div className='content'>
              <Header links={links} />

              <Intro date={formattedDate}/>
            </div>
          </div>

          <EventDetails />

          <Footer theme='dark'></Footer>
        </div>
      </div>
    );
  }
}

export default Home;
