import React, { Component } from 'react';
import Link from 'shared/components/link';
import './travel.scss';

const SJC_AIRPORT_LINK = 'https://www.google.com/maps/dir/Norman+Y.+Mineta+San+Jose+International+Airport+(SJC),+1701+Airport+Blvd,+San+Jose,+CA+95110/Saratoga+Springs+Events+%26+Weddings,+Big+Basin+Way,+Saratoga,+CA/@37.298684,-121.9812996,12z/data=!4m8!4m7!1m2!1m1!1s0x808fcbc3fab3c59b:0xbcfa443f6df67e3e!1m2!1m1!1s0x808e4b43b6696425:0x5eb7cbd719ad3eea!3e0';
const SFO_AIRPORT_LINK = 'https://www.google.com/maps/dir/San+Francisco+Airport+(SFO),+San+Francisco,+CA/Saratoga+Springs+Events+%26+Weddings,+Big+Basin+Way,+Saratoga,+CA/@37.4355891,-122.2161904,11z/data=!4m8!4m7!1m2!1m1!1s0x808f778c55555555:0xa4f25c571acded3f!1m2!1m1!1s0x808e4b43b6696425:0x5eb7cbd719ad3eea!3e0';
const GROUP_BOOKING_LINK = 'https://www.hyatt.com/shop/sjcjw?location=Wild%20Palms%20Hotel&checkinDate=2020-10-09&checkoutDate=2020-10-11&rooms=1&adults=1&kids=0&corp_id=G-OCT0';

class Travel extends Component {
  render() {
    return (
      <div className='travel'>
        <div className='section'>
          <div className='title-main'>Hotel</div>

          <p>
            We have a group block at Wild Palms Hotel. The group rate applies to Friday and Saturday nights.
          </p>

          <p>
            Wild Palms Hotel <br/>
            910 E Fremont Ave <br/>
            Sunnyvale, CA 94087
          </p>

          <p>
            <Link href={GROUP_BOOKING_LINK} label='Group Booking Link'/> 
          </p>
        </div>

        <div className='section'>
          <div className='title-main'>Airports</div>

          <p>
            <Link href={SJC_AIRPORT_LINK} label='San Jose Airport (SJC)'/><br/>
            San Jose is the closest airport to the hotel (~15-20 minutes) and to the venue. <br/><br/>
            <Link href={SFO_AIRPORT_LINK} label='San Fransisco Airport (SFO)'/> <br/>
            San Fransisco may have more flights or better prices, as it's the bigger airport, however it will be 30 - 45 minutes from the hotel (depending on traffic).
          </p>
        </div>
      </div>
    );
  }
}

export default Travel;
