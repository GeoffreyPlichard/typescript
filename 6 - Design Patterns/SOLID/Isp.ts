// Interface Segregation


// Ici c'est impossible de créer une simple machine. On est 
// obligé d'implémenter toutes les fonctionnalités.
interface Machine {
  print(document: Document): void;
  scan(document: Document): void;
  fax(document: Document): void;
}


// Ici on split en plusieurs interface pour pouvoir créer d'autres machines
// qui n'ont pas besoin de toutes les fonctions.
interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface FaxMachine {
  fax(document: Document): void;
}

// class MultiFunctionPrinter implements Machine {
class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {
  print(document: Document): void {
    console.log('The Machine is printing...');
  }

  scan(document: Document): void {
    console.log('The Machine is scaning...');
  }

  fax(document: Document): void {
    console.log('The Machine is faxing...');
  }
}

// Maintenant nous pouvons créer une machine plus simple
class SimplePrinter implements Printer {
  print(document: Document): void {
    console.log('The Machine is printing...');
  }
}