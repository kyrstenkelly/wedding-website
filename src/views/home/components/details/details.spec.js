import React from 'react';
import { mount } from 'enzyme';
import constants from 'constants/home';
import Details from './details';

const events = constants.EVENTS;

describe('<Details/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Details events={events} />);
  });

  it('renders an event section for each event given', () => {
      expect(wrapper.find('.events .event')).toHaveLength(events.length);
  });

  describe('an event section', () => {
    let eventSections;

    beforeEach(() => {
      eventSections = wrapper.find('.events .event');
    });

    it('renders the event title, time and address', () => {
      eventSections.forEach((section, i) => {
        const title = section.find('.event--title');
        const time = section.find('.event--time');
        const address = section.find('.event--address');
        const expectedAddressString = Object.values(events[i].address).join('');
        expect(title.text()).toBe(events[i].title);
        expect(time.text()).toBe(events[i].time);
        expect(address.text()).toBe(expectedAddressString);
      });
    });
  });
});
