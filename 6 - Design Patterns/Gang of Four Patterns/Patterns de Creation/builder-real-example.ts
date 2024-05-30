// Customer onboarding process

interface ICustomer {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
}

interface ICustomerBuilder {
  setFirstName(firstname: string): ICustomerBuilder;
  setLastName(lastname: string): ICustomerBuilder;
  setEmail(email: string): ICustomerBuilder;
  setPhoneNumber(phoneNumber: string): ICustomerBuilder;
  build(): ICustomer;
}

class Customer implements ICustomer {
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public phoneNumber: string
  ) {}
} 

class CustomerBuilder implements ICustomerBuilder {
  private firstname: string = '';
  private lastname: string = '';
  private email: string = '';
  private phoneNumber: string = '';

  public setFirstName(firstname: string): ICustomerBuilder {
    this.firstname = firstname;
    return this;
  };

  public setLastName(lastname: string): ICustomerBuilder {
    this.lastname = lastname;
    return this;
  };

  public setEmail(email: string): ICustomerBuilder {
    this.email = email;
    return this;
  };

  public setPhoneNumber(phoneNumber: string): ICustomerBuilder {
    this.phoneNumber = phoneNumber;
    return this;
  };

  public build(): ICustomer {
    return new Customer(
      this.firstname,
      this.lastname,
      this.email,
      this.phoneNumber
    )
  }
}

class CustomerDirector {
  constructor(private builder: ICustomerBuilder) {}

  public buildMinimalCustomer(firstname: string, lastname: string, email: string) {
    return this.builder
    .setFirstName("John")
    .setLastName("Doe")
    .setEmail("john.doe@test.fr")
    .build();
  }
}

const testBuilder: ICustomerBuilder = new CustomerBuilder();
const testDirector: CustomerDirector = new CustomerDirector(testBuilder);

const minimalCustomer: ICustomer = testDirector.buildMinimalCustomer(
  "John",
  "Doe",
  "john.doe@example.com"
);

console.log(minimalCustomer)
