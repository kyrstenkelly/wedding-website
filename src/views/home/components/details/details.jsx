import React from 'react';
import constants from 'constants/home';
import './details.scss';

const Details = () => {
  return (
    <div className='details'>
      <div className='section'>
        <div className='title-main center'>Details</div>

        <div className='event'>
          <h3 className='event--title'>
            {constants.WEDDING_DATE_FORMATTED}<br/>
            5pm - 10pm
          </h3>

          <p>
            Saratoga Springs Events <br/>
            22801 Big Basin Way <br/>
            Saratoga, CA 95070
          </p>

          <p>
            Ceremony with a reception to follow. <br/>
            Dinner will be served.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
