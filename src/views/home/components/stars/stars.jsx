import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';
import Star from 'services/star-service';
import './stars.scss';

// TODO: Make 6 pointed stars look better
const supportedStarTypes = [4, 5 /*, 6 */];

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
    maxSize: 35
  }

  state = {
    fadingIn: false,
    stars: []
  }

  componentWillMount() {
    this.generateStars();
  }

  componentWillReceiveProps(newProps) {
    const newHeight = newProps.height !== this.props.height;
    const newWidth = newProps.width !== this.props.width;

    // Stop and redraw stars if the height or width of the canvas changes
    if (newHeight || newWidth) {
      this.setState({
        fadingIn: false,
        stars: []
      }, () => this.generateStars());
    }
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

  initializeFadeIn() {
    let { fadingIn } = this.state;
    if (!fadingIn) {
      this.setState({ fadingIn: true });
      this.fadeIn(0);
    }
  }

  /**
   * Recursive function that progressively
   * fades in stars at different intervals
   */
  fadeIn(currentIndex) {
    const { stars } = this.state;
    if (currentIndex === stars.length) {
      return;
    } else {
      stars[currentIndex].opacity = 1;
      this.setState({ stars });

      const timeoutInterval = this.getRandomInt(80, 200);
      setTimeout(() => {
        this.fadeIn(currentIndex + 1)
      }, timeoutInterval);
    }
  }

  generateStars() {
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
    const stars = [];

    for (let i = 1; i <= numStars; i++) {
      const size = this.getRandomInt(minSize, maxSize);
      const rotation = this.getRandomInt(0, 360);
      const previousStar = stars[stars.length - 1] || { top: 0, left: 0, size: 0, column: 0 };
      const points = supportedStarTypes[this.getRandomInt(0, supportedStarTypes.length - 1)];

      // Put star at least 1/2 star away from the previous star
      const topMax = Math.min(previousStar.top + maxVerticalSpacing, topLimit);
      const top = this.getRandomInt(previousStar.top + (previousStar.size / 2), topMax);

      // Make sure star doesn't end up in the same column as the previous star
      const column = this.getRandomInt(1, numColumns, previousStar.column);
      const leftMax = Math.min(leftLimit, column * columnWidth);
      const left = this.getRandomInt((column - 1) * columnWidth, leftMax);

      stars.push({
        top,
        left,
        points,
        size,
        column,
        rotation,
        opacity: 0
      });
    }

    this.setState({ stars }, () => this.initializeFadeIn());
  }

  renderSVGDefs() {
    return (
      <defs>
        <linearGradient id='yellowGradient' x1='0%' x2='100%' y1='0%' y2='100%'>
          <stop className='start' offset='0%' stopColor='#EBD488' stopOpacity='1'></stop>
          <stop className='end' offset='100%' stopColor='#D4AF37' stopOpacity='1'></stop>
        </linearGradient>
      </defs>
    );
  }

  renderStar(points, size) {
    const yellowGradient = 'url(#yellowGradient)';
    const fivePointStar = new Star(size, yellowGradient, points);

    return (
      <g className='star' ref={node => fivePointStar.draw(select(node))} />
    );
  }

  render() {
    const { stars } = this.state;
    const { height, width } = this.props;
    const SVGDefs = this.renderSVGDefs();

    return (
      <div className='stars' style={{ height, width }}>
        {
          stars.map((s,i) => {
            return (
              <svg
                key={`star-${i}`}
                className='star'
                style={{
                  top: s.top,
                  left: s.left,
                  opacity: s.opacity,
                  transform: `rotate(${s.rotation}deg)`
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
