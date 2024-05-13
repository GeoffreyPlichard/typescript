export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {

  constructor(private collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    // BAD
    // This depends of data structure. Need to extract logic
    // for (let i = 0; i < length; i++) {
    //   for (let j = 0; j < length - i - 1; j++) {
    //     if (this.collection[j] > this.collection[j + 1]) {
    //       const leftHand = this.collection[j];
    //       this.collection[j] = this.collection[j + 1];
    //       this.collection[j + 1] = leftHand;
    //     }
    //   }
    // }

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}