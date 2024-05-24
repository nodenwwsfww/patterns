import type {Point} from "../Point/Point";
import {Shape} from "../Shape/Shape";

export class Cone extends Shape {
  private readonly _height: number;

  constructor(id: string, points: Point[]) {
    super(id, points);
    this._height = points[0].distance(points[1]);
  }

  calculateArea(): number {
    const radius = this.points[0].distance(this.points[1]);
    return Math.PI * radius * (radius + Math.sqrt(Math.pow(this._height, 2) + Math.pow(radius, 2)));
  }

  calculateVolume(): number {
    const radius = this.points[0].distance(this.points[1]);
    return (1 / 3) * Math.PI * Math.pow(radius, 2) * this._height;
  }
}