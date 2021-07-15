import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { Vehicle } from "../shared/vehicle";
import { Modification } from "../shared/modification";
var ManageMods = /** @class */ (function () {
    function ManageMods(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.modifications = [];
        this.modification = new Modification();
        this.vehicle = new Vehicle();
        this.model = new Modification();
        this.vehicle = data.vehicle;
        this.modifications = data.modifications;
    }
    ManageMods.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadVehicle(this.vehicle).subscribe(function () {
            return _this.vehicle = _this.data.vehicle;
        });
        this.data.loadModifications().subscribe(function () {
            return _this.modifications = _this.data.modifications;
        });
    };
    ManageMods.prototype.addModToVehicle = function () {
        var _this = this;
        this.errorMessage = "";
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        }
        else {
            this.model.modificationId = this.modifications.length + 1;
            for (var i = 0; i < this.data.modifications.length; i++) {
                if (this.data.getExistingVehicleMod(this.data.vehicle.vehicleId, i)) {
                    continue;
                }
                this.model.modificationId = i;
                break;
            }
            this.data.modification.modificationId = this.model.modificationId;
            this.data.modification.modificationName = this.model.modificationName;
            this.data.modification.horsepower = this.model.horsepower;
            this.data.modification.torque = this.model.torque;
            alert("Added mod to vehicle: " + this.data.modification.modificationName);
            this.data.addModToVehicle(this.vehicle.vehicleId)
                .subscribe(function (success) {
                if (success) {
                    _this.router.navigate(["garage"]);
                }
            }, function (err) { return _this.errorMessage = "Failed to save order."; });
        }
    };
    ManageMods.prototype.removeModFromVehicle = function (id) {
        var _this = this;
        this.data.removeMod(this.vehicle, id).subscribe(function (success) {
            if (success) {
                alert("Successfully removed modification.");
                _this.router.navigate(["/"]);
            }
        }, function (err) { return alert("Failed to remove modification."); });
    };
    ManageMods.prototype.calcHorsepower = function () {
        var total = this.vehicle.horsepower;
        for (var i = 0; i < this.vehicle.modifications.length; i++) {
            total += this.vehicle.modifications[i].horsepower;
        }
        return total;
    };
    ManageMods.prototype.calcTorque = function () {
        var total = this.vehicle.torque;
        for (var i = 0; i < this.vehicle.modifications.length; i++) {
            total += this.vehicle.modifications[i].torque;
        }
        return total;
    };
    ManageMods = __decorate([
        Component({
            selector: "manage-mods",
            templateUrl: "manageMods.component.html",
        })
    ], ManageMods);
    return ManageMods;
}());
export { ManageMods };
//# sourceMappingURL=manageMods.component.js.map