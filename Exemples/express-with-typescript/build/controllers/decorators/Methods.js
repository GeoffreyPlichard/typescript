"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Methods = void 0;
// Allow express router to know we match the router methods
// Try to change a value to see.
var Methods;
(function (Methods) {
    Methods["get"] = "get";
    Methods["post"] = "post";
    Methods["patch"] = "patch";
    Methods["del"] = "delete";
    Methods["put"] = "put";
})(Methods || (exports.Methods = Methods = {}));
