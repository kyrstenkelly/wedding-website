import moment from 'moment';
import React, { Component } from 'react';

import Details from 'components/details/details';
import Header from 'components/header/header';
import Intro from 'components/intro/intro';
import authHelper from 'helpers/auth';
import config from 'config';
import './app.scss';

class App extends Component {
  state = {
    weddingDate: moment('2020-10-10T06'),
    colorClass: ''
  }

  setHeaderHeight(height) {
    this.setState({headerHeight: height});
  }

  setDetailsOffset(position) {
    // Offset headerheight by 10 so color transition starts
    // before it actually hits the header
    if (position <= (this.state.headerHeight + 20)) {
      this.setState({colorClass: 'dark'});
    } else {
      this.setState({colorClass: 'light'});
    }
  }

  render() {
    const {weddingDate} = this.state;

    const links = [{
      label: 'Details',
      to: 'details',
      scroll: true
    }, {
      label: 'RSVP',
      to: 'rsvp',
      scroll: true
    }, {
      label: 'About Us',
      to: 'about-us',
      scroll: true
    }];

    if (authHelper.isAuthenticated()) {
      links.push({
        label: 'Admin',
        to: config.baseURL + '/admin',
        scroll: false
      })
    }

    return (
      <div className='app'>
        <div className='background-photo'>
          <div className='overlay'></div>

          <div className='content'>
            <Header
              colorClass={this.state.colorClass}
              links={links}
              setHeight={this.setHeaderHeight.bind(this)}
            />

            <Intro date={weddingDate}/>

            <Details setOffset={(p) => this.setDetailsOffset(p)}/>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
