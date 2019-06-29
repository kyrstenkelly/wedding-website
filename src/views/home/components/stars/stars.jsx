import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';
import Star from 'services/star-service';
import { generateStars } from 'helpers/stars';
import { debounce, getRandomInt } from 'helpers/utils';
import './stars.scss';

const DEBOUNCE_TIMEOUT = 300;

class Stars extends Component {
  static propTypes = {
    minSize: PropTypes.number,
    maxSize: PropTypes.number
  }

  static defaultProps = {
    minSize: 10,
    maxSize: 35
  }

  state = {
    fadingIn: false,
    stars: [],
    height: 0,
    width: 0
  }

  componentDidMount() {
    this.onResize();

    window.addEventListener('resize', debounce(() => {
      this.onResize();
    }, DEBOUNCE_TIMEOUT));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    const node = ReactDOM.findDOMNode(this);

    this.setState({
      height: node.scrollHeight,
      width: node.scrollWidth,
      fadingIn: false,
      stars: []
    }, () => this.generateStars());
  }

  generateStars() {
    const stars = generateStars({
      height: this.state.height,
      width: this.state.width
    });
    this.setState({ stars }, () => this.initializeFadeIn());
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

      const timeoutInterval = getRandomInt(80, 200);
      setTimeout(() => {
        this.fadeIn(currentIndex + 1)
      }, timeoutInterval);
    }
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
      <g ref={node => fivePointStar.draw(select(node))} />
    );
  }

  render() {
    const { stars } = this.state;
    const SVGDefs = this.renderSVGDefs();

    return (
      <div className='stars'>
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
