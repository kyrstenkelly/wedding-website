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

  render() {
    return (
      <div className='details'>
        <div className='details--content'>
          <div className='events'>
            {this.props.events.map(event =>
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

export default Details;
