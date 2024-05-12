
class Vehicle2 {
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }

  // Shortcut 
  constructor(public color: string) {}

  drive(): void {
    console.log('hi !');
  }
} 

class Car extends Vehicle2 {
  // If we call a constructor from a child, we need to call the parent 
  // constructor as well with "super" and of course pass the parameters in it.
  // We don't need to add public for the parent param because we don't need to
  // instantiate a variable in this class
  constructor(public wheels: number, color: string) {
    super(color);
  }

  // We can override drive by overriding it
  drive(): void {
    console.log('Im a car');
  }
}

const vehicle = new Vehicle2('red');
vehicle.drive();
const car = new Car(2, 'red');
car.drive();