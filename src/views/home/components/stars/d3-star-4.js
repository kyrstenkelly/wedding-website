import { curveLinearClosed } from 'd3';
import { line as d3Line } from 'd3-shape';

/**
 * Based on this star function:
 * https://bl.ocks.org/Lulkafe/77fbdf8bfdb443218121bcaf44609425
 */

export default class FourPointStar {
  constructor(size, color) {
    this.size = size;
    this.color = color;
  }

  draw(selection) {
    const { size } = this;

    const line = d3Line()
      .x(d => d.x)
      .y(d => d.y)
      .curve(curveLinearClosed);

    const coordinates = [{
      x: 0,
      y: size / 2
    }, {
      x: size / 3,
      y: size / 3
    }, {
      x: size / 2,
      y: 0
    }, {
      x: (2 * size) / 3,
      y: size / 3
    }, {
      x: size,
      y: size / 2
    }, {
      x: (2 * size) / 3,
      y: (2 * size) / 3
    }, {
      x: size / 2,
      y: size
    }, {
      x: size / 3,
      y: (2 * size) / 3
    }];

    selection.append('path')
      .attr('d', line(coordinates))
      .style('fill', this.color);
  }
}
