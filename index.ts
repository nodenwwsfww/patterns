import { DataReader } from './DataReader';
import { ShapeManager } from './ShapeManager';
import { logger } from './utils/logger';
import { registerFactories, registerValidators } from './registry';
import {Repository} from './repository/Repository';
import { ShapeComparator } from './comparators/ShapeComparator';

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
        // Example sorting and searching
        const sortedById = repo.sort(ShapeComparator.byId);
        logger.info(`Shapes sorted by ID: ${JSON.stringify(sortedById)}`);

        const sortedByName = repo.sort(ShapeComparator.byName);
        logger.info(`Shapes sorted by Name: ${JSON.stringify(sortedByName)}`);

        const sortedByX = repo.sort(ShapeComparator.byX);
        logger.info(`Shapes sorted by X coordinate: ${JSON.stringify(sortedByX)}`);

        const sortedByY = repo.sort(ShapeComparator.byY);
        logger.info(`Shapes sorted by Y coordinate: ${JSON.stringify(sortedByY)}`);

        const sortedByZ = repo.sort(ShapeComparator.byZ);
        logger.info(`Shapes sorted by Z coordinate: ${JSON.stringify(sortedByZ)}`);
    })
    .catch(error => {
            logger.error(`Failed to read and process shapes: ${error.message}`);
    });
