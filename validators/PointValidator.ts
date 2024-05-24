import {logger} from "../utils/logger";

export class PointValidator {
  static validatePoint(point: string): boolean {
    const parts = point.split(',');
    if (parts.length !== 2) {
      logger.error(`Point must have exactly 2 coordinates`);
      return false;
    }

    return !parts.some(part => isNaN(Number(part)));
  }
}
