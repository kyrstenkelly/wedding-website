import { getRandomInt } from './utils';
import {
  COLUMN_STAR_POSITIONS,
  ROW_STAR_POSITIONS
} from 'constants/stars';


export const generateStars = ({
  height,
  width
}) => {
  const column = height > width;
  let stars = column ? COLUMN_STAR_POSITIONS : ROW_STAR_POSITIONS;

  // Hide some of the stars in smaller containers
  if ((!column && height <= 150) || (column && width < 200)) {
    const mod = Math.ceil(stars.length / 4);
    stars = stars.filter((s, i) => {
      return (i + 1) % mod !== 0;
    });
  }

  return stars.map(s => {
    return {
      ...s,
      rotation: getRandomInt(0, 360),
      opacity: 0
    };
  });
};
