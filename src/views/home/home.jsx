import moment from 'moment';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Details from './components/details/details';
import Footer from 'shared/components/footer/footer';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import RSVP from './components/rsvp/rsvp';
import Stars from './components/stars/stars';
import Travel from './components/travel/travel';
import constants from '../../constants/home';
import { debounce } from '../../helpers/utils';
import './home.scss';

const {
  HEADER_LINKS,
  BREAKPOINTS,
  STAR_WIDTH_MAPPING,
  WEDDING_DATE
} = constants;

const DEBOUNCE_TIMEOUT = 300;

class Home extends Component {
  state = {
    currentSection: HEADER_LINKS[0],
    starWidth: null,
    starHeight: null,
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', debounce(() => {
      this.onResize()
    }, DEBOUNCE_TIMEOUT));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    const node = ReactDOM.findDOMNode(this);
    const screenWidth = node.scrollWidth;
    let currentSize = 'xs';

    Object.keys(BREAKPOINTS).forEach(key => {
      const size = BREAKPOINTS[key];
      if (screenWidth >= size) {
        currentSize = key;
      }
    });

    this.setState({
      starWidth: STAR_WIDTH_MAPPING[currentSize],
      starHeight: node.scrollHeight
    });
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
    const { currentSection, starHeight, starWidth } = this.state;
    const formattedDate = moment(WEDDING_DATE);
    // const links = HEADER_LINKS;
    const links = [];
    const starProps = {
      height: starHeight,
      width: starWidth,
      numStars: starWidth <= 100 ? 10 : 20
    };
    // console.log('star width? ', starProps.width);

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

          {starHeight && starWidth ?
            <div className='stars-container'>
              <div className='stars-left'>
                <Stars {...starProps} />
              </div>

              <div className='stars-right'>
                <Stars {...starProps} />
              </div>
            </div>
            : <div></div>
          }

          <div className='hero__content'>
            <Header links={links} onLinkClick={this.updateCurrentSection.bind(this)} />

            <Intro date={formattedDate}/>
          </div>
        </div>

        <div className='content'>
          {/* <div className='contain'>
            {this.renderCurrentSection()}
          </div> */}
          <div className='contain save-the-date'>
            Save the date!
          </div>
        </div>

        <Footer theme='dark'></Footer>
      </div>
    );
  }
}

export default Home;
