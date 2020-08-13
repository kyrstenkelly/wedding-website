import moment from 'moment';

// Austin related constants
export const AUSTIN_WEDDING_DATE = moment('2020-10-10T06');
export const AUSTIN_URL_BASE = '/austin';
export const AUSTIN_MENU_LINKS = [{
  title: 'Gifts',
  url: `${AUSTIN_URL_BASE}/gifts`
}, {
  title: 'FAQ',
  url: `${AUSTIN_URL_BASE}/faq`
}];

// California related constants
export const CALI_WEDDING_DATE = moment('2021-10-09T06');
export const CALI_URL_BASE = '/california';
export const CALI_MENU_LINKS = [{
  title: 'Gifts',
  url: `${CALI_URL_BASE}/gifts`
}, {
  title: 'RSVP',
  url: `${CALI_URL_BASE}/rsvp`
}, {
  title: 'Travel',
  url: `${CALI_URL_BASE}/travel`
}, {
  title: 'FAQ',
  url: `${CALI_URL_BASE}/faq`
}];
