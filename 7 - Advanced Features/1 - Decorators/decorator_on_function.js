var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function checkString(strLength) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args[0].length > strLength) {
                throw new Error('The string should be under 10 characters');
            }
            return originalMethod.apply(this, args);
        };
    };
}
var CheckString = /** @class */ (function () {
    function CheckString() {
    }
    CheckString.prototype.greet = function (str) {
        console.log(str);
    };
    __decorate([
        checkString(10)
    ], CheckString.prototype, "greet", null);
    return CheckString;
}());
var check = new CheckString();
check.greet('hellovdvsfesfse');
