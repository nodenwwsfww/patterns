import { PointValidator } from './PointValidator';
import {logger} from "../utils/logger";

export class ShapeValidator {
  static validateData(points: string[], minPoints: number): boolean {
    if (points.length < minPoints) {
      logger.error(`Shape must have at least ${minPoints} points`)
      return false;
    }
    return points.every(point => PointValidator.validatePoint(point));
  }
}