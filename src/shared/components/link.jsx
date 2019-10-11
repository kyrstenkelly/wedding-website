import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => {
  const { href, label } = props;
  const target = props.target || '_blank';

  return (
    <a 
      rel='noopener noreferrer'
      className='link'
      target={target}
      href={href}
    >
      {label}
    </a>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Link;