import { DataReader } from './DataReader';
import {logger} from "./utils/logger";

const filePath = './data/shapes.txt';
const shapes = DataReader.read(filePath);

// Now you can work with the shapes array
shapes.forEach(shape => {
  logger.info(shape);
});