export type Cart = {
  _id: string;
  carts: CartItem[];
};

type CartItem = {
  productDetails: {
    _id: string;
    name: string;
    slug: string;
    description: string;
    thumbnail_url: string;
  };
  productAttributeId: string;
  quantity: number;
  price: number;
}
