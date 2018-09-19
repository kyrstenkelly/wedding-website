
const dev = {
  baseURL: 'http://localhost:3000'
};

const prod = {
  baseURL: 'http://jamesandkyrsten.com'
};

let config = dev;
if (process.env.NODE_ENV === 'production') {
  config = prod;
}

export default config;
