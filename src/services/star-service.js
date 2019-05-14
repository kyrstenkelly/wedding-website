import { curveLinearClosed } from 'd3';
import { line as d3Line } from 'd3-shape';

/** Helper Functions */
const rad = (deg) => deg * Math.PI / 180;
const cos = (deg) => Math.cos(rad(deg));
const sin = (deg) => Math.sin(rad(deg));
const tan  = (deg) => Math.tan(rad(deg));

/**
 * Given a (d3) selection, appends a path
 * with the shape of a star
 *
 * Ex:
 * const size = 20;
 * const star = new Star(size, 'yellow', 5);
 *
 * <svg height={size} width={size}>
 *   <g className="star" ref={node => star.draw(select(node))} />
 * </svg>
 */

 export default class Star {
  constructor(size, color, points = 5) {
    this.size = size;
    this.color = color;
    this.points = points;
  }

  generate4PointCoordinates() {
    const { size } = this;

    this.coordinates = [
      { x: 0, y: size / 2 },
      { x: size / 3, y: size / 3 },
      { x: size / 2, y: 0 },
      { x: (2 * size) / 3, y: size / 3 },
      { x: size, y: size / 2 },
      { x: (2 * size) / 3, y: (2 * size) / 3 },
      { x: size / 2, y: size },
      { x: size / 3, y: (2 * size) / 3 }
    ];
  }

  generate5PointCoordinates() {
    const { size } = this;
    const h = size / 2;
    const j = h * tan(36);
    const k = j / sin(72);

    const x = 0;
    const y = this.size / 3;

    this.coordinates = [
      { x: x, y: y },
      { x: x + k, y: y },
      { x: x + h, y: y - j },
      { x: x + size - k, y: y },
      { x: x + size, y: y },
      { x: x + size - k * cos(36), y: y + k * sin(36) },
      { x: x + size * cos(36), y: y + size * sin(36) },
      { x: x + h, y: y + j },
      { x: x + size - size * cos(36), y: y + size * sin(36) },
      { x: x + k * cos(36), y: y + k * sin(36) }
    ];
  }

  generate6PointCoordinates() {
    const { size } = this;
    const h = size / 2;
    const t = size / 3;
    const f = size / 4;

    this.coordinates = [
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
  }

  draw(selection) {
    switch(this.points) {
      case 4:
        this.generate4PointCoordinates();
        break;
      case 5:
        this.generate5PointCoordinates();
        break;
      case 6:
        this.generate6PointCoordinates();
        break;
      default:
        throw new Error('Only 4, 5, and 6 point stars are supported.');
    }

    const line = d3Line()
      .x(d => d.x)
      .y(d => d.y)
      .curve(curveLinearClosed);

    selection.append('path')
      .attr('d', line(this.coordinates))
      .style('fill', this.color);
  }
}
