import { curveLinearClosed } from 'd3';
import { line as d3Line } from 'd3-shape';

/**
 * Based on this star function:
 * https://bl.ocks.org/Lulkafe/77fbdf8bfdb443218121bcaf44609425
 */

export default class FivePointStar {
  constructor(size, color) {
    this.size = size;
    // (x, y) points at the leftmost point of the star
    this.x = 0;
    this.y = size / 3;
    this.color = color;
  }

  draw(selection) {
    const { x, y, size } = this;
    const points = 5;
    const degrees = 180 / points;
    const line = d3Line()
      .x(d => d.x)
      .y(d => d.y)
      .curve(curveLinearClosed);

    const rad = (deg) => deg * Math.PI / 180;
    const cos = (deg) => Math.cos(rad(deg));
    const sin = (deg) => Math.sin(rad(deg));
    const tan  = (deg) => Math.tan(rad(deg));
    const n = size;
    const m = n / 2;
    const h = m * tan(degrees);
    const k = h / sin(degrees * 2);

    const coordinates = [{
      x: x,
      y: y
    }, {
      x: x + k,
      y: y
    }, {
      x: x + m,
      y: y - h
    }, {
      x: x + n - k,
      y: y
    }, {
      x: x + n,
      y: y
    }, {
      x: x + n - k * cos(degrees),
      y: y + k * sin(degrees)
    }, {
      x: x + n * cos(degrees),
      y: y + n * sin(degrees)
    }, {
      x: x + m,
      y: y + h
    }, {
      x: x + n - n * cos(degrees),
      y: y + n * sin(degrees)
    }, {
      x: x + k * cos(degrees),
      y: y + k * sin(degrees)
    }];

    selection.append('path')
      .attr('d', line(coordinates))
      .style('fill', this.color);
  }
}
