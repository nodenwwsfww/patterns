"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RectangleValidator = void 0;
var ShapeValidator_1 = require("./ShapeValidator");
var logger_1 = require("../utils/logger");
var PointFactory_1 = require("../factories/PointFactory");
var RectangleValidator = /** @class */ (function () {
    function RectangleValidator() {
    }
    RectangleValidator.validateData = function (points) {
        var isValidShape = ShapeValidator_1.ShapeValidator.validateData(points, 4);
        if (!isValidShape) {
            logger_1.logger.error("Invalid data for Rectangle");
            return false;
        }
        return points.length === 4 && this.isValidRectangle(points.map(PointFactory_1.PointFactory.fromString));
    };
    RectangleValidator.isValidRectangle = function (points) {
        var distances = [
            points[0].distance(points[1]),
            points[1].distance(points[2]),
            points[2].distance(points[3]),
            points[3].distance(points[0]),
            points[0].distance(points[2]),
            points[1].distance(points[3])
        ];
        return distances[0] === distances[2] && distances[1] === distances[3] && distances[4] === distances[5];
    };
    return RectangleValidator;
}());
exports.RectangleValidator = RectangleValidator;
