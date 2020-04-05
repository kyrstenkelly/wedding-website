import React from 'react';
import moment from 'moment';
import Details from 'views/home/components/details/details';
import Gifts from 'views/home/components/gifts/gifts';
import Travel from 'views/home/components/travel/travel';
import RSVP from 'views/home/components/rsvp/rsvp';

import details from 'images/details.jpg';
import detailsCompressed from 'images/details-compressed.jpg';
import rsvp from '../images/rsvp.jpg';
import rsvpCompressed from '../images/rsvp-compressed.jpg';
// import story from '../images/story.jpg';
// import storyCompressed from '../images/story-compressed.jpg';
import travel from 'images/travel.jpg';
import travelCompressed from 'images/travel-compressed.jpg';

const WEDDING_DATE = moment('2020-10-10T06');

export default {
  WEDDING_DATE,
  WEDDING_DATE_FORMATTED: WEDDING_DATE.format('MMM D, YYYY'),
  PAGES: [{
    title: 'Details',
    key: 'details',
    backgroundImage: details,
    backgroundImageCompressed: detailsCompressed,
    component: <Details />
  // }, {
  //   title: 'Story',
  //   key: 'story',
  //   backgroundImage: story,
  //   backgroundImageCompressed: storyCompressed,
  // }, {
  //   title: 'Gallery',
  //   key: 'gallery',
  //   backgroundImage: details,
  //   backgroundImageCompressed: detailsCompressed
  }, {
    title: 'Travel',
    key: 'travel',
    backgroundImage: travel,
    backgroundImageCompressed: travelCompressed,
    component: <Travel />
  }, {
    title: 'Gifts',
    key: 'gifts',
    backgroundImage: travel,
    backgroundImageCompressed: travelCompressed,
    component: <Gifts />
  }, {
    title: 'RSVP',
    key: 'rsvp',
    backgroundImage: rsvp,
    backgroundImageCompressed: rsvpCompressed,
    component: <RSVP />
  }]
};
