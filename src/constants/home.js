import details from '../images/details.jpg';
import detailsCompressed from '../images/details-compressed.jpg';
// import rsvp from '../images/rsvp.jpg';
// import rsvpCompressed from '../images/rsvp-compressed.jpg';
// import story from '../images/story.jpg';
// import storyCompressed from '../images/story-compressed.jpg';
import travel from '../images/travel.jpg';
import travelCompressed from '../images/travel-compressed.jpg';

export default {
  WEDDING_DATE: '2020-10-10T06',
  // TODO: Get events from backend
  EVENTS: [{
    title: 'Ceremony',
    time: '4pm',
    place: 'redwoods',
    address: {
      line1: 'Sanborn County Park',
      line2: '16055 Sanborn Rd',
      line3: 'Saratoga, CA 95070'
    }
  }, {
    title: 'Reception',
    time: '5 - 10pm',
    place: 'redwoods',
    address: {
      line1: 'Saratoga Springs',
      line2: '22801 Big Basin Way',
      line3: 'Saratoga, CA 95070'
    }
  }, {
    time: '7pm - 11pm',
    place: 'austin',
    address: {
      line1: 'Some Cool Venue',
      line2: '123 To Be Determined'
    }
  }],
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
