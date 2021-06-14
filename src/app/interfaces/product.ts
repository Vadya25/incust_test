import { ICategory } from "./category";

export interface IProduct {
    category: Array<ICategory>,
    description: string,
    image: string,
    manufacturer: string,
    model: string,
    name: string,
    price: number,
    shipping: number,
    sku: number,
    type: string,
    upc: string,
    url: string
}