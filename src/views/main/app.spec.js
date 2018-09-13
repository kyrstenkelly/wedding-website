import React from 'react';
import { shallow } from 'enzyme';

import App from './app';
import Details from 'components/details/details';
import Header from 'components/header/header';
import Intro from 'components/intro/intro';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders a header, intro and details', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Intro)).toHaveLength(1);
    expect(wrapper.find(Details)).toHaveLength(1);
  });
});
