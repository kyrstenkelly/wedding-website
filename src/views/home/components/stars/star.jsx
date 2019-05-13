import React, { Component } from 'react';
import PropTypes from 'prop-types';
import d3Star from './d3-star';
import { select } from 'd3-selection';

class Star extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }

  render() {
    const h = 300;
    const w = 800;
    const l = 50;
    const star = new d3Star();

    star.x(240).y(100).size(l)
      .starColor('url(#svgGradient)');

    return (
      <div className='star'>
        <svg height={h} width={w}>
          <defs>
            <linearGradient id="svgGradient" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop class="start" offset="0%" stop-color="#E5C86A" stop-opacity="1"></stop>
              <stop class="end" offset="100%" stop-color="#ffffff" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <g
            className="star"
            ref={node => select(node).call(star)}
          />
        </svg>
      </div>
    );
  }
}

export default Star;
