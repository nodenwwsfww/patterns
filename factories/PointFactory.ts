import { Point } from '../geometry/Point/Point';

export class PointFactory {
  static create(x: number, y: number, z: number = 0): Point {
    return new Point(x, y, z);
  }

  static fromString(pointStr: string): Point {
    const [x, y, z = 0] = pointStr.split(',').map(Number);
    return PointFactory.create(x, y, z);
  }
}
