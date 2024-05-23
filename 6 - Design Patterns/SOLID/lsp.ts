// Liskov Substituion

// Ici on créé une classe abstraite car les autres classes hériterons 
// de cette classe et on ne veut pas d'implémentation avec une nouvelle
// instance.

// On pourrait utiliser une interface mais le but ici est d'illustrer
// le LSP. Aussi, avec une classe abstraite on pourrait ajouter plus tard
// des méthodes statiques.
abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  public calculateArea(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  public calculateArea(): number {
    return this.side * this.side;
  }
}

// ===== Client Code
function area(shape: Shape) {
  return shape.calculateArea();
}

let rectangle = new Rectangle(10, 12);
let square = new Square(8);

// Liskov Principle
// Le rectangle est un type enfant de Shape mais il peut être utilisé
// à la place de Shape

area(rectangle);
area(square);

// Ici, area prend un type Shape en paramètre mais on peut
// lui passer le type enfant Rectangle