import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { Vehicle } from "../shared/vehicle";
var AddVehicle = /** @class */ (function () {
    function AddVehicle(data, router) {
        this.data = data;
        this.router = router;
        this.vehicleTypes = [
            'Sedan', 'Truck', 'Crossover', 'Compact', 'Semi'
        ];
        this.submitted = false;
        this.errorMessage = "";
        this.model = new Vehicle();
    }
    AddVehicle.prototype.gotoCheckout = function () {
        var _this = this;
        this.errorMessage = "";
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        }
        else {
            this.model.vehicleId = 0;
            for (var i = 0; i < this.data.vehicles.length; i++) {
                if (this.data.getExistingVehicle(i)) {
                    continue;
                }
                this.model.vehicleId = i;
                break;
            }
            this.data.vehicle.vehicleId = this.model.vehicleId;
            this.data.vehicle.ownerName = this.model.ownerName;
            if (this.model.engineRunning == undefined) {
                this.model.engineRunning = false;
            }
            this.data.vehicle.engineRunning = this.model.engineRunning;
            this.data.vehicle.fileName = "dodgeCharger.jpg";
            this.data.vehicle.vehicleType = this.vehicleTypes.indexOf(this.model.vehicleType.toString());
            this.data.vehicle.horsepower = this.model.horsepower;
            this.data.vehicle.torque = this.model.torque;
            this.data.vehicle.modifications = this.model.modifications;
            this.data.checkoutVehicle()
                .subscribe(function (success) {
                if (success) {
                    _this.router.navigate(["garage"]);
                }
            }, function (err) { return _this.errorMessage = "Failed to save order."; });
        }
    };
    AddVehicle = __decorate([
        Component({
            selector: "addVehicle",
            templateUrl: "addVehicle.component.html",
        })
    ], AddVehicle);
    return AddVehicle;
}());
export { AddVehicle };
//# sourceMappingURL=addVehicle.component.js.map