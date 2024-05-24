"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Shape_1 = require("../Shape/Shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(id, points) {
        return _super.call(this, id, points) || this;
    }
    Rectangle.prototype.calculateArea = function () {
        var width = this.points[0].distance(this.points[1]);
        var height = this.points[1].distance(this.points[2]);
        return width * height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        var width = this.points[0].distance(this.points[1]);
        var height = this.points[1].distance(this.points[2]);
        return 2 * (width + height);
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
