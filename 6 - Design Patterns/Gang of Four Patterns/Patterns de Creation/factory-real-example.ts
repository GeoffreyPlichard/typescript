
abstract class PaymentProcessor {
  constructor(public amount: number) {}

  public abstract processPayment(): void;
}

class PaypalProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Processing Paypal Payment: ${this.amount}`);
  }
}

class StripeProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Processing Stripe Payment: ${this.amount}`);
  }
}

class BankProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Processing Bank Payment: ${this.amount}`);
  }
}

class PaymentProcessorFactory {
  public createProcessor(type: 'paypal' | 'stripe' | 'bank', amount: number){
    switch(type) {
      case 'paypal':
        return new PaypalProcessor(amount);
      case 'stripe':
        return new PaypalProcessor(amount);
      case 'bank':
        return new PaypalProcessor(amount);
      default:
        throw new Error('Invalid type');
    }
  }
}

// Client

const processorFactory = new PaymentProcessorFactory();

const paypalPayment = processorFactory.createProcessor('paypal', 200);
const stripePayment = processorFactory.createProcessor('stripe', 200);

paypalPayment.processPayment();
stripePayment.processPayment();