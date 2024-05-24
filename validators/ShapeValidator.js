"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeValidator = void 0;
var PointValidator_1 = require("./PointValidator");
var logger_1 = require("../utils/logger");
var ShapeValidator = /** @class */ (function () {
    function ShapeValidator() {
    }
    ShapeValidator.validateData = function (points, minPoints) {
        if (points.length < minPoints) {
            logger_1.logger.error("Shape must have at least ".concat(minPoints, " points"));
            return false;
        }
        return points.every(function (point) { return PointValidator_1.PointValidator.validatePoint(point); });
    };
    return ShapeValidator;
}());
exports.ShapeValidator = ShapeValidator;
