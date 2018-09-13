import React, { Component } from 'react';
import { Link } from 'react-scroll'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MenuIcon from 'images/menu-button.svg';
import './header.scss';

class Header extends Component {
  static propTypes = {
    colorClass: PropTypes.string,
    setHeight: PropTypes.func
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    this.props.setHeight(node.scrollHeight);
  }

  render() {
    const headerClass = `header ${this.props.colorClass}`;

    return (
      <div className={headerClass}>
        <div className='logo'>J &amp; K</div>
        <div className='menu-mobile'>
          <img className='menu-icon' src={MenuIcon} alt='Menu'/>
        </div>

        <div className='menu-desktop'>
          <ul className='menu-list'>
            <li className='menu-item'>
              <Link to="details" smooth={true} offset={-20} duration={750}>
                Details
              </Link>
            </li>
            <li className='menu-item'>
              <Link to="rsvp" smooth={true} offset={-20} duration={750}>
                RSVP
              </Link>
            </li>
            <li className='menu-item'>
              <Link to="about-us" smooth={true} offset={-20} duration={750}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
