import React, { Component } from 'react';
import { Link } from 'react-scroll'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import authHelper from 'helpers/auth';
import MenuIcon from 'images/menu-button.svg';
import config from 'config';
import './header.scss';

class Header extends Component {
  static propTypes = {
    colorClass: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      scroll: PropTypes.bool
    })),
    setHeight: PropTypes.func,
    logout: PropTypes.bool
  }

  static defaultProps = {
    links: []
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    if (this.props.setHeight) {
      this.props.setHeight(node.scrollHeight);
    }
  }

  renderMenuItems() {
    const links = this.props.links.map(link => (
      <li className='menu-item' key={link.to}>
        {link.scroll ?
          <Link
            to={link.to}
            smooth={true}
            offset={-20}
            duration={750}>
            {link.label}
          </Link>
          :
          <a href={link.to}>{link.label}</a>
        }
      </li>
    ));
    if (this.props.logout) {
      links.push(
        <li className='menu-item' key='logout'>
          <a onClick={authHelper.logout} className="btn">Log Out</a>
        </li>
      );
    }
    return links;
  }

  render() {
    const headerClass = `header ${this.props.colorClass}`;

    return (
      <div className={headerClass}>
        <div className='logo'>
          <a href={config.baseURL}>
            J &amp; K
          </a>
        </div>
        <div className='menu-mobile'>
          <img className='menu-icon' src={MenuIcon} alt='Menu'/>
        </div>

        <div className='menu-desktop'>
          <ul className='menu-list'>
            {this.renderMenuItems()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
