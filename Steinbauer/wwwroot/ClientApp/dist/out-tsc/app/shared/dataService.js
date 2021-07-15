import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Vehicle } from "./vehicle";
import { Modification } from "./modification";
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.token = "";
        this.vehicle = new Vehicle();
        this.vehicles = [];
        this.modification = new Modification();
        this.modifications = [];
    }
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            //return this.token.length == 0 || this.tokenExpiration > new Date();
            return false;
        },
        enumerable: false,
        configurable: true
    });
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post("/account/createtoken", creds)
            .pipe(map(function (data) {
            _this.token = data.token;
            _this.tokenExpiration = data.expiration;
            return true;
        }));
    };
    DataService.prototype.checkoutVehicle = function () {
        var _this = this;
        return this.http.post("/api/vehicles", this.vehicle, {})
            .pipe(map(function (response) {
            _this.vehicle = new Vehicle();
            return true;
        }));
    };
    DataService.prototype.loadVehicles = function () {
        var _this = this;
        return this.http.get("/api/vehicles")
            .pipe(map(function (data) {
            _this.vehicles = data;
            return true;
        }));
    };
    DataService.prototype.getExistingVehicle = function (id) {
        var url = "/api/vehicles/" + id.toString();
        return this.http.get(url).pipe(map(function (response) {
            if (response.vehicleId == id)
                return true;
        }));
    };
    DataService.prototype.updateVehicle = function (vehicle) {
        var _this = this;
        var url = "/api/vehicles/" + vehicle.vehicleId.toString();
        return this.http.put(url, this.vehicle)
            .pipe(map(function (response) {
            _this.vehicle = new Vehicle();
            return true;
        }));
    };
    DataService.prototype.loadVehicle = function (vehicle) {
        var _this = this;
        var url = "/api/vehicles/" + vehicle.vehicleId.toString();
        return this.http.get(url).pipe(map(function (response) {
            _this.vehicle = response;
            return true;
        }));
    };
    DataService.prototype.removeMod = function (vehicle, id) {
        var _this = this;
        var url = "/api/vehicles/" + vehicle.vehicleId.toString() + "/mods/" + id;
        return this.http.delete(url).pipe(map(function (response) {
            _this.modification = new Modification();
            return true;
        }));
    };
    DataService.prototype.addMod = function (vehicle, id) {
        var _this = this;
        var url = "/api/vehicles/" + vehicle.vehicleId.toString() + "/mods";
        return this.http.post(url, this.modification).pipe(map(function (response) {
            _this.modification = new Modification();
            return true;
        }));
    };
    DataService.prototype.deleteVehicle = function (vehicle) {
        var _this = this;
        var url = "/api/vehicles/" + vehicle.vehicleId.toString();
        this.http.delete(url);
        return this.http.delete(url).pipe(map(function (response) {
            _this.vehicle = new Vehicle();
            return true;
        }));
    };
    DataService.prototype.loadModifications = function () {
        var _this = this;
        return this.http.get("/api/mods")
            .pipe(map(function (data) {
            _this.modifications = data;
            return true;
        }));
    };
    DataService.prototype.getExistingVehicleMod = function (vehicleId, i) {
        var url = "/api/vehicles/" + vehicleId.toString() + "/mods/" + i.toString();
        return this.http.get(url).pipe(map(function (response) {
            return true;
        }));
    };
    DataService.prototype.getModsForVehicle = function (vehicleId) {
        var _this = this;
        var url = "/api/vehicles/" + vehicleId.toString() + "/mods";
        return this.http.get(url).pipe(map(function (data) {
            _this.modifications = data;
        }));
    };
    DataService.prototype.addModToVehicle = function (vehicleId) {
        var _this = this;
        var url = "/api/vehicles/" + vehicleId.toString() + "/mods";
        return this.http.post(url, this.modification).pipe(map(function (response) {
            _this.modification = new Modification();
            return true;
        }));
    };
    DataService = __decorate([
        Injectable()
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=dataService.js.map