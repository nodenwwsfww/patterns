import { IPaymentService } from './IPaymentService';
import { logger } from './utils/logger';

export class LoggingDecorator implements IPaymentService {
    private wrapped: IPaymentService;

    constructor(paymentService: IPaymentService) {
        this.wrapped = paymentService;
    }

    async pay(amount: number): Promise<void> {
        logger.info(`Initiating payment of $${amount}`);
        await this.wrapped.pay(amount);
        logger.info(`Payment of $${amount} completed`);
    }
}
