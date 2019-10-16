import React from 'react';
import { mount } from 'enzyme';

import Home from './home';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Stars from './components/stars/stars';
import Footer from 'shared/components/footer/footer';
// import constants from 'constants/home';

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Home />);
  });

  it('renders a header, intro and scroll content', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Intro)).toHaveLength(1);
  });

  // TODO: Add back when we add the header to the site
  // it('generates a list of links from the data', () => {
  //   const header = wrapper.find(Header);
  //   expect(header.prop('links')).toEqual(constants.PAGES);
  // });

  it('renders two Stars components', () => {
    expect(wrapper.find(Stars)).toHaveLength(2);
  });

  it('renders a footer', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
