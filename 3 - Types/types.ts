
// Primitifs
let apples: number = 5;

// Objets prédéfinis
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'blue'];

// Classes
class Car {}
let car: Car = new Car();

// Objets littéraux
let point: {x: number; y: number} = {
  x: 10,
  y: 20
};

// Fonctions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const anonymousFc = function (i: number): number {
  return i;
}