import { ShapeValidator } from '../validators/ShapeValidator';
import {logger} from "../utils/logger";
import { Point } from '../geometry/Point/Point';
import {PointFactory} from "../factories/PointFactory";

export class ConeValidator {
  static validateData(points: string[]): boolean {
    const isValidShape = ShapeValidator.validateData(points, 2);

    if (!isValidShape) {
      logger.error(`Invalid data for Cone`)
      return false;
    }

    return points.length >= 2 && this.isValidCone(points.map(PointFactory.fromString));
  }

  static isValidCone(points: Point[]): boolean {
    const distance = points[0].distance(points[1]);
    return distance > 0;
  }
}