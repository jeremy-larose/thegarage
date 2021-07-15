import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { Vehicle } from "../shared/vehicle";
var ModificationList = /** @class */ (function () {
    function ModificationList(data, router) {
        this.data = data;
        this.router = router;
        this.modifications = [];
        this.vehicle = new Vehicle();
        this.errorMessage = "";
        this.modifications = data.modifications;
        this.data = data;
        this.vehicle = data.vehicle;
    }
    ModificationList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadModifications().subscribe(function () {
            return _this.modifications = _this.data.modifications;
        });
    };
    ModificationList.prototype.addModToVehicle = function (id) {
        var _this = this;
        this.data.addMod(this.vehicle, id).subscribe(function (success) {
            if (success) {
            }
        }, function (err) { return _this.errorMessage = "Failed to add modification to vehicle."; });
    };
    ModificationList.prototype.removeModFromVehicle = function (id) {
        var _this = this;
        this.data.removeMod(this.vehicle, id).subscribe(function (success) {
            if (success) {
            }
        }, function (err) { return _this.errorMessage = "Failed to remove modification from vehicle."; });
    };
    ModificationList = __decorate([
        Component({
            selector: "modification-list",
            templateUrl: "modificationList.component.html",
            styleUrls: ["modificationList.component.css"]
        })
    ], ModificationList);
    return ModificationList;
}());
export { ModificationList };
//# sourceMappingURL=modificationList.component.js.map