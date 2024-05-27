interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}

  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = {...this.user};
    return clone;
  }

  public getUserDetails(): UserDetails {
    return this.user;  
  }
}

// Client

let user1 = new ConcretePrototype({
  name: "John",
  age: 23,
  email: "john@test.com"
});

let user2 = user1.clone();

user1 === user2 // False
