import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';
import Star from 'services/star-service';
import './stars.scss';

class Stars extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    numStars: PropTypes.number,
    minSize: PropTypes.number,
    maxSize: PropTypes.number
  }

  static defaultProps = {
    numStars: 20,
    minSize: 10,
    maxSize: 35,
    spacing: 18
  }

  getRandomInt(min, max, exclude) {
    min = Math.floor(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (random === exclude) {
      return this.getRandomInt(min, max, exclude);
    } else {
      return random;
    }
  }

  generateRandomStars() {
    const {
      height,
      width,
      minSize,
      maxSize,
      numStars
    } = this.props;

    const maxVerticalSpacing = 1.5 * (height - maxSize) / (numStars - 1);
    const leftLimit = width - maxSize;
    const topLimit = height - maxSize;
    const numColumns = Math.floor(width / maxSize);
    const columnWidth = width / numColumns;
    const numPoints = [4, 5, 6];
    const stars = [];

    for (let i = 1; i <= numStars; i++) {
      const previousStar = stars[stars.length - 1] || { top: 0, left: 0, size: 0, column: 0 };
      const size = this.getRandomInt(minSize, maxSize);
      const points = numPoints[this.getRandomInt(0, 2)];

      // Put star at least 1/2 star away from the previous star
      const topMax = Math.min(previousStar.top + maxVerticalSpacing, topLimit);
      const top = this.getRandomInt(previousStar.top + (previousStar.size / 2), topMax);

      // Make sure star doesn't end up in the same column as the previous star
      const column = this.getRandomInt(1, numColumns, previousStar.column);
      const leftMax = Math.min(leftLimit, column * columnWidth);
      const left = this.getRandomInt((column - 1) * columnWidth, leftMax);

      stars.push({ top, left, points, size, column });
    }

    return stars;
  }

  renderStar(points, size) {
    const yellowGradient = 'url(#yellowGradient)';
    const fivePointStar = new Star(size, yellowGradient, points);

    return (
      <g className="star" ref={node => fivePointStar.draw(select(node))} />
    );
  }

  renderSVGDefs() {
    return (
      <defs>
        <linearGradient id="yellowGradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop className="start" offset="0%" stopColor="#EBD488" stopOpacity="1"></stop>
          <stop className="end" offset="100%" stopColor="#D4AF37" stopOpacity="1"></stop>
        </linearGradient>
      </defs>
    );
  }

  render() {
    const { height, width } = this.props;
    const SVGDefs = this.renderSVGDefs();

    return (
      <div className='stars' style={{height, width}}>
        {
          this.generateRandomStars().map((s,i) => {
            return (
              <svg
                key={`star-${i}`}
                className='star'
                style={{
                  top: s.top,
                  left: s.left
                }}
                height={s.size}
                width={s.size}
              >
                {SVGDefs}
                {this.renderStar(s.points, s.size)}
              </svg>
            );
          })
        }
      </div>
    );
  }
}

export default Stars;
