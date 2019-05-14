import { curveLinearClosed } from 'd3';
import { line as d3Line } from 'd3-shape';

/**
 * Based on this star function:
 * https://bl.ocks.org/Lulkafe/77fbdf8bfdb443218121bcaf44609425
 */

export default class SixPointStar {
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

    const h = size / 2;
    const t = size / 3;
    const f = size / 4;

    const coordinates = [
      { x: 0, y: f },
      { x: t, y: f },
      { x: h, y: 0 },
      { x: 2 * t, y: f },
      { x: size, y: f },
      { x: h + t, y: h },
      { x: size, y: 3 * f },
      { x: 2 * t, y: 3 * f },
      { x: h, y: size },
      { x: t, y: 3 * f },
      { x: 0, y: 3 * f },
      { x: h - t, y: h }
    ];

    selection.append('path')
      .attr('d', line(coordinates))
      .style('fill', this.color);
  }
}
