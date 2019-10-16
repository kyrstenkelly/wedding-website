import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Footer from 'shared/components/footer/footer';
import Header from './components/header/header';
import Intro from './components/intro/intro';
// import Stars from './components/stars/stars';
import constants from '../../constants/home';
import './home.scss';

const {
  PAGES,
  WEDDING_DATE
} = constants;

class Home extends Component {
  static propTypes = {
    section: PropTypes.oneOf(PAGES.map(l => l.key))
  }

  state = {
    currentSection: PAGES.find(p => p.key === this.props.section),
    backgroundLoaded: false
  }

  componentDidMount() {
    this.setCurrentSection();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.section !== this.props.section) {
      this.setCurrentSection();
    }
  }
  
  setCurrentSection() {
    const currentSection = PAGES.find(p => p.key === this.props.section);
    const backgroundLoaded  = currentSection.loadedImage;

    if (!backgroundLoaded) {
      const image = new Image();
      const setBackgroundLoaded = () => {
        currentSection.loadedImage = image;
        this.setState({ backgroundLoaded: true });
      }
      image.onload = setBackgroundLoaded.bind(this);
      image.src = currentSection.backgroundImage;
    }

    this.setState({
      currentSection,
      backgroundLoaded
    });
  }

  render() {
    const { backgroundLoaded, currentSection } = this.state;
    const imageUrl = backgroundLoaded ? currentSection.backgroundImage
      : currentSection.backgroundImageCompressed;
    const headerLinks = PAGES.filter(p => !!p.key);

    return (
      <div className='home'>
        <div className='hero'>
          <div
            className='hero__overlay'
            style={{
              backgroundImage: `url(${imageUrl})`,
              filter: backgroundLoaded ? 'none' : 'blur(3px)'
            }}
          ></div>

          {/* <div className='stars-container'>
            <div className='stars-left'>
              <Stars />
            </div>

            <div className='stars-right'>
              <Stars />
            </div>
          </div> */}

          <div className='hero__content'>
            <Header links={headerLinks} />

            <Intro date={WEDDING_DATE}/>
          </div>
        </div>

        { currentSection.component &&
          <div className='content'>
            <div className='contain'>
              {currentSection.component}
            </div>
          </div>
        }

        { !!currentSection.key &&
          <Footer theme='dark'></Footer>
        }
      </div>
    );
  }
}

export default withRouter(Home);
