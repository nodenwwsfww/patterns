"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReader = void 0;
var logger_1 = require("./utils/logger");
var fs = require("fs");
var RectangleValidator_1 = require("./validators/RectangleValidator");
var ConeValidator_1 = require("./validators/ConeValidator");
var PointFactory_1 = require("./factories/PointFactory");
var RectangleFactory_1 = require("./factories/RectangleFactory");
var ConeFactory_1 = require("./factories/ConeFactory");
var DataReader = /** @class */ (function () {
    function DataReader() {
    }
    DataReader.read = function (filePath) {
        var content = fs.readFileSync(filePath, 'utf-8');
        var lines = content.split('\n');
        var figures = [];
        lines.forEach(function (line, index) {
            var _a = line.split(';'), figureType = _a[0], id = _a[1], pointsData = _a[2];
            var solidNumbers = pointsData
                .replace(/\r/g, '')
                .split(',');
            var points = solidNumbers.reduce(function (acc, point, index, array) {
                if (index % 2 === 0 && array[index + 1]) {
                    acc.push(point + ',' + array[index + 1]);
                }
                return acc;
            }, []);
            logger_1.logger.info("points = ".concat(JSON.stringify(points)));
            try {
                if (figureType === 'Rectangle') {
                    var isValid = RectangleValidator_1.RectangleValidator.validateData(points);
                    if (!isValid) {
                        logger_1.logger.error("Invalid data for Rectangle on line ".concat(index + 1));
                        return;
                    }
                    var rectangle = RectangleFactory_1.RectangleFactory.createRectangle(id, points.map(PointFactory_1.PointFactory.fromString));
                    figures.push(rectangle);
                }
                else if (figureType === 'Cone') {
                    var isValid = ConeValidator_1.ConeValidator.validateData(points);
                    if (!isValid) {
                        logger_1.logger.error("Invalid data for Cone on line ".concat(index + 1));
                        return;
                    }
                    var cone = ConeFactory_1.ConeFactory.createCone(id, points.map(PointFactory_1.PointFactory.fromString));
                    figures.push(cone);
                }
                else {
                    if (line.trim() !== '') {
                        logger_1.logger.error("Invalid figure type on line ".concat(index + 1, ": ").concat(figureType));
                    }
                    return;
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    logger_1.logger.error("Error on line ".concat(index + 1, ": ").concat(error.message));
                }
                else {
                    logger_1.logger.error("An unknown error occurred on line ".concat(index + 1));
                }
            }
        });
        return figures;
    };
    return DataReader;
}());
exports.DataReader = DataReader;
