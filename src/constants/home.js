import details from '../images/details.jpg';
import rsvp from '../images/rsvp.jpg';
import story from '../images/story.jpg';
import travel from '../images/travel.jpg';

export default {
  WEDDING_DATE: '2020-10-10T06',
  HEADER_LINKS: [{
    title: 'Details',
    key: 'details',
    backgroundImage: details
  }, {
    title: 'Story',
    key: 'story',
    backgroundImage: story,
    backgroundPosition: 'top'
  }, {
    title: 'Gallery',
    key: 'gallery',
    backgroundImage: details
  }, {
    title: 'Travel',
    key: 'travel',
    backgroundImage: details
  }, {
    title: 'Gifts',
    key: 'gifts',
    backgroundImage: travel
  }, {
    title: 'RSVP',
    key: 'rsvp',
    backgroundImage: rsvp,
    backgroundPosition: 'center'
  }],
  BREAKPOINTS: {
    xs: 320,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1200
  },
  STAR_WIDTH_MAPPING: {
    xs: 0,
    sm: 100,
    md: 100,
    lg: 200,
    xl: 250
  }
};
