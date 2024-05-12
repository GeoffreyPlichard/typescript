const profile = {
  name: 'toto',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
}

// const age: number = profile.age;
const { age }: { age: number }  = profile; // with destructuring

// const coords = profile.coords;
const { coords: { lat, lng } }: { coords: { lat: number; lng: number }} = profile; // with destructuring