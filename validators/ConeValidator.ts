import { ShapeValidator } from './ShapeValidator';
import {PointFactory} from "../factories/PointFactory";

export class ConeValidator implements ShapeValidator {
  validateData(points: string[]): boolean {
    if (points.length !== 3) return false;

    const pointObjects = points.map(PointFactory.fromString);
    const [apex, baseCenter, baseEdge] = pointObjects;

    const radius = baseCenter.distance(baseEdge);
    const height = apex.distance(baseCenter);

    return radius > 0 && height > 0;
  }
}
