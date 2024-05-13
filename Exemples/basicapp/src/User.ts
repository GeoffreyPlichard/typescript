
import  { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

// implements allow to point the source of an error if
// we forget to add a required property
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  }
  color: 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `User Name is ${this.name}`;
  }
}