import moment from 'moment';
import React, { Component } from 'react';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import './app.scss';

class App extends Component {
  state = {
    weddingDate: moment('2020-10-10T06')
  }

  render() {
    const {weddingDate} = this.state;

    return (
      <div className='app'>
        <div className='background-photo'>
          <div className='overlay'></div>

          <div className='content'>
            <Header />

            <Intro date={weddingDate} />
          </div>
        </div>

        <div className='details'>
          <h1>Some Details Here</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque cursus tortor, commodo cursus diam placerat vel. Fusce porta nulla sed felis pellentesque, id vestibulum mi mollis. Fusce dignissim lorem nec scelerisque hendrerit. Cras rutrum pharetra dolor vel feugiat. Vivamus eleifend posuere ultrices. Etiam consequat odio a aliquet iaculis. In hac habitasse platea dictumst. Maecenas sed luctus est. Duis bibendum urna a tristique volutpat.

            Aliquam elementum vitae elit nec fringilla. Duis rhoncus odio enim, sed dignissim tellus varius iaculis. Aenean suscipit posuere rhoncus. Duis in nisi a nulla gravida aliquam ac viverra magna. Aenean pharetra tincidunt aliquet. Vestibulum tincidunt a tellus a pellentesque. Nam in bibendum velit.

            Etiam consequat posuere mi vel sodales. Morbi blandit nibh tellus, ac vulputate ipsum posuere nec. Quisque feugiat erat vitae urna imperdiet ultricies. Quisque tempor nisi at quam egestas, non ullamcorper ante faucibus. Aenean pretium mauris sed massa faucibus posuere. Praesent scelerisque lorem odio, id aliquet leo egestas in. Nam sed lectus commodo, sollicitudin ex nec, mollis massa. Maecenas varius ut ex id aliquet. Pellentesque ac sodales purus. Donec vel tortor est. Sed rhoncus ante sodales tellus gravida tincidunt. Nulla pulvinar nisi orci.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
