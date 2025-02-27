# Les décorateurs (Decorators)

Un décorateur est une fonction qui permet d'ajouter des fonctionnalités à une fonction, classe ou propriété.
Les paramètres que prend cette fonction sont les <b>metadatas</b>.

Exemple: Logger le nom de la méthode avant qu'elle soit exécutée.

```
function log(target, key, descriptor) {
  console.log(`Logging ${key} function`);
  return descriptor;
}

class Example {
  @log
  greet() {
    console.log("Hello, world!");
  }
}

// Logging greet function
// Hello, world!
```

## Composition

Il est possible d'ajouter plusieurs décorateurs qui seront exécutés dans
l'ordre d'ajout.

```
@decorateur1
@decorateur2
class Example {

}
```
