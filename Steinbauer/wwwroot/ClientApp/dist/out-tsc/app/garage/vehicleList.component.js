import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { NavigationEnd } from "@angular/router";
var VehicleList = /** @class */ (function () {
    function VehicleList(data, router) {
        var _this = this;
        this.data = data;
        this.router = router;
        this.vehicles = data.vehicles;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.mySubscription = this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd) {
                _this.router.navigated = false;
            }
        });
    }
    VehicleList.prototype.onEdit = function (vehicle) {
        this.data.vehicle = vehicle;
        this.router.navigate(["edit"]);
    };
    VehicleList.prototype.onDelete = function (vehicle) {
        var _this = this;
        this.data.deleteVehicle(vehicle).subscribe(function () {
            _this.router.navigate(["garage"]);
        });
    };
    VehicleList.prototype.onManageMods = function (vehicle) {
        this.data.vehicle = vehicle;
        this.router.navigate(["manageMods"]);
    };
    VehicleList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadVehicles().subscribe(function () {
            return _this.vehicles = _this.data.vehicles;
        });
    };
    VehicleList.prototype.ngOnDestroy = function () {
        if (this.mySubscription) {
            this.mySubscription.unsubscribe();
        }
    };
    VehicleList.prototype.displayEngineStatus = function (engineStatus) {
        if (engineStatus == true)
            return "Running";
        else
            return "Stopped";
    };
    VehicleList.prototype.displayVehicleTypeName = function (vehicleType) {
        switch (vehicleType) {
            case 0:
                return "Sedan";
            case 1:
                return "Truck";
            case 2:
                return "Crossover";
            case 3:
                return "Compact";
            case 4:
                return "Tractor";
        }
        return "Undefined";
    };
    VehicleList.prototype.calcTotalHorsepower = function (vehicle) {
        var total = vehicle.horsepower;
        for (var i = 0; i < vehicle.modifications.length; i++) {
            total += vehicle.modifications[i].horsepower;
        }
        return total;
    };
    VehicleList.prototype.calcTotalTorque = function (vehicle) {
        var total = vehicle.torque;
        for (var i = 0; i < vehicle.modifications.length; i++) {
            total += vehicle.modifications[i].torque;
        }
        return total;
    };
    VehicleList = __decorate([
        Component({
            selector: "vehicle-list",
            templateUrl: "vehicleList.component.html",
            styleUrls: ["vehicleList.component.css"]
        })
    ], VehicleList);
    return VehicleList;
}());
export { VehicleList };
//# sourceMappingURL=vehicleList.component.js.map