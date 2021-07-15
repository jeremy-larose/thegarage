import { __decorate } from "tslib";
import { Component } from "@angular/core";
var Login = /** @class */ (function () {
    function Login(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            username: "",
            password: ""
        };
    }
    Login.prototype.onLogin = function () {
        var _this = this;
        this.data.login(this.creds)
            .subscribe(function (success) {
            _this.router.navigate(["/"]);
        }, function (err) { return _this.errorMessage = "Failed to login."; });
    };
    Login = __decorate([
        Component({
            selector: "login",
            templateUrl: "login.component.html"
        })
    ], Login);
    return Login;
}());
export { Login };
//# sourceMappingURL=login.component.js.map