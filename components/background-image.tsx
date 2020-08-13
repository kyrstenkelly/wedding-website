import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './background-image.module.scss';

const loadedImages: { [key: string]: HTMLImageElement; } = {};

interface BackgroundImageProps {
  className?: string;
  children: React.ReactNode[];
  url: string;
  placeholderUrl: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  className,
  children,
  placeholderUrl,
  url
}: BackgroundImageProps): React.ReactElement => {
  const [loading, setLoading] = useState(true);

  const loadImage = (url: string): Promise<HTMLImageElement> => {
    return new Promise(resolve => {
      const loadedImage = loadedImages[url];
      if (loadedImage) {
        resolve(loadedImage);
      } else {
        const image = new Image();
        const imageLoaded = () => {
          loadedImages[url] = image;
          resolve();
        }
        image.onload = () => imageLoaded();
        image.src = url;
      }
    });
  }

  useEffect((): void => {
    loadImage(url).then(() => setLoading(false));
  }, []);

  return (
    <div className={classNames(styles.background_image, className)}>
      <div
        className={styles.background_image__overlay}
        style={{
          backgroundImage: `url(${loading ? placeholderUrl : url})`,
          filter: loading ? 'blur(3px)' : 'none'
        }}
      ></div>

      <div className={styles.background_image__content}>
        {children}
      </div>
    </div>
  );
}

export default BackgroundImage;

