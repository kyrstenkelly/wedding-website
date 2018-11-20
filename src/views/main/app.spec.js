import React from 'react';
import { shallow } from 'enzyme';

import App from './app';
import Header from 'components/header/header';
import Intro from 'components/intro/intro';
import ScrollContent from 'components/scroll-content/scroll-content';
import data from '../../constants/data';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders a header, intro and scroll content', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Intro)).toHaveLength(1);
    expect(wrapper.find(ScrollContent)).toHaveLength(1);
  });

  it('generates a list of links from the data', () => {
    const header = wrapper.find(Header);
    expect(header.prop('links')).toEqual(
      data.content.map(item => ({
        label: item.title,
        to: item.key,
        scroll: true
      }))
    );
  });
});
