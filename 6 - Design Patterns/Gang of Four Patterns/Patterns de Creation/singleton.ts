
class Singleton {
  // Comme nous ne voulons pas créer plusieurs instances de cette classes
  // il nous faut un moyen d'accéder à cette propriété sans instancier la classe.
  private static instance: Singleton;

  private static _value: number;

  // De cette manière la classe ne peut pas être instanciée.
  private constructor() {}

  // Ici, on utilise "public" pour accéder à cette classe mais "static" 
  // pour ne pas avoir à instancier la classe
  public static getInstance(): Singleton {
    // On vérifie si une instance a déjà été crée (on veut qu'UNE instance)
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    
    return this.instance;
  }

  set value(value: number) {
    // Pourquoi on utilise pas "this._value" ?
    // Car "this" fait référence au contexte de l'instance créée à partir de la classe
    // Ici c'est une valeur "static"
    Singleton._value = value;
  }

  get value(): number {
    return Singleton._value;
  }

}


// Client

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

instance1.value = 10;

console.log(instance1.value);
console.log(instance2.value);
console.log(instance1 === instance2); // true