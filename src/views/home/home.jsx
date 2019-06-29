import moment from 'moment';
import React, { Component } from 'react';

import Details from './components/details/details';
import Footer from 'shared/components/footer/footer';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import RSVP from './components/rsvp/rsvp';
import Stars from './components/stars/stars';
import Travel from './components/travel/travel';
import constants from '../../constants/home';
import './home.scss';

const {
  HEADER_LINKS,
  WEDDING_DATE
} = constants;


class Home extends Component {
  state = {
    currentSection: HEADER_LINKS[0]
  }

  updateCurrentSection(key) {
    const currentSection = HEADER_LINKS.find(l => l.key === key);
    if (!currentSection) {
      console.error(`${key} is not a valid section`);
    }
    this.setState({ currentSection });
  }

  renderCurrentSection() {
    const { currentSection } = this.state;
    switch(currentSection.key) {
      case 'details':
        return <Details events={constants.EVENTS} />;
      case 'travel':
        return <Travel />;
      case 'rsvp':
        return <RSVP />;
      default:
        return null;
    }
  }

  render() {
    const { currentSection } = this.state;
    const formattedDate = moment(WEDDING_DATE);
    const links = [];

    // TODO: Add a placeholder image while high-res bg is loading
    return (
      <div className='home'>
        <div
          className='hero'
          style={{
            backgroundImage: `url(${currentSection.backgroundImage})`,
            backgroundPosition: currentSection.backgroundPosition || 'bottom'
          }}
        >
          <div className='hero__overlay'></div>

          <div className='stars-container'>
            <div className='stars-left'>
              <Stars />
            </div>

            <div className='stars-right'>
              <Stars />
            </div>
          </div>

          <div className='hero__content'>
            <Header links={links} onLinkClick={this.updateCurrentSection.bind(this)} />

            <Intro date={formattedDate}/>
          </div>
        </div>

        <div className='content'>
          {/* <div className='contain'>
            {this.renderCurrentSection()}
          </div> */}
          <div className='contain'>
            <div className='save-the-date'>
              Save the date!
              <p>
                Check back soon for more details.
              </p>
            </div>
          </div>
        </div>

        <Footer theme='dark'></Footer>
      </div>
    );
  }
}

export default Home;
