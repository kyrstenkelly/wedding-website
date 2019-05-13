import { curveLinearClosed } from 'd3';
import { line as d3Line } from 'd3-shape';

/**
 * Got this super helpful function from:
 * https://bl.ocks.org/Lulkafe/77fbdf8bfdb443218121bcaf44609425
 */

export default function d3Star () {
  let size = 20;
  let x = 0;
  let y = 0;
  let starColor = '#ffffff';

  function star(selection) {
    const line = d3Line()
      .x(function(d){ return d.x; })
      .y(function(d){ return d.y; })
      .curve(curveLinearClosed);
    const rad = function (deg) { return deg * Math.PI/180;};
    const cos = function (deg) { return Math.cos(rad(deg)); };
    const sin = function (deg) { return Math.sin(rad(deg)); };
    const tan  = function (deg) { return Math.tan(rad(deg));};
    const n = size;
    const m = n / 2;
    const h = m * tan(36);
    const k = h / sin(72);

    // (x, y) points at the leftmost point of the star, not the center
    const coordinates = [
        { x: x, y: y },
        { x: x + k, y: y },
        { x: x + m, y: y - h },
        { x: x + n - k, y: y },
        { x: x + n, y: y },
        { x: x + n - k * cos(36), y: y + k * sin(36) },
        { x: x + n * cos(36), y: y + n * sin(36) },
        { x: x + m, y: y + h },
        { x: x + n - n * cos(36),y: y + n * sin(36) },
        { x: x + k * cos(36), y: y + k * sin(36) },
    ];

    selection.append('path')
      .attr('d', line(coordinates))
      .style('fill', starColor)
      .style('stroke-width', 0);
  }

  star.x = function (val) {
    x = val;
    return star;
  }

  star.y = function (val) {
    y = val;
    return star;
  }

  star.size = function (val) {
    size = val;
    return star;
  }

  star.starColor = function (val) {
    starColor = val;
    return star;
  }

  return star;
}
