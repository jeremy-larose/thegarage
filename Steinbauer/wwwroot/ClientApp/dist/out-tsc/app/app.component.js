import { __decorate } from "tslib";
import { Component } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ["./app.component.css"]
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
export var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Sedan"] = 0] = "Sedan";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Crossover"] = 2] = "Crossover";
    VehicleType[VehicleType["Compact"] = 3] = "Compact";
    VehicleType[VehicleType["Semi"] = 4] = "Semi";
})(VehicleType || (VehicleType = {}));
//# sourceMappingURL=app.component.js.map