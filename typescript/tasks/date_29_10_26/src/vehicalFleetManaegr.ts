enum VehicalType {
  Car,
  Truck,
  Motorcycle,
  Van,
}

enum FuelType {
  Petrol,
  Diesel,
  Electrical,
  Hybrid,
}

interface Vehical {
  id: number;
  make: string;
  model: string;
  year: number;
  dailyRate: number;
  type: VehicalType;
  fuel: FuelType;
  mileage: number;
  isAvail: boolean;
  isOperational: boolean;
}

interface Rental {
  vehicalId: number;
  customerName: string;
  startDate: number;
  endDate: number;
  totalCost: number;
}
abstract class FleetBase {
  vehicls: Vehical[] = [];
  rental : Rental[] = [];
  abstract calculateCost(vehical: Vehical, days: number): number;
}

interface VehicalMethods {
  addVehicle(vehical: Vehical): void;
  removeVehical(vehicalId: number): void;
  getAvailableByType(vehicleType: Vehical): Vehical[];
  rentVehicle(vehical: Vehical, days: number , cName : string): number;
  returnVehicle(vehicle: Vehical): void;
  getFleetValue(): number;
}

class RentalFleet extends FleetBase implements VehicalMethods {
  // vehicle:Vehical[] = []

  addVehicle(vehical: Vehical): void {
    let isduplicateId = this.vehicls.find(
      (currVeh) => currVeh.id === vehical.id,
    );
    if (isduplicateId) throw new Error("Vehical already exist in data");
    this.vehicls.push(vehical);
  }

  removeVehical(vehicalId: number): void {
    let getVehicalId = this.vehicls.findIndex(
      (currVeh) => currVeh.id === vehicalId,
    );
    if (getVehicalId === -1) throw new Error("Vehicaid is not present");
    this.vehicls.splice(getVehicalId, 1);
  }

  getAvailableByType(vehicleType: Vehical): Vehical[] {
    let getAvail = this.vehicls.filter(
      (currVeh) =>
        currVeh.type === vehicleType.type &&
        currVeh.isAvail &&
        currVeh.isOperational,
    );
    if (getAvail.length === 0) throw new Error("Vehicle type is not found");

    return getAvail;
  }

  rentVehicle(vehical: Vehical, days: number , cName : string): number {
    let isvehicalId = this.vehicls.find((currVeh) => currVeh.id === vehical.id);
    if (!isvehicalId) throw new Error("vehical id is not valid");
    if (days <= 0) throw new Error("days are not valid");
    let sDate = Date.now()
    let eDate = sDate + days * 24 * 60 * 60 * 1000
    let cost = this.calculateCost(isvehicalId, days);
    this.rental.push({
        vehicalId : vehical.id,
        customerName : cName,
        startDate : sDate,
        endDate : eDate,
        totalCost : cost })
    return cost;
  }

  returnVehicle(vehicle: Vehical): void {
    let checkVehicle = this.vehicls.find(
      (currVeh) => currVeh.id === vehicle.id,
    );
    if (!checkVehicle) throw new Error("vehical already present");
    if (checkVehicle.isAvail) {
      throw new Error("Vehicle is already available");
    }

    checkVehicle.isAvail = true;
  }

  getFleetValue(): number {
    if (this.vehicls.length === 0) throw new Error("no vehical");
    let totalfleetval = this.vehicls.reduce((acc, curr) => {
      if (curr.isOperational) {
        acc += curr.dailyRate;
      }
      return acc;
    }, 0);

    return totalfleetval;
  }

  static generateReport(fleet: RentalFleet): object {
    return {
      totalVehicles: fleet.vehicls.length,
      operationalVehicles: fleet.vehicls.filter((v) => v.isOperational).length,
      availableVehicles: fleet.vehicls.filter(
        (v) => v.isOperational && v.isAvail,
      ).length,
      rentedVehicles: fleet.vehicls.filter((v) => !v.isAvail).length,
      totalFleetValue: fleet.getFleetValue(),
    };
  }

  calculateCost(vehical: Vehical, days: number): number {
    let getVeh = this.vehicls.find((currVeh) => vehical.id === currVeh.id);
    if (!getVeh) throw new Error("vehical is not available");
    return getVeh.dailyRate * days;
  }
}

type Trackvehicles = {
  [vehicleId: string]: {
    lastService: Date;
    nextServcie: Date;
  };
};


const fleet = new RentalFleet();

const car: Vehical = {
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