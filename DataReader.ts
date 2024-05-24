import { logger } from './utils/logger';
import * as fs from 'fs';
import {RectangleValidator} from "./validators/RectangleValidator";
import {ConeValidator} from "./validators/ConeValidator";
import { Shape } from './geometry/Shape/Shape';
import {PointFactory} from "./factories/PointFactory";
import {RectangleFactory} from "./factories/RectangleFactory";
import {ConeFactory} from "./factories/ConeFactory";

export class DataReader {
  static read(filePath: string): Shape[] {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    const figures: Shape[] = [];

    lines.forEach((line, index) => {
      const [figureType, id, pointsData] = line.split(';');
      const solidNumbers = pointsData
        .replace(/\r/g, '')
        .split(',');

      const points = solidNumbers.reduce((acc, point, index, array) => {
        if (index % 2 === 0 && array[index + 1]) {
          acc.push(point + ',' + array[index + 1]);
        }
        return acc;
      }, [] as string[]);
      logger.info(`points = ${JSON.stringify(points)}`);

      try {
        if (figureType === 'Rectangle') {
          const isValid = RectangleValidator.validateData(points);
          if (!isValid) {
            logger.error(`Invalid data for Rectangle on line ${index + 1}`);
            return;
          }

          const rectangle =
            RectangleFactory.createRectangle(id, points.map(PointFactory.fromString));

          figures.push(rectangle);
        } else if (figureType === 'Cone') {
          const isValid = ConeValidator.validateData(points);
          if (!isValid) {
            logger.error(`Invalid data for Cone on line ${index + 1}`);
            return;
          }

          const cone = ConeFactory.createCone(id, points.map(PointFactory.fromString));
          figures.push(cone);
        } else {
          if (line.trim() !== '') {
            logger.error(`Invalid figure type on line ${index + 1}: ${figureType}`);
          }
          return;
        }
      } catch (error) {
        if (error instanceof Error) {
          logger.error(`Error on line ${index + 1}: ${error.message}`);
        } else {
          logger.error(`An unknown error occurred on line ${index + 1}`);
        }
      }
    });

    return figures;
  }
}