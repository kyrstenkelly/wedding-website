import React from 'react';
import { shallow } from 'enzyme';

import { Home } from './home';
import Header from './components/header/header';
import constants from 'constants/home';

// jest.mock('./components/header/header');

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // TODO: Add back when we add the header to the site
  it('generates a list of links from the data', () => {
    const header = wrapper.find(Header);
    expect(header.prop('links')).toEqual(constants.PAGES);
  });
});
