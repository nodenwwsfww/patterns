import {Shape} from "../Shape/Shape";
import {Point} from "../Point/Point";

export class Rectangle extends Shape {
  constructor(id: string, points: Point[]) {
    super(id, points);
  }

  calculateArea(): number {
    const width = this.points[0].distance(this.points[1]);
    const height = this.points[1].distance(this.points[2]);
    return width * height;
  }

  calculatePerimeter(): number {
    const width = this.points[0].distance(this.points[1]);
    const height = this.points[1].distance(this.points[2]);
    return 2 * (width + height);
  }
}