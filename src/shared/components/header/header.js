import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import MenuIcon from 'images/menu-button.svg';
import './header.scss';

const COLOR_CLASSES = {
  dark: 'dark',
  light: 'light'
};

class Header extends Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired
    }))
  }

  static defaultProps = {
    links: []
  }

  state = {
    colorClass: COLOR_CLASSES.light,
    height: null
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    this.setState({ height: node.scrollHeight });
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  goToSection(key) {
    console.log(`Going to section: ${key}`);
  }

  handleScroll() {
    const scrolledPastHeader = window.scrollY > (this.state.height * 2);
    const colorClass = scrolledPastHeader ? COLOR_CLASSES.dark : COLOR_CLASSES.light
    this.setState({ colorClass });
  }

  renderMenuItems(links) {
    return links.map(link => (
      <li className='menu__list-item' key={link.key}>
        <a onClick={() => this.goToSection(link.key)}>
          {link.title}
        </a>
      </li>
    ));
  }

  renderLogo() {
    return (
      <a
        className='logo'
        onClick={() => this.goToSection('details')}
      >
        Kyrsten &amp; James
      </a>
    );
  }

  render() {
    const { links } = this.props
    const middleIndex = Math.ceil(links.length / 2);
    const leftMenuItems = this.renderMenuItems(links.slice(0, middleIndex));
    const rightMenuItems = this.renderMenuItems(links.slice(middleIndex, links.length));
    const logo = this.renderLogo();

    return (
      <div className={`header ${this.state.colorClass}`}>
        <div className='contain'>
          <div className='menu show-xs show-flex'>
            <img className='menu__icon' src={MenuIcon} alt='Menu'/>

            {logo}

            {/*
              Magical 3rd div so the logo is center aligned.
              https://stackoverflow.com/a/44348868/3250243
            */}
            <div></div>
          </div>

          <div className='menu show-sm show-flex'>
            {logo}

            <ul className='menu__list'>
              {leftMenuItems}
              {rightMenuItems}
            </ul>
          </div>

          <div className='menu show-md-up show-flex'>
            <ul className='menu__list'>
              {leftMenuItems}
            </ul>

            {logo}

            <ul className='menu__list'>
              {rightMenuItems}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
