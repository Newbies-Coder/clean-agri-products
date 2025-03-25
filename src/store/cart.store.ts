import { create } from "zustand";

interface CartItem {
  product_id: string;
  product_attribute_id: string;
  quantity: number;
  price: number;
}

interface CartState {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  setCart: (cart) => set({ cart }),
}));
