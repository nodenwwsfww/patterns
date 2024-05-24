import { Point } from "../geometry/Point/Point";

export class PointFactory {
  static createPoint(x: number, y: number): Point {
    return new Point(x, y);
  }
  static fromString(pointString: string): Point {
    const [x, y] = pointString.split(',').map(Number);
    return this.createPoint(x, y);
  }
}