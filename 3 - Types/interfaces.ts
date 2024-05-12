interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

// Without interface

// const printVehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {

// With interface
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

// Access only a part of the object
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}

printVehicle(oldCivic);
printSummary(oldCivic);
printSummary(drink);