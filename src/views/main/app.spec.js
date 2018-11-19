import React from 'react';
import { shallow } from 'enzyme';

import App from './app';
import Header from 'components/header/header';
import Intro from 'components/intro/intro';
import ScrollContent from 'components/scroll-content/scroll-content';

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
});
