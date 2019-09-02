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
    currentSection: null,
    backgroundLoaded: false
  }

  componentWillMount() {
    this.updateCurrentSection(HEADER_LINKS[0].key);
  }

  updateCurrentSection(key) {
    const currentSection = HEADER_LINKS.find(l => l.key === key);
    if (!currentSection) {
      console.error(`${key} is not a valid section`);
    }

    const image = new Image();
    const setBackgroundLoaded = () => {
      this.setState({ backgroundLoaded: true });
    }
    image.onload = setBackgroundLoaded.bind(this);
    image.src = currentSection.backgroundImage;

    this.setState({
      currentSection,
      backgroundLoaded: false
    });
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
    const {  backgroundLoaded, currentSection } = this.state;
    const formattedDate = moment(WEDDING_DATE);
    const links = HEADER_LINKS;
    const imageUrl = backgroundLoaded ? currentSection.backgroundImage
      : currentSection.backgroundImageCompressed;

    return (
      <div className='home'>
        <div className='hero'>
          <div
            className='hero__overlay'
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundPosition: currentSection.backgroundPosition || 'bottom',
              filter: backgroundLoaded ? 'none' : 'blur(3px)'
            }}
          ></div>

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
          <div className='contain'>
            {this.renderCurrentSection()}
          </div>
        </div>

        <Footer theme='dark'></Footer>
      </div>
    );
  }
}

export default Home;
