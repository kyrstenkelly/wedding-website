import React from 'react';
import constants from 'constants/home';
import './austin.scss';

const Austin = () => {
  return (
    <div className='austin'>
      <div className='section'>
        <div className='title-main center'>Backyard Details</div>

        <div className='event'>
          <h3 className='event--title'>
            {constants.WEDDING_DATE_FORMATTED}<br/>
            5pm - whenever
          </h3>

          <p>
            9001 Ovalla Drive<br/>
            Austin, TX 78749
          </p>

          <p>
            <span role='img' aria-label='dancer'>💃🏻</span> Ceremony will followed by dinner and dancing<br/><br/>
            <span role='img' aria-label='dress'>👗</span> Dress code: as casual or fancy as you'd like to be<br/><br/>
            <span role='img' aria-label='beer'>🍺</span> There will be wine and beer, but it's also BYOB <br/><br/>

            <h3>COVID Info</h3>
            We're getting enough tables and chairs that people can separate into their "germ pods" 6 ft apart. We may ask people to wear masks when &lt; 6 ft (like when dancing), depending on what's happening with case counts and how cautious everyone has been. However, we'll assess what we need to do about safety closer to, and will send out more details about that.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Austin;
