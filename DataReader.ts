import { logger } from './utils/logger';
import * as fs from 'fs';

export interface ParsedLine {
  figureType: string;
  id: string;
  points: string[];
}

export class DataReader {
  static async read(filePath: string): Promise<ParsedLine[]> {
    try {
      // Check if file exists
      await fs.promises.access(filePath);
    } catch (error) {
      logger.error(`File not found: ${filePath}`);
      throw new Error(`File not found: ${filePath}`);
    }

    try {
      const content = await fs.promises.readFile(filePath, 'utf-8');
      const lines = content.split('\n');

      const parsedLines: ParsedLine[] = [];

      for (const [index, line] of lines.entries()) {
        const [figureType, id, pointsData] = line.split(';');

        if (!figureType) {
          logger.error(`Missing figure type on line ${index + 1}: ${line}`);
          continue;
        }
        if (!id) {
          logger.error(`Missing ID on line ${index + 1}: ${line}`);
          continue;
        }
        if (!pointsData) {
          logger.error(`Missing points data on line ${index + 1}: ${line}`);
          continue;
        }

        const solidNumbers = pointsData.replace(/\r/g, '').split(',');

        if (solidNumbers.length % 2 !== 0) {
          logger.error(`Invalid points data on line ${index + 1}: ${pointsData}`);
          continue;
        }

        const points = solidNumbers.reduce((acc, point, idx, array) => {
          if (idx % 2 === 0 && array[idx + 1]) {
            acc.push(point + ',' + array[idx + 1]);
          }
          return acc;
        }, [] as string[]);

        logger.info(`points = ${JSON.stringify(points)}`);

        parsedLines.push({ figureType, id, points });
      }

      return parsedLines;
    } catch (error) {
      if (error instanceof Error) {
        logger.error(`Error reading file: ${error.message}`);
      }
      throw error;
    }
  }
}
