Une interface ou une classe abstraite permet de définir un contrat entre différentes classes.
Les interfaces vont plutôt être utilisées quand les classes n'ont pas de relations entre elles.

Par exemple:

```
interface User {
  name: string;
  age: number;
  displayName: () => string;
}

interface Company {
  name: string;
  address: string;
}
```

Une classe abstraite va être utilisée de préférence pour des classes qui sont liées par des notions d'héritage et partagent des méthodes communes.

```
export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  // Do sorting stuff
}

export class NumbersCollection extends Sorter {
  // Implements abstracted methods
  compare(leftIndex: number, rightIndex: number): boolean {
      // Do compare stuff
  }
}

export class CharactersCollection extends Sorter {
  // Implements abstracted methods
  compare(leftIndex: number, rightIndex: number): boolean {
      // Do compare stuff
  }
}
```
