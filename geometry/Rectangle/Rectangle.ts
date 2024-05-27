import { Shape } from '../Shape/Shape';
import { Point } from '../Point/Point';

export class Rectangle extends Shape {
  constructor(id: string, points: Point[]) {
    super(id, 'Rectangle', points);
  }

  calculateArea(): number {
    const [a, b, c] = this.points;
    const width = a.distance(b);
    const height = b.distance(c);
    return width * height;
  }

  calculateVolume(): number {
    return 0; // Rectangles do not have volume
  }

  calculatePerimeter(): number {
    const [a, b, c] = this.points;
    const width = a.distance(b);
    const height = b.distance(c);
    return 2 * (width + height);
  }

  isRectangle(): boolean {
    if (this.points.length !== 4) return false;
    const [a, b, c, d] = this.points;
    return (
        !Point.areCollinear(a, b, c) &&
        !Point.areCollinear(b, c, d) &&
        !Point.areCollinear(c, d, a) &&
        !Point.areCollinear(d, a, b)
    );
  }

  isSquare(): boolean {
    if (!this.isRectangle()) return false;
    const [a, b, c] = this.points;
    const width = a.distance(b);
    const height = b.distance(c);
    return width === height;
  }

  isRhombus(): boolean {
    if (!this.isRectangle()) return false;
    const [a, b, c, d] = this.points;
    const side1 = a.distance(b);
    const side2 = b.distance(c);
    const side3 = c.distance(d);
    const side4 = d.distance(a);
    return side1 === side2 && side2 === side3 && side3 === side4 && !this.isSquare();
  }

  isTrapezoid(): boolean {
    return false; // Trapezoid logic implementation is out of scope for this example
  }

  isConvex(): boolean {
    return true; // A rectangle is always convex
  }
}
