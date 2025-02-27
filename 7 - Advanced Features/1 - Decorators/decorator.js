var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(target, key, descriptor) {
    console.log("Logging ".concat(key, " function"));
    return descriptor;
}
var Example = /** @class */ (function () {
    function Example() {
    }
    Example.prototype.greet = function () {
        console.log("Hello, world!");
    };
    __decorate([
        log
    ], Example.prototype, "greet", null);
    return Example;
}());
var example = new Example();
example.greet();
