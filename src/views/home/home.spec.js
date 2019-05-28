import React from 'react';
import { mount } from 'enzyme';

import Home from './home';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Stars from './components/stars/stars';
import constants from 'constants/home';

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Home />);
  });

  it('renders a header, intro and scroll content', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Intro)).toHaveLength(1);
  });

  it('generates a list of links from the data', () => {
    const header = wrapper.find(Header);
    expect(header.prop('links')).toEqual(constants.HEADER_LINKS);
  });

  describe('if there is no height and width set for the stars', () => {
    it('will not render the Stars components', () => {
      wrapper.setState({
        starHeight: 0,
        starWidth: 0
      }, () => {
        expect(wrapper.find(Stars)).toHaveLength(0);
      });
    });
  });

  describe('if there is a height and width set for the stars', () => {
    it('renders two Stars components', () => {
      wrapper.setState({
        starHeight: 100,
        starWidth: 100
      }, () => {
        expect(wrapper.find(Stars)).toHaveLength(2);
      });
    });
  })
});
