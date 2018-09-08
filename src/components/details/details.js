import React, { Component } from 'react';
import { Element } from 'react-scroll';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './details.scss';

class Details extends Component {
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
      <div className='details'>
        <Element name="details" className="section section-1">
          {triangles}

          <div className='section-content'>
            <h1 className='section-header'>Details</h1>

            <p className='section-body'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque cursus tortor, commodo cursus diam placerat vel. Fusce porta nulla sed felis pellentesque, id vestibulum mi mollis. Fusce dignissim lorem nec scelerisque hendrerit. Cras rutrum pharetra dolor vel feugiat. Vivamus eleifend posuere ultrices. Etiam consequat odio a aliquet iaculis. In hac habitasse platea dictumst. Maecenas sed luctus est. Duis bibendum urna a tristique volutpat.

              Aliquam elementum vitae elit nec fringilla. Duis rhoncus odio enim, sed dignissim tellus varius iaculis. Aenean suscipit posuere rhoncus. Duis in nisi a nulla gravida aliquam ac viverra magna. Aenean pharetra tincidunt aliquet. Vestibulum tincidunt a tellus a pellentesque. Nam in bibendum velit.

              Etiam consequat posuere mi vel sodales. Morbi blandit nibh tellus, ac vulputate ipsum posuere nec. Quisque feugiat erat vitae urna imperdiet ultricies. Quisque tempor nisi at quam egestas, non ullamcorper ante faucibus. Aenean pretium mauris sed massa faucibus posuere. Praesent scelerisque lorem odio, id aliquet leo egestas in. Nam sed lectus commodo, sollicitudin ex nec, mollis massa. Maecenas varius ut ex id aliquet. Pellentesque ac sodales purus. Donec vel tortor est. Sed rhoncus ante sodales tellus gravida tincidunt. Nulla pulvinar nisi orci.
            </p>
          </div>
        </Element>

        <Element name="rsvp" className="section section-2">
          {triangles}

          <div className='section-content'>
            <h1 className='section-header'>RSVP</h1>

            <p className='section-body'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque cursus tortor, commodo cursus diam placerat vel. Fusce porta nulla sed felis pellentesque, id vestibulum mi mollis. Fusce dignissim lorem nec scelerisque hendrerit. Cras rutrum pharetra dolor vel feugiat. Vivamus eleifend posuere ultrices. Etiam consequat odio a aliquet iaculis. In hac habitasse platea dictumst. Maecenas sed luctus est. Duis bibendum urna a tristique volutpat.

              Aliquam elementum vitae elit nec fringilla. Duis rhoncus odio enim, sed dignissim tellus varius iaculis. Aenean suscipit posuere rhoncus. Duis in nisi a nulla gravida aliquam ac viverra magna. Aenean pharetra tincidunt aliquet. Vestibulum tincidunt a tellus a pellentesque. Nam in bibendum velit.

              Etiam consequat posuere mi vel sodales. Morbi blandit nibh tellus, ac vulputate ipsum posuere nec. Quisque feugiat erat vitae urna imperdiet ultricies. Quisque tempor nisi at quam egestas, non ullamcorper ante faucibus. Aenean pretium mauris sed massa faucibus posuere. Praesent scelerisque lorem odio, id aliquet leo egestas in. Nam sed lectus commodo, sollicitudin ex nec, mollis massa. Maecenas varius ut ex id aliquet. Pellentesque ac sodales purus. Donec vel tortor est. Sed rhoncus ante sodales tellus gravida tincidunt. Nulla pulvinar nisi orci.
            </p>
          </div>
        </Element>

        <Element name='about-us' className='section section-3'>
          {triangles}

          <div className='section-content'>
            <h1 className='section-header'>About Us</h1>

            <p className='section-body'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque cursus tortor, commodo cursus diam placerat vel. Fusce porta nulla sed felis pellentesque, id vestibulum mi mollis. Fusce dignissim lorem nec scelerisque hendrerit. Cras rutrum pharetra dolor vel feugiat. Vivamus eleifend posuere ultrices. Etiam consequat odio a aliquet iaculis. In hac habitasse platea dictumst. Maecenas sed luctus est. Duis bibendum urna a tristique volutpat.

              Aliquam elementum vitae elit nec fringilla. Duis rhoncus odio enim, sed dignissim tellus varius iaculis. Aenean suscipit posuere rhoncus. Duis in nisi a nulla gravida aliquam ac viverra magna. Aenean pharetra tincidunt aliquet. Vestibulum tincidunt a tellus a pellentesque. Nam in bibendum velit.

              Etiam consequat posuere mi vel sodales. Morbi blandit nibh tellus, ac vulputate ipsum posuere nec. Quisque feugiat erat vitae urna imperdiet ultricies. Quisque tempor nisi at quam egestas, non ullamcorper ante faucibus. Aenean pretium mauris sed massa faucibus posuere. Praesent scelerisque lorem odio, id aliquet leo egestas in. Nam sed lectus commodo, sollicitudin ex nec, mollis massa. Maecenas varius ut ex id aliquet. Pellentesque ac sodales purus. Donec vel tortor est. Sed rhoncus ante sodales tellus gravida tincidunt. Nulla pulvinar nisi orci.
            </p>
          </div>
        </Element>
      </div>
    );
  }
}

export default Details;
