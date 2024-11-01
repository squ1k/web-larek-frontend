import { CartElement } from "../types";

export interface CartModel {
    getElements(): CartElement[];
}