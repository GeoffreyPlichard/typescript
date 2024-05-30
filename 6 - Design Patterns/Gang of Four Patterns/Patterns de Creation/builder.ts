interface Builder {
  setPartA(): void;
  setPartB(): void;
  setPartC(): void;
}

class Product {
  private parts: string[] = [];

  public add(part: string): void {
    this.parts.push(part);
  }

  public listParts(): void {
    console.log(`Product Parts: ${this.parts.join(', ')}`);
  }
}

class ConcreteBuilder implements Builder {
  private product!: Product;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }

  public setPartA(): void {
    this.product.add("Part A");
  }
  public setPartB(): void {
    this.product.add("Part B");
  }
  public setPartC(): void {
    this.product.add("Part C");
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  private builder!: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimumProduct(): void {
    this.builder.setPartA();
  }

  public buildFullProduct(): void {
    this.builder.setPartA();
    this.builder.setPartB();
    this.builder.setPartC();
  }
}

// Client

const builder = new ConcreteBuilder();
const director = new Director();
director.setBuilder(builder);

director.buildMinimumProduct();
let minimumProduct = builder.getProduct();
console.log(minimumProduct);

director.buildFullProduct();
let fullProduct = builder.getProduct();
console.log(fullProduct);
