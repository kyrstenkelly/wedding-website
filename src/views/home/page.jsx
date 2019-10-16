import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import BackgroundImage from 'shared/components/background-image/background-image';
import Countdown from './components/countdown/countdown';
import Footer from 'shared/components/footer/footer';
import Header from './components/header/header';
import constants from '../../constants/home';
import './page.scss';

const { PAGES } = constants;

export class Page extends Component {
  static propTypes = {
    section: PropTypes.oneOf(PAGES.map(l => l.key))
  }

  state = {
    currentSection: PAGES.find(p => p.key === this.props.section),
    backgroundLoaded: false
  }

  componentDidUpdate(prevProps) {
    if (prevProps.section !== this.props.section) {
      this.setState({
        currentSection: PAGES.find(p => p.key === this.props.section)
      });
    }
  }

  render() {
    const { currentSection } = this.state;

    return (
      <div className='page'>
        <BackgroundImage 
          className='hero'
          url={currentSection.backgroundImage}
          placeholderUrl={currentSection.backgroundImageCompressed}
        >
          <Header links={PAGES} />

          <div className='hero__content'>
            <Countdown date={constants.WEDDING_DATE} />
          </div>
        </BackgroundImage>

        { currentSection.component &&
          <div className='content'>
            <div className='contain'>
              {currentSection.component}
            </div>
          </div>
        }

        <Footer theme='dark'></Footer>
      </div>
    );
  }
}

export default withRouter(Page);