import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './background-image.scss';

class BackgroundImage extends Component {
  static propTypes = {
    contentClassName: PropTypes.string,
    url: PropTypes.string.isRequired,
    placeholderUrl: PropTypes.string
  }

  state = {
    loading: true
  }

  componentDidMount() {
    this.loadImage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({
        loading: true
      }, this.loadImage());
    }
  }

  loadImage() {
    // TODO: check if we've previously loaded this url, only load once
    const image = new Image();
    const setBackgroundLoaded = () => this.setState({ loading: false });
    image.onload = setBackgroundLoaded.bind(this);
    image.src = this.props.url;
  }

  render() {
    const {
      className,
      placeholderUrl,
      url
    } = this.props;
    const { loading } = this.state;

    const imageUrl = loading ? placeholderUrl : url;

    return (
      <div className={`${className || ''} background-image`}>
        <div
          className='background-image__overlay'
          style={{
            backgroundImage: `url(${imageUrl})`,
            filter: loading ? 'blur(3px)' : 'none'
          }}
        ></div>

        <div className='background-image__content'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default BackgroundImage;
