"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("./DataReader");
var logger_1 = require("./utils/logger");
var filePath = './data/shapes.txt';
var shapes = DataReader_1.DataReader.read(filePath);
// Now you can work with the shapes array
shapes.forEach(function (shape) {
    logger_1.logger.info(shape);
});
