import React from 'react';
import { mount } from 'enzyme';

import Header from './header';

describe('<Header/>', () => {
  let wrapper;
  let links;

  beforeEach(() => {
    links = [
      { title: 'Link 1', key: 'link-1' },
      { title: 'Link 2', key: 'link-2' },
      { title: 'Link 3', key: 'link-3' },
      { title: 'Link 4', key: 'link-4' },
      { title: 'Link 5', key: 'link-5' },
      { title: 'Link 6', key: 'link-6' },
    ];
    wrapper = mount(<Header links={links} />);
  });

  it('renders 3 different menu sizes', () => {
    expect(wrapper.find('.menu')).toHaveLength(3);
  });

  describe('the mobile menu', () => {
    let mobileMenu;

    beforeEach(() => {
      mobileMenu = wrapper.find('.menu.show-xs-sm');
    });

    it('only shows the menu icon and logo', () => {
      expect(mobileMenu.find('.menu__icon')).toHaveLength(1);
      expect(mobileMenu.find('.logo')).toHaveLength(1);
    });

    it('the menu items are not shown by default', () => {
      expect(wrapper.state('mobileMenuVisible')).toBe(false);
    });

    describe('when you click the menu icon', () => {
      it('opens the mobile menu', () => {
        const menuIcon = mobileMenu.find('.menu__icon');
        menuIcon.simulate('click');
        expect(wrapper.state('mobileMenuVisible')).toBe(true);
      });
    });

    describe('when you click the close icon', () => {
      beforeEach(() => {
        // Open the menu
        mobileMenu.find('.menu__icon').simulate('click');
      });

      it('closes the mobile menu', () => {
        expect(wrapper.state('mobileMenuVisible')).toBe(true);

        mobileMenu.find('.mobile-menu__close').simulate('click');
        expect(wrapper.state('mobileMenuVisible')).toBe(false);
      });
    });

    describe('when you click on a link', () => {
      // TODO: figure out how we're going to handle switching sections.
    });
  });

  describe('The tablet menu', () => {
    let tabletMenu;

    beforeEach(() => {
      tabletMenu = wrapper.find('.show-md .menu__list');
    });

    it('shows all the links given in one div', () => {
      const menuLinks = tabletMenu.find('.menu__list-item a');
      expect(menuLinks.length).toBe(links.length);
      links.forEach(link => {
        const matchingMenuLink = menuLinks.find(l => l.text() === link.title);
        expect(matchingMenuLink);
      });
    });
  });

  describe('The desktop menu', () => {
    let desktopMenu;

    beforeEach(() => {
      desktopMenu = wrapper.find('.show-lg-up');
    });

    it('divides the links into two groups', () => {
      const menuSections = desktopMenu.find('.menu__list');
      const menuLinks = desktopMenu.find('.menu__list-item a');

      expect(menuSections).toHaveLength(2);
      expect(menuLinks.length).toBe(links.length);
      links.forEach(link => {
        const matchingMenuLink = menuLinks.find(l => l.text() === link.title);
        expect(matchingMenuLink);
      });
    });
  });
});
