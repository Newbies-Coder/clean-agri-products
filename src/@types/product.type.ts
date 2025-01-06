export interface ProductType {
    id: string;
    name: string;
    price: number;
    discount?: number | null;
    image: string;
    rating: number;
    category: string;
    description?: string;
    purchaseQuantity?: number;
}