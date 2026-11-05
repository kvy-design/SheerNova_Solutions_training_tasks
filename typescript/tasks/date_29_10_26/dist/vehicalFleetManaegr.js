"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VehicalType;
(function (VehicalType) {
    VehicalType[VehicalType["Car"] = 0] = "Car";
    VehicalType[VehicalType["Truck"] = 1] = "Truck";
    VehicalType[VehicalType["Motorcycle"] = 2] = "Motorcycle";
    VehicalType[VehicalType["Van"] = 3] = "Van";
})(VehicalType || (VehicalType = {}));
var FuelType;
(function (FuelType) {
    FuelType[FuelType["Petrol"] = 0] = "Petrol";
    FuelType[FuelType["Diesel"] = 1] = "Diesel";
    FuelType[FuelType["Electrical"] = 2] = "Electrical";
    FuelType[FuelType["Hybrid"] = 3] = "Hybrid";
})(FuelType || (FuelType = {}));
class FleetBase {
    vehicls = [];
    rental = [];
}
class RentalFleet extends FleetBase {
    // vehicle:Vehical[] = []
    addVehicle(vehical) {
        let isduplicateId = this.vehicls.find((currVeh) => currVeh.id === vehical.id);
        if (isduplicateId)
            throw new Error("Vehical already exist in data");
        this.vehicls.push(vehical);
    }
    removeVehical(vehicalId) {
        let getVehicalId = this.vehicls.findIndex((currVeh) => currVeh.id === vehicalId);
        if (getVehicalId === -1)
            throw new Error("Vehicaid is not present");
        this.vehicls.splice(getVehicalId, 1);
    }
    getAvailableByType(vehicleType) {
        let getAvail = this.vehicls.filter((currVeh) => currVeh.type === vehicleType.type &&
            currVeh.isAvail &&
            currVeh.isOperational);
        if (getAvail.length === 0)
            throw new Error("Vehicle type is not found");
        return getAvail;
    }
    rentVehicle(vehical, days, cName) {
        let isvehicalId = this.vehicls.find((currVeh) => currVeh.id === vehical.id);
        if (!isvehicalId)
            throw new Error("vehical id is not valid");
        if (days <= 0)
            throw new Error("days are not valid");
        let sDate = Date.now();
        let eDate = sDate + days * 24 * 60 * 60 * 1000;
        let cost = this.calculateCost(isvehicalId, days);
        this.rental.push({
            vehicalId: vehical.id,
            customerName: cName,
            startDate: sDate,
            endDate: eDate,
            totalCost: cost
        });
        return cost;
    }
    returnVehicle(vehicle) {
        let checkVehicle = this.vehicls.find((currVeh) => currVeh.id === vehicle.id);
        if (!checkVehicle)
            throw new Error("vehical already present");
        if (checkVehicle.isAvail) {
            throw new Error("Vehicle is already available");
        }
        checkVehicle.isAvail = true;
    }
    getFleetValue() {
        if (this.vehicls.length === 0)
            throw new Error("no vehical");
        let totalfleetval = this.vehicls.reduce((acc, curr) => {
            if (curr.isOperational) {
                acc += curr.dailyRate;
            }
            return acc;
        }, 0);
        return totalfleetval;
    }
    static generateReport(fleet) {
        return {
            totalVehicles: fleet.vehicls.length,
            operationalVehicles: fleet.vehicls.filter((v) => v.isOperational).length,
            availableVehicles: fleet.vehicls.filter((v) => v.isOperational && v.isAvail).length,
            rentedVehicles: fleet.vehicls.filter((v) => !v.isAvail).length,
            totalFleetValue: fleet.getFleetValue(),
        };
    }
    calculateCost(vehical, days) {
        let getVeh = this.vehicls.find((currVeh) => vehical.id === currVeh.id);
        if (!getVeh)
            throw new Error("vehical is not available");
        return getVeh.dailyRate * days;
    }
}
const fleet = new RentalFleet();
const car = {
    id: 101,
    make: "Toyota",
    model: "Fortuner",
    year: 2025,
    dailyRate: 2000,
    type: VehicalType.Car,
    fuel: FuelType.Diesel,
    mileage: 15,
    isAvail: true,
    isOperational: true
};
fleet.addVehicle(car);
const cost = fleet.rentVehicle(car, 5, "Rahul");
console.log("Rental Cost:", cost);
console.log(fleet.rental);
//# sourceMappingURL=vehicalFleetManaegr.js.map