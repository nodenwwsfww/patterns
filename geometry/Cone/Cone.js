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
exports.Cone = void 0;
var Shape_1 = require("../Shape/Shape");
var Cone = /** @class */ (function (_super) {
    __extends(Cone, _super);
    function Cone(id, points) {
        var _this = _super.call(this, id, points) || this;
        _this._height = points[0].distance(points[1]);
        return _this;
    }
    Cone.prototype.calculateArea = function () {
        var radius = this.points[0].distance(this.points[1]);
        return Math.PI * radius * (radius + Math.sqrt(Math.pow(this._height, 2) + Math.pow(radius, 2)));
    };
    Cone.prototype.calculateVolume = function () {
        var radius = this.points[0].distance(this.points[1]);
        return (1 / 3) * Math.PI * Math.pow(radius, 2) * this._height;
    };
    return Cone;
}(Shape_1.Shape));
exports.Cone = Cone;
