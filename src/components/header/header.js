import React, { Component } from 'react';
import { Link } from 'react-scroll'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MenuIcon from 'images/menu-button.svg';
import './header.scss';

class Header extends Component {
  static propTypes = {
    colorClass: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })).isRequired,
    setHeight: PropTypes.func,
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    this.props.setHeight(node.scrollHeight);
  }

  renderMenuItems() {
    return this.props.links.map(link => (
      <li className='menu-item' key={link.to}>
        <Link
          to={link.to}
          smooth={true}
          offset={-20}
          duration={750}>
          {link.label}
        </Link>
      </li>
    ));
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
            {this.renderMenuItems()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
