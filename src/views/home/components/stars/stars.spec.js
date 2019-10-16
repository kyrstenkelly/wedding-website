import React from 'react';
import { shallow } from 'enzyme';

import Stars from './stars';

describe('<Stars />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Stars height={100} width={100} />, {
      disableLifecycleMethods: true
    });
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
