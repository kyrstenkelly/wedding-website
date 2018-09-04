import moment from 'moment';
import React, { Component } from 'react';
import Countdown from './components/countdown/countdown';
import './app.scss';

class App extends Component {
  state = {
    weddingDate: moment('2020-05-30T06')
  }

  render() {
    const {weddingDate} = this.state;

    return (
      <div className='app'>
        <div className='overlay'></div>

        <div className='content'>
          <header className='header'>
            <div className='logo'>J &amp; K</div>
          </header>

          <div className='body'>
            <div className='names'>
              <div className='name-1'>
                Kyrsten<br/> Kelly
              </div>
              <div className='and'>
                &#x2b;
              </div>
              <div className='name-2'>
                James<br/>  Custer
              </div>
            </div>

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
