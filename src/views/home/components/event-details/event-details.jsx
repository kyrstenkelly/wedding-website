import React, { Component } from 'react';
import './event-details.scss';

const eventDetails = [{
  title: 'Ceremony',
  time: '4pm',
  address: {
    line1: 'Sanborn County Park',
    line2: '16055 Sanborn Rd',
    line3: 'Saratoga, CA 95070'
  }
}, {
  title: 'Reception',
  time: '5 - 10pm',
  address: {
    line1: 'Saratoga Springs',
    line2: '22801 Big Basin Way',
    line3: 'Saratoga, CA 95070'
  }
}]

class EventDetails extends Component {
  render() {
    return (
      <div className='event-details'>
        <div className='event-details--content'>
          <div className='events'>
            {eventDetails.map(event =>
              <div className='event' key={event.title}>
                <h3 className='event--title'>{ event.title }</h3>
                <div className='event--time'>{ event.time }</div>
                <div className='event--address'>
                  { event.address.line1 }<br/>
                  { event.address.line2 }<br/>
                  { event.address.line3 }
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default EventDetails;
