import _ from 'lodash';
import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './countdown.scss';

class Countdown extends Component {
  static propTypes = {
    date: PropTypes.object.isRequired
  }

  state = {
    countdown: {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentDidMount() {
    this.updateCountdown();
  }

  updateCountdown() {
    let {countdown} = this.state;
    const duration = moment.duration(this.props.date.diff(moment()));

    this.setState({countdown:
      _.mapValues(countdown, (_, key) => duration[key]())});
  }

  buildTextString(val, unit) {
    let unitText = unit;
    if (val === 1) {
      unitText = unitText.slice(0, unitText.length - 1);
    }
    return unitText;
  }

  filterCountdown() {
    const firstThreeVals = {};
    _.map(this.state.countdown, (val, key) => {
      const numVals = _.size(firstThreeVals);
      if (numVals < 3 && (val > 0 || (val === 0 && numVals > 0))) {
        firstThreeVals[key] = val;
      }
    });
    return firstThreeVals;
  }

  render() {
    const countdown = _.map(this.filterCountdown(), (val, key) => {
      return (
        <div className="unit" key={key}>
          <div className="unit-value">{val}</div>
          <div className="unit-label">{this.buildTextString(val, key)}</div>
        </div>
      );
    });

    return (
      <div className="countdown">
        {countdown}
      </div>
    );
  }
}

export default Countdown;
