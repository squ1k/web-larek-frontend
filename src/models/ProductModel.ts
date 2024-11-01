import { Product } from "../types";

export interface ProductModel {
    getProductById(id: number): Promise<Product>;
}