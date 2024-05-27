import { logger } from './utils/logger';
import { Shape } from './geometry/Shape/Shape';
import { FactoryRegistry } from './factories/FactoryRegistry';
import { ValidatorRegistry } from './validators/ValidatorRegistry';
import { ParsedLine } from './DataReader';

export class ShapeManager {
    static validateShapes(parsedLines: ParsedLine[]): ParsedLine[] {
        return parsedLines.filter((line, index) => {
            const { figureType, points } = line;
            const validator = ValidatorRegistry.getValidator(figureType);

            if (!validator) {
                logger.error(`No validator found for figure type on line ${index + 1}: ${figureType}`);
                return false;
            }

            if (!validator.validateData(points)) {
                logger.error(`Invalid data for ${figureType} on line ${index + 1}`);
                return false;
            }

            return true;
        });
    }

    static createShapes(validLines: ParsedLine[]): Shape[] {
        const figures: Shape[] = [];

        for (const [index, line] of validLines.entries()) {
            const { figureType, id, points } = line;

            try {
                const factory = FactoryRegistry.getFactory(figureType);

                if (!factory) {
                    logger.error(`Invalid figure type on line ${index + 1}: ${figureType}`);
                    continue;
                }

                const shape = factory.create(id, points);
                figures.push(shape);
            } catch (error) {
                if (error instanceof Error) {
                    logger.error(`Error on line ${index + 1}: ${error.message}`);
                } else {
                    logger.error(`An unknown error occurred on line ${index + 1}`);
                }
            }
        }

        return figures;
    }
}
