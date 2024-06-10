import { ThirdPartyPaymentService } from './ThirdPartyPaymentService';
import { PaymentAdapter } from './PaymentAdapter';
import { LoggingDecorator } from './LoggingDecorator';
import { ErrorHandlingDecorator } from './ErrorHandlingDecorator';
import { IPaymentService } from './IPaymentService';

const thirdPartyService = new ThirdPartyPaymentService();
const paymentAdapter: IPaymentService = new PaymentAdapter(thirdPartyService);

const loggingPaymentService: IPaymentService = new LoggingDecorator(paymentAdapter);
const errorHandledPaymentService: IPaymentService = new ErrorHandlingDecorator(loggingPaymentService);

(async () => {
    await errorHandledPaymentService.pay(100);
})();
