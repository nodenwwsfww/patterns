export interface IPaymentService {
    pay(amount: number): Promise<void>;
}
