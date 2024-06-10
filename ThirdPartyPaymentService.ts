import { logger } from './utils/logger';

export class ThirdPartyPaymentService {
    async processPayment(amount: number): Promise<void> {
        logger.info(`Processing payment of $${amount} through third-party service.`);
        // Simulate an async operation with a delay
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }
}
