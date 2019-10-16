import React from 'react';
import { shallow } from 'enzyme';

import Travel from './travel';

describe('<Travel />', () => {
  it('matches the snapshot', () => {
    expect(shallow(<Travel />)).toMatchSnapshot();
  });
});
