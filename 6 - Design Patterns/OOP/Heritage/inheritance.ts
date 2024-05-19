class Animal {
  constructor(public name: string) {}

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }

  sound(): void {
    console.log('Parent class');
  }
}

class Dog extends Animal {
  constructor(public name = "dog") {
    // Permet de récupérer les propriétés et méthodes du parent
    super(name);
  }

  sound() {
    super.sound();
    console.log('child class');
  }
}

let myDog = new Dog();

myDog.move(50); // retourne Dog moved 50 meters