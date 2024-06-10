import { IPaymentService } from './IPaymentService';
import { ThirdPartyPaymentService } from './ThirdPartyPaymentService';

export class PaymentAdapter implements IPaymentService {
    private thirdPartyService: ThirdPartyPaymentService;

    constructor(thirdPartyService: ThirdPartyPaymentService) {
        this.thirdPartyService = thirdPartyService;
    }

    async pay(amount: number): Promise<void> {
        await this.thirdPartyService.processPayment(amount);
    }
}
