// Pas bien !
// Dans ce cas ci-dessous, il faudrait modifier la méthode souvent dans le cas
// d'ajout de customerType etc...

// class Discount {
//   giveDiscount(customerType: 'premium' | 'regular'): number {
//     if (customerType == 'regular'){
//       return 10;
//     } else if(customerType === 'premium') {
//       return 20;
//     } else {
//       return 10;
//     }
//   }
// }


// Ici aucune méthode n'a besoin d'être modifiée. 
// On peut juste créer une nouvelle classe par type de customer
interface Customer {
  giveDiscount(): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}

let premiumCustomer: PremiumCustomer = new PremiumCustomer();
let discount: Discount = new Discount();
discount.giveDiscount(premiumCustomer);