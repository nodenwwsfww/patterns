"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConeValidator = void 0;
var ShapeValidator_1 = require("../validators/ShapeValidator");
var logger_1 = require("../utils/logger");
var PointFactory_1 = require("../factories/PointFactory");
var ConeValidator = /** @class */ (function () {
    function ConeValidator() {
    }
    ConeValidator.validateData = function (points) {
        var isValidShape = ShapeValidator_1.ShapeValidator.validateData(points, 2);
        if (!isValidShape) {
            logger_1.logger.error("Invalid data for Cone");
            return false;
        }
        return points.length >= 2 && this.isValidCone(points.map(PointFactory_1.PointFactory.fromString));
    };
    ConeValidator.isValidCone = function (points) {
        var distance = points[0].distance(points[1]);
        return distance > 0;
    };
    return ConeValidator;
}());
exports.ConeValidator = ConeValidator;
