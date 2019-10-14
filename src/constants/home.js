import moment from 'moment';
import details from '../images/details.jpg';
import detailsCompressed from '../images/details-compressed.jpg';
// import rsvp from '../images/rsvp.jpg';
// import rsvpCompressed from '../images/rsvp-compressed.jpg';
// import story from '../images/story.jpg';
// import storyCompressed from '../images/story-compressed.jpg';
import travel from '../images/travel.jpg';
import travelCompressed from '../images/travel-compressed.jpg';

const WEDDING_DATE = moment('2020-10-10T06');

export default {
  WEDDING_DATE,
  WEDDING_DATE_FORMATTED: WEDDING_DATE.format('MMM D, YYYY'),
  HEADER_LINKS: [{
    title: 'Details',
    key: 'details',
    backgroundImage: details,
    backgroundImageCompressed: detailsCompressed
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
    backgroundImageCompressed: travelCompressed
  // }, {
  //   title: 'Gifts',
  //   key: 'gifts',
  //   backgroundImage: travel,
  //   backgroundImageCompressed: travelCompressed
  // }, {
  //   title: 'RSVP',
  //   key: 'rsvp',
  //   backgroundImage: rsvp,
  //   backgroundImageCompressed: rsvpCompressed
  }]
};
