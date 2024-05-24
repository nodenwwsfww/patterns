import { ShapeValidator } from './ShapeValidator';
import {logger} from "../utils/logger";
import { Point } from '../geometry/Point/Point';
import {PointFactory} from "../factories/PointFactory";

export class RectangleValidator {
  static validateData(points: string[]): boolean {
    const isValidShape = ShapeValidator.validateData(points, 4);

    if (!isValidShape) {
      logger.error(`Invalid data for Rectangle`)
      return false;
    }

    return points.length === 4 && this.isValidRectangle(points.map(PointFactory.fromString));
  }

  static isValidRectangle(points: Point[]): boolean {
    const distances = [
      points[0].distance(points[1]),
      points[1].distance(points[2]),
      points[2].distance(points[3]),
      points[3].distance(points[0]),
      points[0].distance(points[2]),
      points[1].distance(points[3])
    ];

    return distances[0] === distances[2] && distances[1] === distances[3] && distances[4] === distances[5];
  }
}