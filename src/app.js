import moment from 'moment';
import React, { Component } from 'react';
import Countdown from './components/countdown/countdown';
import './app.scss';

class App extends Component {
  state = {
    weddingDate: moment('2020-06-20T06')
  }

  render() {
    const {weddingDate} = this.state;

    return (
      <div className='app'>
        <div className='overlay'></div>

        <div className='content'>
          <header className='header'>
            {/* <span className='gif'></span> */}
            <h1 className='title'>James &amp; Kyrsten</h1>
          </header>

          <div className='body'>
            <div className='message'>
              Are tying the knot
            </div>

            <div className='date'>
              {weddingDate.format('MMMM D, YYYY')}
            </div>

            <Countdown date={weddingDate} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
