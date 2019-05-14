
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generatePositionsArray(maxX, maxY, safeRadius, irregularity) {
  var positionsArray = [];
  var r, c;
  var rows;
  var columns;

  rows = Math.floor(maxY / safeRadius);
  columns = Math.floor(maxX / safeRadius);

  for (r = 1; r <= rows; r += 1) {
    for (c = 1; c <= columns; c += 1) {
      positionsArray.push({
        x: Math.round(maxX * c / columns) + getRandomInt(irregularity * -1, irregularity),
        y: Math.round(maxY * r / rows) + getRandomInt(irregularity * -1, irregularity)
      });
    }
  }

  return positionsArray;
}

export default function getRandomPosition(maxX, maxY, safeRadius, irregularity, removeTaken) {
  const array = generatePositionsArray(maxX, maxY, safeRadius, irregularity);

  var randomIndex;
  var coordinates;
  randomIndex = getRandomInt(0, array.length - 1);
  coordinates = array[randomIndex];
  if (removeTaken) {
    array.splice(randomIndex, 1);
  }
  return coordinates;
}
