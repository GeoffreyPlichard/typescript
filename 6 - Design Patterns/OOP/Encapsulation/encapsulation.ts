// Exemple d'encapsulation

class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // Ici, nous respectons le principe d'encapsulation
  // car un utilisateur n'a pas accès directement à la variable "balance". 
  public get balance(): number {
    return this._balance;
  }

  public deposit(amount: number): void {
    if (amount < 0) {
      console.log('Invalid amount');
      return;
    }

    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log('Invalid amount');
      return;
    }

    if (this._balance < amount) {
      console.log('Insufficient funds');
      return;
    }

    this._balance -= amount;
  }
}

const myAccount = new BankAccount(100);
myAccount.deposit(500);
myAccount.withdraw(100);
// myAccount._balance; // Interdit !

// Utilisons le plutôt le getter
myAccount.balance;
