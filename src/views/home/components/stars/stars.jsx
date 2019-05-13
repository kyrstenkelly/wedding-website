import React, { Component } from 'react';
import Star from '../stars/star';
import './stars.scss';

class Stars extends Component {
  render() {
    return (
      <div className='stars'>
        <Star height={100} width={100} length={50} />
      </div>
    );
  }
}

export default Stars;
