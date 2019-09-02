import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './details.scss';

class Details extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      address: PropTypes.shape({
        line1: PropTypes.string.isRequired,
        line2: PropTypes.string.isRequired,
        line3: PropTypes.string.isRequired
      }).isRequired
    }))
  }

  renderEvent(event) {
    return (
      <div className='event' key={event.title}>
        {event.title && <h3 className='event--title'>{ event.title }</h3>}
        {event.time && <div className='event--time'>{ event.time }</div>}
        <p>
          { event.address.line1 }<br/>
          { event.address.line2 }
          {event.address.line3 &&
            <div>{ event.address.line3 }</div>
          }
        </p>
      </div>
    );
  }

  render() {
    const { events } = this.props;
    const redwoodEvents = events.filter(e => e.place === 'redwoods');
    const austinEvents = events.filter(e => e.place === 'austin');
    return (
      <div className='details'>
        <div className='details--section'>
          <div className='title-main'>Redwoods Gathering</div>
          <p>
            Small ceremony with family and a handful of close friends.
          </p>
          <div className='events'>
            { redwoodEvents.map(e => this.renderEvent(e)) }
          </div>

        </div>

        <div className='details--section'>
          <div className='title-main'>Austin Gathering</div>
          <p>
            Party for all of our friends!
          </p>

          <div className='events'>
            { austinEvents.map(e => this.renderEvent(e)) }
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
