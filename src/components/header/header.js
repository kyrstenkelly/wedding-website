import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className='logo'>J &amp; K</div>
        <div className='menu'>Menu</div>
      </div>
    );
  }
}

export default Header;
