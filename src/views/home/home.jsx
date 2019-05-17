import moment from 'moment';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import EventDetails from './components/event-details/event-details';
import Footer from 'shared/components/footer/footer';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Stars from './components/stars/stars';
import data from '../../constants/data';
import './home.scss';

const BREAKPOINTS = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200
};

const STAR_WIDTH_MAPPING = {
  xs: 20,
  sm: 50,
  md: 100,
  lg: 200,
  xl: 250
};

class Home extends Component {
  state = {
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

  render() {
    const { starHeight, starWidth } = this.state;
    const formattedDate = moment(data.weddingDate);
    const links = data.content;
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

          <EventDetails />

          <Footer theme='dark'></Footer>
        </div>
      </div>
    );
  }
}

export default Home;
