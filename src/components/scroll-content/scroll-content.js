import React, { Component } from 'react';
import { Element } from 'react-scroll';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import content from '../../constants/content';
import './scroll-content.scss';

class ScrollContent extends Component {
  static propTypes = {
    setOffset: PropTypes.func.isRequired
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const node = ReactDOM.findDOMNode(this);
    if (node && node.offsetTop) {
      const offset = node.offsetTop - window.scrollY;
      this.props.setOffset(offset);
    }
  }

  renderTriangles() {
    return (
      <div className='triangles'>
        <div className='triangle triangle-left'/>
        <div className='triangle triangle-right'/>
      </div>
    );
  }

  render() {
    const triangles = this.renderTriangles();

    return (
      <div className='scroll-content'>
        {content.map((item, index) => {
          return (
            <Element name={item.key} className={`section section-${index}`}>
              {triangles}

              <div className='section-content'>
                <h1 className='section-header'>{item.title}</h1>

                <p className='section-body'>
                  {item.content}
                </p>
              </div>
            </Element>
          );
        })}
      </div>
    );
  }
}

export default ScrollContent;
