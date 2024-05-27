import { ShapeValidator } from './ShapeValidator';
import {PointFactory} from "../factories/PointFactory";

export class RectangleValidator implements ShapeValidator {
  validateData(points: string[]): boolean {
    if (points.length !== 4) return false;

    const pointObjects = points.map(PointFactory.fromString);
    const [a, b, c, d] = pointObjects;

    const ab = a.distance(b);
    const bc = b.distance(c);
    const cd = c.distance(d);
    const da = d.distance(a);

    const diagonalAC = a.distance(c);
    const diagonalBD = b.distance(d);

    // Check if opposite sides are equal and diagonals are equal
    return ab === cd && bc === da && diagonalAC === diagonalBD;
  }
}
