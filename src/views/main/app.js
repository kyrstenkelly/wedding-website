import moment from 'moment';
import React, { Component } from 'react';

import EventDetails from './components/event-details/event-details';
import Footer from 'shared/components/footer/footer';
import Header from 'shared/components/header/header';
import Intro from './components/intro/intro';
import authService from 'services/auth-service';
import data from '../../constants/data';
import './app.scss';

class App extends Component {
  state = {
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
    const formattedDate = moment(data.weddingDate);
    const links = data.content;

    if (authService.isAuthenticated()) {
      links.push({
        title: 'Admin',
        key: 'admin'
      })
    }

    return (
      <div className='app'>
        <div className='content'>
          <div className='background-photo'>
            <div className='overlay'></div>

            <div className='content'>
              <Header
                colorClass={this.state.colorClass}
                links={links}
                setHeight={this.setHeaderHeight.bind(this)}
              />

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

export default App;
