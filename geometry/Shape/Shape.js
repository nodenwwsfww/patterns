"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(_id, _points) {
        this._id = _id;
        this._points = _points;
    }
    Object.defineProperty(Shape.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "points", {
        get: function () {
            return this._points;
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
exports.Shape = Shape;
