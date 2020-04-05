import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';

const Footer = ({ theme }) => {
  const className = `footer ${theme}`;

  return (
    <div className={className}>
      <div className='contain'>
        Made with love <span role='img' aria-label='heart'> ❤️</span>
        by Kyrsten Kelly &copy; 2019
      </div>
    </div>
  );
}

Footer.propTypes = {
  theme: PropTypes.string
};

Footer.defaultProps = {
  theme: 'light'
};

export default Footer;
