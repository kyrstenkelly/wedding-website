import moment from 'moment';
import React from 'react';
import { shallow } from 'enzyme';

import Countdown from './countdown';

describe('<Countdown />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Countdown />);
  });

  it('renders three countdown units', () => {
    expect(wrapper.find('.unit')).toHaveLength(3);
  });

  describe('if the wedding date is over a year from now', () => {
    beforeEach(() => {
      wrapper.setState({
        weddingDate: moment().add(1, 'year').add(3, 'months')
      });
      wrapper.instance().updateCountdown();
    });

    it('renders years, months, and days', () => {
      const unitLabels = wrapper.find('.unit-label');
      expect(unitLabels).toHaveLength(3);
      expect(unitLabels.get(0).props.children).toEqual('year');
      expect(unitLabels.get(1).props.children).toEqual('months');
      expect(unitLabels.get(2).props.children).toEqual('days');
    });
  });

  describe('if the wedding date is less than a year from now', () => {
    beforeEach(() => {
      wrapper.setState({
        weddingDate: moment().add(3, 'months')
      });
      wrapper.instance().updateCountdown();
    });

    it('renders months, days, and hours', () => {
      const unitLabels = wrapper.find('.unit-label');
      expect(unitLabels).toHaveLength(3);
      expect(unitLabels.get(0).props.children).toEqual('months');
      expect(unitLabels.get(1).props.children).toEqual('days');
      expect(unitLabels.get(2).props.children).toEqual('hours');
    });
  });

  describe('if the wedding date is less than a month from now', () => {
    beforeEach(() => {
      wrapper.setState({
        weddingDate: moment().add(2, 'weeks')
      });
      wrapper.instance().updateCountdown();
    });

    it('renders days, hours, and minutes', () => {
      const unitLabels = wrapper.find('.unit-label');
      expect(unitLabels).toHaveLength(3);
      expect(unitLabels.get(0).props.children).toEqual('days');
      expect(unitLabels.get(1).props.children).toEqual('hours');
      expect(unitLabels.get(2).props.children).toEqual('minutes');
    });
  });

  describe('if the wedding date is less than a week from now', () => {
    beforeEach(() => {
      wrapper.setState({
        weddingDate: moment().add(3, 'days')
      });
      wrapper.instance().updateCountdown();
    });

    it('renders days, hours, and minutes', () => {
      const unitLabels = wrapper.find('.unit-label');
      expect(unitLabels).toHaveLength(3);
      expect(unitLabels.get(0).props.children).toEqual('days');
      expect(unitLabels.get(1).props.children).toEqual('hours');
      expect(unitLabels.get(2).props.children).toEqual('minutes');
    });
  });

  describe('if the wedding date is less than a day from now', () => {
    beforeEach(() => {
      wrapper.setState({
        weddingDate: moment().add(6, 'hours')
      });
      wrapper.instance().updateCountdown();
    });

    it('renders hours, minutes, and seconds', () => {
      const unitLabels = wrapper.find('.unit-label');
      expect(unitLabels).toHaveLength(3);
      expect(unitLabels.get(0).props.children).toEqual('hours');
      expect(unitLabels.get(1).props.children).toEqual('minutes');
      expect(unitLabels.get(2).props.children).toEqual('seconds');
    });
  });
});
