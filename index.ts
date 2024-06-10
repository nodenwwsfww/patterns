import { ThirdPartyPaymentService } from './ThirdPartyPaymentService';
import { PaymentAdapter } from './PaymentAdapter';
import { LoggingDecorator } from './LoggingDecorator';
import { ErrorHandlingDecorator } from './ErrorHandlingDecorator';
import { IPaymentService } from './IPaymentService';

// Set up the third-party payment service
const thirdPartyService = new ThirdPartyPaymentService();
const paymentAdapter: IPaymentService = new PaymentAdapter(thirdPartyService);

// Decorate the adapter with logging and error handling
const loggingPaymentService: IPaymentService = new LoggingDecorator(paymentAdapter);
const errorHandledPaymentService: IPaymentService = new ErrorHandlingDecorator(loggingPaymentService);

// Use the decorated service to make a payment
(async () => {
    await errorHandledPaymentService.pay(100);
})();
