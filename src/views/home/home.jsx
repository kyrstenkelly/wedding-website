import moment from 'moment';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import EventDetails from './components/event-details/event-details';
import Footer from 'shared/components/footer/footer';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Stars from './components/stars/stars';
import constants from '../../constants/home';
import './home.scss';

const {
  HEADER_LINKS,
  BREAKPOINTS,
  STAR_WIDTH_MAPPING,
  WEDDING_DATE
} = constants;

class Home extends Component {
  state = {
    currentSection: HEADER_LINKS[0].key,
    starWidth: null,
    starHeight: null,
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
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
    this.setState({ currentSection: key });
  }

  renderCurrentSection() {
    switch(this.state.currentSection) {
      case 'details':
        return <EventDetails />;
      default:
        return null;
    }
  }

  render() {
    const { starHeight, starWidth } = this.state;
    const formattedDate = moment(WEDDING_DATE);
    const links = HEADER_LINKS;
    const starProps = {
      height: starHeight,
      width: starWidth,
      numStars: 20
    };

    return (
      <div className='home'>
        <div className='content'>
          <div className='background-photo'>
            <div className='overlay'></div>

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

            <div className='content'>
              <Header links={links} />

              <Intro date={formattedDate}/>
            </div>
          </div>

          {this.renderCurrentSection()}

          <Footer theme='dark'></Footer>
        </div>
      </div>
    );
  }
}

export default Home;
