import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MenuIcon from '../../images/menu-button.svg';
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
        <div className='menu'>
          <img className='menu-icon' src={MenuIcon} alt='Menu'/>
        </div>
      </div>
    );
  }
}

export default Header;
