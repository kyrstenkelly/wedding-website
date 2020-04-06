import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
  CircularProgress,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core';
import rsvpService from 'services/rsvp-service';

const EventsForm = ({ events: initialEvents, onChange }) => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    rsvpService.getEvents()
      .then(eventList => {
        setEvents(eventList.map(event => ({
          ...event,
          checked: initialEvents.some(e => e.name === event.name)
        })));
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    onChange(events.filter(e => e.checked));
  }, [events]);

  const eventsChange = event => {
    const { checked, value } = event.target;

    setEvents(events.map(e => {
      if (e.name !== value) return e;
      return { ...e, checked };
    }));
  }

  return (
    <FormGroup>
      <h4>Events</h4>

      {loading ?
        <CircularProgress/>
        :
        events.map(event =>
          <FormControlLabel
            key={event.id}
            control={
              <Checkbox
                checked={event.checked}
                onChange={eventsChange}
                value={event.name}
              />
            }
            label={event.name}
          />
        )
      }
    </FormGroup>
  )
}

EventsForm.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired
};

export default EventsForm;
