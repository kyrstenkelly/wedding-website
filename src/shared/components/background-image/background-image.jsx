import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imageService from 'services/image-service';
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
    imageService.loadImage(this.props.url).then(() => this.setState({
      loading: false
    }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({
        loading: true
      }, () => {
        imageService.loadImage(this.props.url)
          .then(this.setState({ loading: false }));
      });
    }
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
