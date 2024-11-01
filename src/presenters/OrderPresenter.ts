import { PaymentMethod } from "../types";

export interface OrderPresenter {
    submitOrder(email: string, phone: string): void;

    payment(method: PaymentMethod, address: string): void;

    onSuccess(id: number): void;
}