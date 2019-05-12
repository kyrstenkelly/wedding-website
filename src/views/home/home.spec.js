import React from 'react';
import { shallow } from 'enzyme';

import Home from './home';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import data from '../../constants/data';

describe('<Home />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('renders a header, intro and scroll content', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Intro)).toHaveLength(1);
  });

  it('generates a list of links from the data', () => {
    const header = wrapper.find(Header);
    expect(header.prop('links')).toEqual(data.content);
  });
});
