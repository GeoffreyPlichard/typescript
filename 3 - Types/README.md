# Qu'est ce que les Types ?

Les types sont un moyen d'identifier de quel type est la valeur qui est instanciée dans une variable et donc de permettre aussi de connaitre les propriétés et méthodes du type.

Par exemple, un type string est un type "chaine de caractère" mais possède aussi des méthodes comme "includes()" car ce sont des objets en Javacript.

`"Je suis un type string".includes("")`

Les types peuvent représenter des valeurs basiques (types primitifs) comme des chaines de caractère ou des nombres mais aussi des objets plus complexes (types objets) comme des classes ou des objets littéraux.

`const nb: number = 123`

`const maclasse: MaClasse = new MaClasse()`

```
interface MonObj = {
  id: number;
  title: string;
}
const monObj: MonObj = {id: 1, title: 'title'}
```

#### Types primitifs

Les types primitifs sont: number, boolean, string, void, null, undefined, symbol

#### Types objets

Les types objets sont: functions, array, class, object

## Type annotations / Type inference

Si aucun type n'est ajouté, Typescript en ajoutera un implicitement.
Si on instancie une variable sans lui ajouter de type (Type annotations), Typescript essayera de deviner son type (Type inference)
Par exemple:

```
const person = {
  age: 20
}
person.name -> error
```

La plupart du temps, annoter les variables manuellement est inutile car Typescript le fait automatiquement.
Les seules fois où l'on a besoin d'utiliser les annotations sont:

- Quand on instancie une variable plus tard:

```
let apples;
apples = 5; // Type any
```

- Quand une fonction retourne any:

```
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); // JSON.parse retourne any
```

- Quand on veut accépter plusieurs types

## Void / Never

We can add "void" type to a function that returns anything or return null / undefined

```
function nothing(): void {
  console.log('');
}
```

If a function doesn't have a return but stop the function we can use "never"

```
const throwError = (message: string): never => {
  throw new Error(message);
};
```
