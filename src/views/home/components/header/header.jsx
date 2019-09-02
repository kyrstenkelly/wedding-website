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
    })),
    onLinkClick: PropTypes.func
  }

  static defaultProps = {
    links: []
  }

  state = {
    colorClass: COLOR_CLASSES.light,
    height: null,
    mobileMenuVisible: false
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    this.setState({ height: node.clientHeight });
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  goToSection(key) {
    const { onLinkClick } = this.props;
    if (onLinkClick) {
      onLinkClick(key);
    }
    this.setState({ mobileMenuVisible: false });
  }

  onScroll() {
    const scrolledPastHeader = window.scrollY > (this.state.height * 2);
    const colorClass = scrolledPastHeader ? COLOR_CLASSES.dark : COLOR_CLASSES.light
    this.setState({ colorClass });
  }

  toggleMobileMenu() {
    this.setState({ mobileMenuVisible: !this.state.mobileMenuVisible });
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
        James &amp; Kyrsten
      </a>
    );
  }

  render() {
    const { links } = this.props;
    const middleIndex = Math.ceil(links.length / 2);
    const mobileMenuClass = this.state.mobileMenuVisible ? 'open' : '';
    const leftMenuItems = this.renderMenuItems(links.slice(0, middleIndex));
    const rightMenuItems = this.renderMenuItems(links.slice(middleIndex, links.length));
    const logo = this.renderLogo();

    return (
      <div className={`header ${this.state.colorClass}`}>
        <div className='contain'>
          <div className='menu show-xs-sm show-flex'>
            {!!links.length ?
              <img
                className='menu__icon'
                src={MenuIcon}
                alt='Menu'
                onClick={() => this.toggleMobileMenu()}
              />
              :
              <div></div>
            }

            {logo}

            {/*
              Magical 3rd div so the logo is center aligned.
              https://stackoverflow.com/a/44348868/3250243
            */}
            <div></div>

            <div className={`mobile-menu ${mobileMenuClass}`}>
              {/* TODO: Get a real close icon */}
              <span
                className='mobile-menu__close'
                onClick={() => this.toggleMobileMenu()}
              >X</span>

              <div className='mobile-menu__items'>
                {leftMenuItems}
                {rightMenuItems}
              </div>
            </div>
          </div>

          <div className='menu show-md show-flex'>
            {logo}

            <ul className='menu__list'>
              {leftMenuItems}
              {rightMenuItems}
            </ul>
          </div>

          <div className='menu show-lg-up show-flex'>
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
