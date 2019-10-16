class ImageService {
  loadedImages = {};

  /**
   * Loads the given url string and returns an image.
   * Caches loaded images so it will only load an image once.
   * 
   * @param {string} url 
   */
  loadImage(url) {
    return new Promise(resolve => {
      const loadedImage = this.loadedImages[url];
      if (loadedImage) {
        resolve(loadedImage);
      } else {
        const image = new Image();
        const imageLoaded = () => {
          this.loadedImages[url] = image;
          resolve();
        }
        image.onload = imageLoaded.bind(this);
        image.src = url;
      }
    });

  }
}

const imageService = new ImageService();
export default imageService;