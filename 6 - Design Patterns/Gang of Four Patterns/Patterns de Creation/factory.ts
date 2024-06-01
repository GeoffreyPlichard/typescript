// Ici on créé une classe abstraite au lieu d'une interface
// car une classe abstraite possède un constructeur
// Si on avait utilisé une interface, il aurait fallu ajouter un constructor
// dans toutes les sous-classes

abstract class Car {
  constructor(
    public model: string,
    public productionYear: number
  ) {}

  abstract displayCarInfo(): void;
}

class Sedan extends Car {
  displayCarInfo(): void {
    console.log(`This is a Sedan. Model: ${this.model}, Production Year: ${this.productionYear}`)
  }
}

class SUV extends Car {
  displayCarInfo(): void {
    console.log(`This is a SUV. Model: ${this.model}, Production Year: ${this.productionYear}`)
  }
}

class Hatchback extends Car {
  displayCarInfo(): void {
    console.log(`This is a Hatchback. Model: ${this.model}, Production Year: ${this.productionYear}`)
  }
}

class CarFactory {
  public createCar(
    type: 'sedan' | 'suv' | 'hatchback', 
    model: string, 
    productionYear: number
  ): Car {
    switch(type) {
      case 'sedan':
        return new Sedan(model, productionYear);
      case 'suv':
        return new Sedan(model, productionYear);
      case 'hatchback':
        return new Sedan(model, productionYear);
      default:
        throw new Error('Invalid car type');
    }
  }
}

// Client

// On créé une factory
const carFactory = new CarFactory();


// On créé différents types de voiture
const sedan = carFactory.createCar('sedan', 'camry', 2023);
sedan.displayCarInfo();

const suv = carFactory.createCar('suv', 'RAV4', 2022);
suv.displayCarInfo();