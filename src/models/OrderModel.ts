import { PaymentMethod } from "../types";

export interface OrderModel {
    setAddress(address: string): void;

    setPersonalInfo(email: string, phone: string): void;

    setPaymentMethod(method: PaymentMethod): void;
}