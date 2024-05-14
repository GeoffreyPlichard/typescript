class ArrayOfNumber {
  constructor(public collection: number[]) {}

  get(index: number) {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number) {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get (index: number) {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);