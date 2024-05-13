import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./sorter";


const numbersCollection = new NumbersCollection([0, 10, -8, 20]);
const sorterWithNumbers = new Sorter(numbersCollection);
sorterWithNumbers.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("jfsneociapsoecnw");
const sorterWithCharacters = new Sorter(charactersCollection);
sorterWithCharacters.sort();
console.log(charactersCollection.data);