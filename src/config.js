
const dev = {
  BASE_URL: 'http://localhost:3000',
  RSVP_API_URL: 'http://localhost:8000'
};

const prod = {
  BASE_URL: 'http://jamesandkyrsten.com',
  RSVP_API_URL: ''
};

let config = dev;
if (process.env.NODE_ENV === 'production') {
  config = prod;
}

export default config;
