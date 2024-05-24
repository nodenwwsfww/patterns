"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointFactory = void 0;
var Point_1 = require("../geometry/Point/Point");
var PointFactory = /** @class */ (function () {
    function PointFactory() {
    }
    PointFactory.createPoint = function (x, y) {
        return new Point_1.Point(x, y);
    };
    PointFactory.fromString = function (pointString) {
        var _a = pointString.split(',').map(Number), x = _a[0], y = _a[1];
        return this.createPoint(x, y);
    };
    return PointFactory;
}());
exports.PointFactory = PointFactory;
