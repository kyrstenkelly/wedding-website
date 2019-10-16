import React from 'react';
import { shallow } from 'enzyme';
import Details from './details';

describe('<Details/>', () => {
  it('matches the snapshot', () => {
    expect(shallow(<Details />)).toMatchSnapshot();
  });
});
