"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RectangleFactory = void 0;
var Rectangle_1 = require("../geometry/Rectangle/Rectangle");
var RectangleFactory = /** @class */ (function () {
    function RectangleFactory() {
    }
    RectangleFactory.createRectangle = function (id, points) {
        return new Rectangle_1.Rectangle(id, points);
    };
    return RectangleFactory;
}());
exports.RectangleFactory = RectangleFactory;
