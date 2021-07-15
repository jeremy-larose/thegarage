import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { Vehicle } from "../shared/vehicle";
var Edit = /** @class */ (function () {
    function Edit(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.vehicle = new Vehicle();
        this.model = new Vehicle();
        this.vehicleTypes = [
            { id: 0, name: 'Sedan' },
            { id: 1, name: 'Truck' },
            { id: 2, name: 'Crossover' },
            { id: 3, name: 'Compact' },
            { id: 4, name: 'Semi' }
        ];
        this.defaultOption = null;
        this.vehicle = data.vehicle;
    }
    Edit.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadVehicle(this.vehicle).subscribe(function () {
            return _this.vehicle = _this.data.vehicle;
        });
    };
    Edit.prototype.checkout = function () {
        this.router.navigate(["checkout"]);
    };
    Edit.prototype.onSubmit = function () {
        var _this = this;
        this.vehicle.vehicleType = this.vehicleTypes[this.vehicle.vehicleType].id;
        //this.vehicle.vehicleType = this.vehicleTypes[this.vehicle.vehicleType].id;
        this.data.updateVehicle(this.vehicle)
            .subscribe(function (success) {
            if (success) {
                _this.router.navigate(["/"]);
            }
        }, function (err) { return _this.errorMessage = "Failed to add new vehicle."; });
    };
    Edit = __decorate([
        Component({
            selector: "edit",
            templateUrl: "edit.component.html",
        })
    ], Edit);
    return Edit;
}());
export { Edit };
//# sourceMappingURL=edit.component.js.map