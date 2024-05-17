function wrapCode() {

  // Example of Abstraction Pattern

  // Abstracted Code
  interface Shape {
    area(): number;
    perimeter(): number;
  }

  class Circle implements Shape {
    constructor(private radius: number) {

    }

    area(): number {
      return Math.PI * this.radius * this.radius;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
  }

  class Rectangle implements Shape {
    constructor(
      private width: number,
      private height: number
    ){}

    area(): number {
      return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
  }

  function calculateTotalArea(shape: Shape): number {
    return shape.area();
  }


  // Client code
  let circle: Circle = new Circle(5);
  let rectangle: Rectangle = new Rectangle(4, 6);

  console.log('Area of circle: ', calculateTotalArea(circle));
  console.log('Area of rectangle: ', calculateTotalArea(rectangle));
}

