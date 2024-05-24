"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointValidator = void 0;
var logger_1 = require("../utils/logger");
var PointValidator = /** @class */ (function () {
    function PointValidator() {
    }
    PointValidator.validatePoint = function (point) {
        var parts = point.split(',');
        if (parts.length !== 2) {
            logger_1.logger.error("Point must have exactly 2 coordinates");
            return false;
        }
        return !parts.some(function (part) { return isNaN(Number(part)); });
    };
    return PointValidator;
}());
exports.PointValidator = PointValidator;
