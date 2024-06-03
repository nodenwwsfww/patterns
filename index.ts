import { DataReader } from './DataReader';
import { ShapeManager } from './ShapeManager';
import { logger } from './utils/logger';
import { registerFactories, registerValidators } from './registry';
import {Repository} from './repository/Repository';

const filePath = './data/shapes.txt';

// Register factories and validators
registerFactories();
registerValidators();

DataReader.read(filePath)
    .then(parsedLines => {
        const validLines = ShapeManager.validateShapes(parsedLines);
        const shapes = ShapeManager.createShapes(validLines);
        const repo = Repository.getInstance();

        shapes.forEach(shape => repo.add(shape));
        logger.info(`Shapes = ${JSON.stringify(shapes)}`);

    })
    .catch(error => {
            logger.error(`Failed to read and process shapes: ${error.message}`);
    });