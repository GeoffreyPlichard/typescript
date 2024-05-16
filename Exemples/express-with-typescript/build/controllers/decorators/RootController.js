"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res) {
        if (req.session && req.session.loggedIn) {
            res.send("\n        <div>\n          <div>You are logged in</div>\n          <a href=\"/auth/logout\">Logout</a>\n        </div>\n      ");
        }
        else {
            res.send("\n        <div>\n          <div>You are not logged in</div>\n          <a href=\"/auth/login\">Login</a>\n        </div>\n      ");
        }
    };
    ;
    RootController.prototype.getProtected = function (req, res) {
        res.send('Welcome to protected route, loggedin user');
    };
    ;
    return RootController;
}());
