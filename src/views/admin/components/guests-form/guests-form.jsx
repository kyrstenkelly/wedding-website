import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Fab,
  FormGroup,
  InputAdornment,
  IconButton,
  TextField,
} from '@material-ui/core';
import { Add, Close } from '@material-ui/icons';

const defaultGuests = [{ name: '' }];

const GuestsForm = ({ guests: initialGuests, onChange }) => {
  const [guests, setGuests] = useState(initialGuests && initialGuests.length ? initialGuests : defaultGuests);

  const addGuest = () => {
    setGuests([...guests, { name: '' }]);
  };

  const updateGuest = (index, value) => {
    setGuests(guests.map((g, i) => {
      if (i !== index) return g;
      return {
        ...g,
        name: value
      };
    }));
  };

  const removeGuest = (index) => {
    setGuests(guests.filter((g, i) => {
      return i !== index;
    }));
  };

  useEffect(() => {
    onChange(guests);
  }, [guests]);

  return (
    <FormGroup>
      <h4>Guests</h4>

      {guests.map((guest, i) => (
        <TextField
          key={i}
          className='text-field form-field'
          margin='dense'
          value={guest.name}
          onChange={(e) => updateGuest(i, e.target.value)}
          InputProps={{ endAdornment:
            <InputAdornment position='end'>
              <IconButton
                aria-label='Delete Guest'
                onClick={() => removeGuest(i)}
              >
                <Close />
              </IconButton>
            </InputAdornment>
          }}
        />
      ))}

      <br/>

      <Fab
        aria-label='Add Guest'
        className='add-button'
        color='primary'
        size='small'
        onClick={addGuest}
      >
        <Add />
      </Fab>

    </FormGroup>
  )
}

GuestsForm.propTypes = {
  guests: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ),
  onChange: PropTypes.func
};

export default GuestsForm;
