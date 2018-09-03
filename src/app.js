import React, { Component } from 'react';
import Countdown from './components/countdown/countdown';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <span className="gif"></span>
          <h1 className="title">James &amp; Kyrsten</h1>
        </header>

        <div className="body">
          <div className="date">
            <div className="date-1">
              JUNE 20
            </div>
            <div className="date-2">
              2020
            </div>
          </div>

          <Countdown/>
        </div>
      </div>
    );
  }
}

export default App;
