/**
 * Utility functions
 */

export const debounce = (fn, delay) => {
  let timeoutId;
  return function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      fn(...args);
      timeoutId = null;
    }, delay);
  }
}

export const getRandomInt = (min, max, exclude) => {
  min = Math.floor(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  if (random === exclude && exclude !== min && exclude !== max) {
    return getRandomInt(min, max, exclude);
  } else {
    return random;
  }
}
