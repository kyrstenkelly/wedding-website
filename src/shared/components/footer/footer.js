import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './footer.scss';

class Footer extends Component {
  static propTypes = {
    theme: PropTypes.string
  }

  static defaultProps = {
    theme: 'light'
  }

  render() {
    const className = `footer ${this.props.theme}`;

    return (
      <div className={className}>
        <div className='contain'>
          Made with love <span role='img' aria-label='heart'> ❤️</span>
          by Kyrsten Kelly &copy; 2019
        </div>
      </div>
    );
  }
}

export default Footer;
