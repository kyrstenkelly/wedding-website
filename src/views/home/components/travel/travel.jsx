import React, { Component } from 'react';
import Link from 'shared/components/link';
import './travel.scss';

const SJC_AIRPORT_LINK = 'https://www.google.com/maps/dir/Norman+Y.+Mineta+San+Jose+International+Airport+(SJC),+1701+Airport+Blvd,+San+Jose,+CA+95110/Saratoga+Springs+Events+%26+Weddings,+Big+Basin+Way,+Saratoga,+CA/@37.298684,-121.9812996,12z/data=!4m8!4m7!1m2!1m1!1s0x808fcbc3fab3c59b:0xbcfa443f6df67e3e!1m2!1m1!1s0x808e4b43b6696425:0x5eb7cbd719ad3eea!3e0';
const SFO_AIRPORT_LINK = 'https://www.google.com/maps/dir/San+Francisco+Airport+(SFO),+San+Francisco,+CA/Saratoga+Springs+Events+%26+Weddings,+Big+Basin+Way,+Saratoga,+CA/@37.4355891,-122.2161904,11z/data=!4m8!4m7!1m2!1m1!1s0x808f778c55555555:0xa4f25c571acded3f!1m2!1m1!1s0x808e4b43b6696425:0x5eb7cbd719ad3eea!3e0';

class Travel extends Component {
  render() {
    return (
      <div className='travel'>
        <div className='section'>
          <div className='title-main'>Airports</div>

          <p>
            The closest airport to the venue is <Link href={SJC_AIRPORT_LINK} label='San Jose Airport (SJC)'/>,<br/>
            and <Link href={SFO_AIRPORT_LINK} label='San Fransisco Airport (SFO)'/> is the next closest.
          </p>
        </div>

        <div className='section'>
          <div className='title-main'>Hotels</div>

          <p>
            We will arrange a block of hotels rooms somewhere nearby. Check back soon for more details. 
          </p>
        </div>
      </div>
    );
  }
}

export default Travel;
