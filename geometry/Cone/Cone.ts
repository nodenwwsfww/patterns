import { Shape } from '../Shape/Shape';
import { Point } from '../Point/Point';

export class Cone extends Shape {
  private readonly _height: number;
  private readonly _radius: number;

  constructor(id: string, points: Point[]) {
    super(id, 'Cone', points);
    this._radius = points[1].distance(points[2]);  // Distance from the center of the base to the edge of the base
    this._height = points[0].distance(points[1]);  // Distance from the apex to the center of the base
  }

  calculateArea(): number {
    const slantHeight = Math.sqrt(Math.pow(this._height, 2) + Math.pow(this._radius, 2));
    return Math.PI * this._radius * (this._radius + slantHeight);
  }

  calculateVolume(): number {
    return (1 / 3) * Math.PI * Math.pow(this._radius, 2) * this._height;
  }

  isBaseOnCoordinatePlane(): boolean {
    const baseCenter = this.points[1];
    return baseCenter.z === 0 || baseCenter.y === 0 || baseCenter.x === 0;
  }

  isCone(): boolean {
    return this.points.length === 3 && this._height > 0 && this._radius > 0;
  }

  calculatePerimeter(): number {
    return 0;
  }
}
