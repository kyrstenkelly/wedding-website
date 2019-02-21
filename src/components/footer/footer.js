import React, { Component } from 'react';
import './footer.scss';

class Header extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='contain'>
          Made with love <span role='img' aria-label='heart'> ❤️</span> by Kyrsten Kelly &copy; 2019
        </div>
      </div>
    );
  }
}

export default Header;
