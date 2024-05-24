"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConeFactory = void 0;
var Cone_1 = require("../geometry/Cone/Cone");
var ConeFactory = /** @class */ (function () {
    function ConeFactory() {
    }
    ConeFactory.createCone = function (id, points) {
        return new Cone_1.Cone(id, points);
    };
    return ConeFactory;
}());
exports.ConeFactory = ConeFactory;
