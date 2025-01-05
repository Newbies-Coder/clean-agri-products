import type { ProductType } from "@/@types/product.type";
import Product_1 from "@/assets/images/Product-1.png";
import Product_2 from "@/assets/images/Product-2.png";

export const products: ProductType[] = [
    {
        id: "1",
        name: "Red tomato",
        price: 39.99,
        discount: 50,
        image: Product_1,
        rating: 3,
        category: "fresh",
        description: "New Product"
    },
    {
        id: "2",
        name: "Green cabbages",
        price: 19.99,
        discount: null,
        image: Product_1,
        rating: 4,
        category: "vegetables",
        description: "New product"
    },
    {
        id: "3",
        name: "Green chilli",
        price: 19.99,
        discount: 40,
        image: Product_2,
        rating: 1,
        category: "vegetables",
        description: "New product"
    },
    {
        id: "4",
        name: "Green cabbages",
        price: 19.99,
        discount: 40,
        image: Product_1,
        rating: 4,
        category: "vegetables",
        description: "New product"
    },
    {
        id: "5",
        name: "Green cabbages",
        price: 19.99,
        discount: null,
        image: Product_2,
        rating: 2,
        category: "vegetables",
        description: "New product"
    },
    {
        id: "6",
        name: "Green cabbages",
        price: 19.99,
        discount: null,
        image: Product_1,
        rating: 4,
        category: "vegetables",
        description: "New product"
    },
    {
        id: "7",
        name: "Green cabbages",
        price: 19.99,
        discount: 40,
        image: Product_1,
        rating: 5,
        category: "vegetables",
        description: "New product"
    },
    {
        id: "8",
        name: "Green cabbages",
        price: 19.99,
        discount: null,
        image: Product_1,
        rating: 4,
        category: "vegetables",
        description: "New product"
    },
    {
        id: "9",
        name: "Green cabbages",
        price: 19.99,
        discount: 40,
        image: Product_2,
        rating: 4.5,
        category: "vegetables",
        description: "New product"
    },
    // {
    //     id: "10",
    //     name: "Green cabbages",
    //     price: 19.99,
    //     discount: 40,
    //     image: Product_1,
    //     rating: 4,
    //     category: "vegetables",
    //     description: "New product"
    // },
    
]