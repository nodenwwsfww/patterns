import { IPaymentService } from './IPaymentService';
import { logger } from './utils/logger';

export class ErrorHandlingDecorator implements IPaymentService {
    private wrapped: IPaymentService;

    constructor(paymentService: IPaymentService) {
        this.wrapped = paymentService;
    }

    async pay(amount: number): Promise<void> {
        try {
            logger.info(`Attempting to pay $${amount}`);
            await this.wrapped.pay(amount);
        } catch (error) {
            logger.error(`Failed to pay $${amount}: ${error}`);
        }
    }
}
